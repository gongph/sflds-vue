export default {
  /**
   * type check
   */
  typeof (obj) {
    const toString = Object.prototype.toString;
    const map = {
      '[object Boolean]'  : 'boolean',
      '[object Number]'   : 'number',
      '[object String]'   : 'string',
      '[object Function]' : 'function',
      '[object Array]'    : 'array',
      '[object Date]'     : 'date',
      '[object Undefined]': 'undefined',
      '[object Null]'     : 'null',
      '[object Object]'   : 'object'
    };
    return map[toString.call(obj)];
  },
  deepCopy (data) {
    const t = this.typeof(data);
    let o;

    // init data type
    if (t === 'array') {
      o = [];
    } else if (t === 'object') {
      o = {};
    } else {
      o = data;
    }

    if (t === 'array') {
      for (let i = 0, len = data.length; i < len; i++) {
        o.push(this.deepCopy(data[i]));
      }
    } else if (t === 'object') {
      for (let i in data) {
        o[i] = this.deepCopy(data[i]);
      }
    }
    return o;
  },
  /**
   * 将节点数据转成成树形结构
   * @param  {ArrayObject} nodes  服务端节点集合数据
   */
  transformToTreeFormat (nodes) {
    const key = "id",
          parentKey = "pId",
          childrenKey  = "children";

    if (!key || key == "" || !nodes) return [];
    if (this.typeof(nodes) === 'array') {
      var r = [];
      var tmpMap = {};
      // 先将所有节点对象保存到临时 map 中
      // map中的key是节点对象中的 id 值
      for (let i = 0, len = nodes.length; i < len; i++) {
        tmpMap[nodes[i][key]] = nodes[i];
      }
      for(let i = 0, len = nodes.length; i < len; i++) {
        // 如果tmpMap中有对应的父节点对象存在，且
        // 当前节点的 id !== pId 的值
        if (tmpMap[nodes[i][parentKey]] && nodes[i][key] !== nodes[i][parentKey]) {
          // 如果父节点没有 children 属性
          if (!tmpMap[nodes[i][parentKey]][childrenKey]) {
            tmpMap[nodes[i][parentKey]][childrenKey] = [];
          }
          tmpMap[nodes[i][parentKey]][childrenKey].push(nodes[i]);
        } else {
          r.push(nodes[i]);
        }
      }
      return r;
    } else {
      return [nodes];
    }
  }
}