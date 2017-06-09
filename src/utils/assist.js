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
  }
}