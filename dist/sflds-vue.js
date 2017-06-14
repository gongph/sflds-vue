/**
 * sflds-vue 3.0.0
 * sflds project build with vue2.x
 * 
 * Copyright 2017, gongph <gongph@foxmail.com>
 * 
 */
 (function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.SfldsVue = factory());
}(this, (function () {

var View = {
    render: function (c) {
      var self = this;
      return c('div', {
        class: {
          'pager_m': true
        }
      }, [self.$slots.default])
    }
  };

var Header = {
    render: function (c) {
      var logoEl, self = this;
      logoEl = c('sf-logo');

      return c('div', {
        class: {
          'page_header': true
        }
      }, [logoEl, self.$slots.default])
    }
  };

var Footer = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page_bottom"},[_vm._t("default"),_vm._v(" "),_c('br'),_vm._v("\n  "+_vm._s(_vm.copyright)+"\n  "),_c('br'),_vm._v("\n  "+_vm._s(_vm.address)+"\n")],2)},
staticRenderFns: [],
    props: {
      copyright: {
        type: String,
        default: '版权所有：2016年 中国证监会'
      },
      address: {
        type: String,
        default: '地址：西城区金融大街3号金益大厦'
      }
    }
  };

var Main = {
    render: function (c) {
      var self = this;
      return c('div', {
        class: ( obj = {}, obj[this.classes] = true, obj )
      }, [self.$slots.default]);
      var obj;
    },
    props: {
      classes: {
        type: String,
        default: 'page_middle'
      }
    }
  };

var Aside = {
    render: function (c) {
      var self = this;
      return c('div', {
        class: ( obj = {}, obj[this.alignClass] = true, obj )
      }, [self.$slots.default]);
      var obj;
    },
    props: {
      align: String
    },
    data: function data () {
      return {
        alignClass: this.align + '_main'
      }
    }
  };

var QuickLink = {
    render: function (c) {
      var h5El, self = this;
      h5El = c('h5', {}, self.title);
      return c('div', {
        class: {
          'quick_links': true
        }
      }, [h5El, self.$slots.default]);
    },
    props: {
      title: {
        type: String,
        default: '快速链接'
      }
    }
  };

var Logo = {
  	data: function data () {
  	  return {
  	    sysCn: '法规数据库查询系统',
  	    sysEn: 'Regulatory database query system'
  	  }
  	},
    render: function (c) {
      var syscnEl, sysenEl, self = this;
      syscnEl = c('p', { class: { 'sys_cn': true } }, self.sysCn);
      sysenEl = c('p', { class: { 'sys_en': true } }, self.sysEn);

      var logoEl = c('div', {
        class: {
          'page_header_logo': true
        }
      }, [syscnEl, sysenEl]);

      return logoEl;
    }
  };

var Toolbar = {
    render: function (c) {
      var ulEl, self = this;
      ulEl = c('ul', {}, [self.$slots.default]);
      return c('div', {
        class: {
          'sub_info': true
        }
      }, [ulEl])
    }
  };

var LinkMixin = {
    props: {
      href: {
        type: String,
        default: '#'
      },
      text: String,
      active: Boolean,
      target: {
        type: String,
        default: '_self'
      }
    },
    computed: {
      attrsObject: function () {
        var self = this;
        var ao = {
          href: self.href
        };

        if (self.target) { ao['target'] = self.target; }

        return ao;
      }
    }
  };

var ToolbarItem = {
    render: function (c) {
      var linkEl, self = this;
      linkEl = c('a', {
        attrs: self.attrsObject,
        on: {
          click: self.onClick
        }
      }, [self.$slots.default]);

      return c('li', {}, [linkEl]);
    },
    mixins: [LinkMixin],
    methods: {
      onClick: function onClick (event) {
        this.$emit('click', event);
      }
    }
  };

var Navbar = {
    render: function (c) {
      var self = this;
      return c('div', {
        class: 'main_nav'
      }, [self.$slots.default]);
    }
  };

var NavbarItem = {
    render: function (c) {
      var self = this;
      return c('a', {
        class: {
          'active_nav': self.active ? true : false
        },
        attrs: self.attrsObject,
        on: {
          click: self.onClick
        }
      }, [self.$slots.default]);
    },
    mixins: [LinkMixin],
    methods: {
      onClick: function onClick (event) {
        this.$emit('click', event);
      }
    }
  };

var Position = {
    render: function (c) {
      var self = this;
      return c('div', {
        class: {
          'position_nav': true
        }
      }, [self.$slots.default]);
    }
  };

var Breadcrumb = {
  	name: 'Breadcrumb',
    render: function (c) {
      var self = this;
      return c('div', {
        class: {
          'position_nav_l': true
        }
      }, [self.title, self.$slots.default]);
    },
    props: {
      title: {
        type: String,
        default: '您所在的位置：'
      },
      separator: {
      	type: String,
      	default: '>'
      }
    },
    mounted: function mounted () {
      this.updateChildren();
    },
    methods: {
      updateChildren: function updateChildren () {
        var this$1 = this;

        this.$children.forEach(function (child) {
          child.separator = this$1.separator;
        });
      }
    }
  };

var BreadcrumbItem = {
  	name: 'BreadcrumbItem',
    render: function (c) {
      var spanEl, linkEl, self = this;
      linkEl = c('a', {
        attrs: self.attrsObject
      }, [self.$slots.default]);

      if (!self.showSeparator) {
        spanEl = c('span', {
          class: {
            'breadcrumb-item-separator': true
          },
          style: {
            margin: '0 8px'
          },
        }, self.separator);
      }
      else {
        spanEl = c('span', {}, [self.$slots.separator]);
      }

      return c('span', {}, [linkEl, spanEl]);
    },
    data: function data () {
      return {
        separator: '',
        showSeparator: false
      }
    },
    mixins: [LinkMixin],
    mounted: function mounted () {
      this.showSeparator = this.$slots.separator !== undefined;
    }
  };

var Font = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"position_nav_r"},[_c('span',{staticClass:"fl"},[_vm._v("字体大小：")]),_vm._v(" "),_c('a',{attrs:{"href":"#","id":"small"},on:{"click":function($event){$event.preventDefault();_vm.handleFont($event);}}},[_vm._v("小")]),_vm._v(" "),_c('a',{class:_vm.activeClass,attrs:{"href":"#","id":"middle"},on:{"click":function($event){$event.preventDefault();_vm.handleFont($event);}}},[_vm._v("中")]),_vm._v(" "),_c('a',{attrs:{"href":"#","id":"large"},on:{"click":function($event){$event.preventDefault();_vm.handleFont($event);}}},[_vm._v("大")])])},
staticRenderFns: [],
    props: {
      // 选择器
      selector: String,
      // 是否开启缓存
      cache: {
        type: Boolean,
        default: false
      },
      // 小号字体
      small: {
        type: String,
        default: '12px'
      },
      // 中号字体
      middle: {
        type: String,
        default: '16px'
      },
      // 大号字体
      large: {
        type: String,
        default: '20px'
      }
    },
    data: function data () {
      return {
        activeClass: 'current',
        CACHE_FONT_SIZE: 'cache_font_size' // 常量，缓存中的 key
      }
    },
    mounted: function mounted () {
      var this$1 = this;

      if (this.cache) {
        this.handleLocalStorage(function (size) {
          console.log(size);
          if (!size) { return; }
          this$1.setFontSize(this$1.getSelectorObj(), size.split('_')[1]);
          this$1.removeActiveClass();
          this$1.addActiveClass(document.querySelector('#'+size.split('_')[0]));
        });
      } else {
        this.removeLocalStorage();
      }
    },
    methods: {
      /**
       * 处理字体大小
       * @param  {Object} event 当前Node对象
       */
      handleFont: function handleFont (event) {
      	var targetObj = this.getSelectorObj(),
      	    id = event.target.getAttribute('id'),
      	    flag = ''; // 标识字体

        if (!targetObj) { return; }
        if (id === 'small') {
          this.setFontSize(targetObj, this.small);
          flag = this.small;
        }
        else if (id === 'middle') {
          this.setFontSize(targetObj, this.middle);
          flag = this.middle;
        }
        else {
          this.setFontSize(targetObj, this.large);
          flag = this.large;
        }
        
        this.removeActiveClass();
        this.addActiveClass(event.target);

        if (this.cache) {
          this.setLocalStorage(this.CACHE_FONT_SIZE, id, flag);
        }
      },
      /**
       * 获取选择器元素对象
       * @return 选择器对象，无则返回 null
       */
      getSelectorObj: function getSelectorObj () {
        return document.querySelector(this.selector) || null;
      },
      /**
       * 设置字体大小
       * @param  {Object} target 改变字体大小的目标对象
       * @param  {String} size 字体大小
       */
      setFontSize: function setFontSize (target, size) {
        target.style.fontSize = size;
      },
      /**
       * 设置高亮样式
       * @param  {Object} target 当前Node对象
       */
      addActiveClass: function addActiveClass (target) {
        target.setAttribute('class', this.activeClass);
      },
      /**
       * 移除同步元素高亮样式
       * @param  {Object} event 当前Node对象
       */
      removeActiveClass: function removeActiveClass () {
        var rootNode = document.querySelector('.position_nav_r');
        for (var i = 0, len = rootNode.childNodes.length; i < len; i++) {
          var childNode = rootNode.childNodes[i];
          if (childNode.tagName === 'A' && childNode.hasAttribute('class')) {
            childNode.removeAttribute('class');
          }
        }
      },
      /**
       * 处理本地缓存
       */
      handleLocalStorage: function handleLocalStorage (callback) {
        if (typeof window.localStorage === 'undefined') { return; }

        var sizeVal = window.localStorage.getItem(this.CACHE_FONT_SIZE);
        if (!sizeVal) {
          window.localStorage.setItem(this.CACHE_FONT_SIZE, '');
        } else {
          var sizeArray = sizeVal.split('_');
          this.setLocalStorage(this.CACHE_FONT_SIZEr, sizeArray[0], sizeArray[1]);
        }

        callback(sizeVal);
      },
      /**
       * 设置本地缓存
       * @param  {Object} key 缓存的 key，值等于 this.CACHE_FONT_SIZE
       * @param  {String} id  a标签的 id 属性值
       * @param  {String} size 字体大小
       */
      setLocalStorage: function setLocalStorage (key, id, size) {
        window.localStorage.setItem(key, id + '_' + size);
      },
      /**
       * 删除本地缓存
       */
      removeLocalStorage: function removeLocalStorage () {
        window.localStorage.removeItem(this.CACHE_FONT_SIZE);
      }
    }
  };

var Search = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('div',{staticClass:"search_input"},[_c('span',[_c('input',{attrs:{"type":"text","placeholder":_vm.placeholder}})]),_vm._v(" "),_c('span',[_c('input',{attrs:{"type":"button","value":_vm.buttonText},on:{"click":function($event){$event.stopPropagation();_vm.handleSearch($event);}}})])]),_vm._v(" "),_c('div',{staticClass:"search_more"},[_c('a',{attrs:{"href":_vm.href}},[_vm._v(_vm._s(_vm.moreText))])])])},
staticRenderFns: [],
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      buttonText: {
        type: String,
        default: ''
      },
      href: {
        type: String,
        default: '#'
      },
      moreText: {
        type: String,
        default: '高级查询>>'
      }
    },
    methods: {
      /**
       * 处理查询
       */
      handleSearch: function handleSearch (event) {
        var searchInpObj = $(event.target).closest('.search_input').find("input[type='text']");
        console.log(searchInpObj);
        this.$emit('click', searchInpObj.val());
      }
    }
  };

var Link = {
    render: function (c) {
      var self = this;
      return c('a', {
      	attrs: self.attrsObject
      }, [self.$slots.default]);
    },
    mixins: [LinkMixin]
  };

var TabEvent = {
  /**
   * 添加事件监听
   * @param {String}   eventName 事件名
   * @param {Function} cb 回调
   */
  addEventListener: function addEventListener (eventName, cb) {
    $('.nav-tabs').delegate('a[data-toggle="tab"]', eventName, cb);
  }
};

var Tabs = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ul',{staticClass:"nav nav-tabs",attrs:{"role":"tablist","id":"testul"}},[_vm._l((_vm.headers),function(t){return [_c('li',{class:{active:t.active, disabled:t.disabled},attrs:{"role":"presentation"}},[(t.disabled)?[_c('a',{attrs:{"href":"#","role":"tab"}},[_vm._v(_vm._s(t.header))])]:[_c('a',{attrs:{"href":'#' + t.id,"role":"tab","data-toggle":"tab"}},[_vm._v(_vm._s(t.header))])]],2)]})],2),_vm._v(" "),_c('div',{staticClass:"right_content tab-content"},[_vm._t("default")],2)])},
staticRenderFns: [],
    name: 'tabs',
    props: {
      active: {
        type: Number,
        default: 0
      }
    },
    data: function data () {
      return {
      	show: null,
        headers: [],
        tabs: []
      }
    },
    created: function created () {
      this._tabset = true;
    },
    mounted: function mounted () {
      this.show = this.tabs[this.active];
      this.addTabEvents();
    },
    methods: {
      addTabEvents: function addTabEvents () {
      	var self = this;
        // 标签显示前触发
        TabEvent.addEventListener('show.bs.tab', function (e) {
      	  self.$emit('show:tab', e);
        });

        // 标签显示后触发
        TabEvent.addEventListener('shown.bs.tab', function (e) {
      	  self.$emit('shown:tab', e);
        });

        // 标签隐藏前触发
        TabEvent.addEventListener('hide.bs.tab', function (e) {
      	  self.$emit('hide:tab', e);
        });

        // 标签隐藏后触发
        TabEvent.addEventListener('hidden.bs.tab', function (e) {
      	  self.$emit('hidden:tab', e);
        });
      }
    }
  };

var Tab = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab-pane",class:{active: _vm.active},attrs:{"role":"tabpanel","id":_vm.id}},[_vm._t("default")],2)},
staticRenderFns: [],
  	name: 'tab',
    props: {
      id: String,
      header: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      // 当前实例为激活状态
      active: function active () {
        return this._tabset.show == this;
      },
      // 获取当前实例索引
      index: function index () {
        return this._tabset.tabs.indexOf(this);
      }
    },
    created: function created () {
      var tabset = this;
      while (tabset && tabset._tabset !== true && tabset.$parent) {
        tabset = tabset.$parent;
      }
      if (!tabset._tabset) {
        this._tabset = {};
        console.warn('Warning: "tab" depend on "tabs" to work properly.');
      } else {
        tabset.tabs.push(this);
        tabset.headers.push(this);
        this._tabset = tabset;
      }
    },
    beforeDestroy: function beforeDestroy () {
      console.log('beforeDestroy...');
    }
  };

/**
   * 验证是否是Number
   */
  function isValueNumber (val) {
    return (/^[1-9][0-9]*$/).test(val + '');
  }

  var Options = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showJump)?_c('div',{staticClass:"jump"},[_c('span',{staticClass:"jump_text"},[_c('button',{staticClass:"btn btn-primary btn-xs",attrs:{"type":"button"},on:{"click":_vm.changePage}},[_vm._v("GO")])]),_vm._v(" "),_c('span',{staticClass:"jump_text"},[_vm._v("页")]),_vm._v(" "),_c('span',{staticClass:"jump_text"},[_c('input',{staticClass:"form-control2 goPage",attrs:{"type":"text"},domProps:{"value":_vm._current}})]),_vm._v(" "),_c('span',{staticClass:"jump_text"},[_vm._v("\n    共有"+_vm._s(_vm.allPages)+"页，"+_vm._s(_vm.total)+"条记录。跳到\n  ")])]):_vm._e()},
staticRenderFns: [],
    name: 'pageOptions',
    props: {
      current: Number,
      _current: Number,
      showJump: Boolean,
      total: Number,
      allPages: Number
    },
    methods: {
      changePage: function changePage (event) {
        var jumpInputEl = $(event.target).closest('.jump').find('.goPage');
        var val = jumpInputEl.val().trim();
        var page = 0;
        
        // 验证是否是数字
        if (isValueNumber(val)) {
          //转成Number类型
          val = Number(val);
          if (val !== this.current) {
            var allPages = this.allPages;
            if (val >= allPages) {
              page = allPages;
            } else {
              page = val;
            }
          }
        } else {
          page = 1;
        }

        if (page) {
          this.$emit('on-page', page);
          jumpInputEl.val(page);
        }
      }
    }
  };

var PageMixin = {
    props: {
      // 当前页
      current: {
        type: Number,
        default: 1
      },
      // 总数
      total: {
        type: Number,
        default: 0
      },
      // 每页显示条数
      pageSize: {
        type: Number,
        default: 20
      },
      // 是否显示跳转
      showJump: {
      	type: Boolean,
      	default: true
      }
    }
  };

var Page = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_c('ul',{staticClass:"pagination"},[_c('li',{class:_vm.prevClasses,on:{"click":_vm.prev}},[_c('a',[_vm._v("上一页")])]),_vm._v(" "),_c('li',{class:_vm.firstPageClasses,on:{"click":function($event){_vm.changePage(1);}}},[_c('a',[_vm._v("1")])]),_vm._v(" "),(_vm.currentPage-3 > 1)?_c('li',[_c('a',[_vm._v("...")])]):_vm._e(),_vm._v(" "),(_vm.currentPage - 2 > 1)?_c('li',{on:{"click":function($event){_vm.changePage(_vm.currentPage - 2);}}},[_c('a',[_vm._v(_vm._s(_vm.currentPage - 2))])]):_vm._e(),_vm._v(" "),(_vm.currentPage - 1 > 1)?_c('li',{on:{"click":function($event){_vm.changePage(_vm.currentPage - 1);}}},[_c('a',[_vm._v(_vm._s(_vm.currentPage - 1))])]):_vm._e(),_vm._v(" "),(_vm.currentPage != 1 && _vm.currentPage != _vm.allPages)?_c('li',{staticClass:"active"},[_c('a',[_vm._v(_vm._s(_vm.currentPage))])]):_vm._e(),_vm._v(" "),(_vm.currentPage + 1 < _vm.allPages)?_c('li',{on:{"click":function($event){_vm.changePage(_vm.currentPage + 1);}}},[_c('a',[_vm._v(_vm._s(_vm.currentPage + 1))])]):_vm._e(),_vm._v(" "),(_vm.currentPage + 2 < _vm.allPages)?_c('li',{on:{"click":function($event){_vm.changePage(_vm.currentPage + 2);}}},[_c('a',[_vm._v(_vm._s(_vm.currentPage + 2))])]):_vm._e(),_vm._v(" "),(_vm.currentPage + 3 < _vm.allPages)?_c('li',[_c('a',[_vm._v("...")])]):_vm._e(),_vm._v(" "),(_vm.allPages > 1)?_c('li',{class:_vm.lastPageClasses,on:{"click":function($event){_vm.changePage(_vm.allPages);}}},[_c('a',[_vm._v(_vm._s(_vm.allPages))])]):_vm._e(),_vm._v(" "),_c('li',{class:_vm.nextClasses,on:{"click":_vm.next}},[_c('a',[_vm._v("下一页")])])]),_vm._v(" "),_c('Options',{attrs:{"showJump":_vm.showJump,"total":_vm.total,"allPages":_vm.allPages,"current":_vm.currentPage,"_current":_vm.currentPage},on:{"on-page":_vm.onPage}})],1)},
staticRenderFns: [],
    name: 'page',
	components: { Options: Options },
	mixins: [PageMixin],
	data: function data () {
	  return {
	    currentPage: this.current,
	    currentPageSize: this.pageSize
	  }
	},
	computed: {
      allPages: function allPages () {
        var allPage = Math.ceil(this.total / this.currentPageSize);
        return (allPage === 0) ? 1 : allPage;
	  },
	  prevClasses: function prevClasses () {
	    return {
	      'disabled': this.currentPage === 1
	    }
	  },
      nextClasses: function nextClasses () {
        return {
          'disabled': this.currentPage === this.allPages
        }
      },
      firstPageClasses: function firstPageClasses () {
        return {
          'active': this.currentPage === 1
        }
      },
      lastPageClasses: function lastPageClasses () {
        return {
          'active': this.currentPage === this.allPages
        }
      }
	},
	watch: {
	  // 监听当前页的变化
      current: function current (val) {
        this.currentPage = val;
      }
	},
	created: function created () {
      if (this.currentPage >= this.allPages) { this.currentPage = this.allPages; }
	},
	methods: {
	  /**
	   * 切换页码
	   * @param  {Number} page 页码
	   */
	  changePage: function changePage (page) {
	    if (this.currentPage !== page) {
	      this.currentPage = page;
	  	  var pageSize = this.currentPageSize;
	  	  this.$emit('on-change', { page: page, pageSize: pageSize });
	  	}
	  },
	  /**
	   * 上一页
	   */
	  prev: function prev () {
	    var current = this.currentPage;
	      if (current <= 1) {
	        return false;
	      }
	      this.changePage(current -1);
	  },
	  /**
	   * 下一页
	   */
	  next: function next () {
	    var current = this.currentPage;
	      if (current >= this.allPages) {
	        return false;
	      }
	      this.changePage(current + 1);
	  },
	  /**
	   * 跳转页发生改变时回调
	   */
	  onPage: function onPage (page) {
        this.changePage(page);
	  }
	}
  };

var Assist = {
  /**
   * type check
   */
  typeof: function typeof$1 (obj) {
    var toString = Object.prototype.toString;
    var map = {
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
  deepCopy: function deepCopy (data) {
    var this$1 = this;

    var t = this.typeof(data);
    var o;

    // init data type
    if (t === 'array') {
      o = [];
    } else if (t === 'object') {
      o = {};
    } else {
      o = data;
    }

    if (t === 'array') {
      for (var i = 0, len = data.length; i < len; i++) {
        o.push(this$1.deepCopy(data[i]));
      }
    } else if (t === 'object') {
      for (var i$1 in data) {
        o[i$1] = this$1.deepCopy(data[i$1]);
      }
    }
    return o;
  },
  /**
   * 将节点数据转成成树形结构
   * @param  {ArrayObject} nodes  服务端节点集合数据
   */
  transformToTreeFormat: function transformToTreeFormat (nodes) {
    var key = "id",
          parentKey = "pId",
          childrenKey  = "children";

    if (!key || key == "" || !nodes) { return []; }
    if (this.typeof(nodes) === 'array') {
      var r = [];
      var tmpMap = {};
      // 先将所有节点对象保存到临时 map 中
      // map中的key是节点对象中的 id 值
      for (var i = 0, len = nodes.length; i < len; i++) {
        tmpMap[nodes[i][key]] = nodes[i];
      }
      for(var i$1 = 0, len$1 = nodes.length; i$1 < len$1; i$1++) {
        // 如果tmpMap中有对应的父节点对象存在，且
        // 当前节点的 id !== pId 的值
        if (tmpMap[nodes[i$1][parentKey]] && nodes[i$1][key] !== nodes[i$1][parentKey]) {
          // 如果父节点没有 children 属性
          if (!tmpMap[nodes[i$1][parentKey]][childrenKey]) {
            tmpMap[nodes[i$1][parentKey]][childrenKey] = [];
          }
          tmpMap[nodes[i$1][parentKey]][childrenKey].push(nodes[i$1]);
        } else {
          r.push(nodes[i$1]);
        }
      }
      return r;
    } else {
      return [nodes];
    }
  }
};

var Table = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.showPage)?[_c('Page',{attrs:{"current":_vm.currentPage,"pageSize":_vm.pageSize,"total":_vm.total},on:{"on-change":_vm.onPageChange}})]:_vm._e(),_vm._v(" "),_c('table',{staticClass:"table table-hover table-striped table-condensed",class:_vm.classes},[_c('colgroup',_vm._l((_vm.columns),function(column){return _c('col',{attrs:{"width":column.width}})})),_vm._v(" "),_c('thead',[_c('tr',_vm._l((_vm.columns),function(column){return _c('th',{class:column.classes,domProps:{"textContent":_vm._s(column.title)}})}))]),_vm._v(" "),_c('tbody',[_vm._l((_vm.cloneData),function(row,index){return [_c('tr',_vm._l((_vm.columns),function(column){return _c('td',{key:row,class:column.classes,domProps:{"innerHTML":_vm._s(_vm.renderTd(row, column, index))}})}))]}),_vm._v(" "),(_vm.cloneData.length <= 0)?_c('tr',[_c('td',{staticClass:"text-center font_red",attrs:{"colspan":_vm.columns.length}},[_vm._v("没有符合条件的数据！")])]):_vm._e()],2)]),_vm._v(" "),(_vm.showPage)?[_c('Page',{attrs:{"current":_vm.currentPage,"pageSize":_vm.pageSize,"total":_vm.total},on:{"on-change":_vm.onPageChange}})]:_vm._e()],2)},
staticRenderFns: [],
    name: 'table',
    components: { Page: Page },
    mixins: [PageMixin],
    props: {
      // 自定义样式
      classes: String,
      showIndex: {
        type: Boolean,
        default: true
      },
      // 是否显示分页
      showPage: {
        type: Boolean,
        default: true
      },
      // 列
      columns: {
        type: Array,
        default: function default$1 () {
          return [];
        }
      },
      // 服务端数据
      data: {
        type: Array,
        default: function default$2 () {
          return [];
        }
      }
    },
    data: function data () {
      return {
      	currentPage: this.current,
        cloneColumns: Assist.deepCopy(this.columns),
        cloneData: Assist.deepCopy(this.data)
      }
    },
    watch: {
      data: function data () {
        this.cloneData = Assist.deepCopy(this.data);
      },
      columns: function columns () {
        this.cloneColumns = Assist.deepCopy(this.columns);
      }
    },
    methods: {
      renderTd: function renderTd (row, column, index) {
        if ('render' in column && Assist.typeof(column.render) === 'function') {
          return column.render(row[column.key], row, index);
        } else {
          return row[column.key];
        }
      },
      onPageChange: function onPageChange (pageInfo) {
        this.currentPage = pageInfo.page;
        this.$emit('on-page-change', pageInfo);
      }
    }
  };

var Button = {
    render: function (c) {
      var buttonEl, self = this;
      buttonEl = c('button', {
        class: {
          'btn': true,
          'btn-primary': true
        },
        on: {
          click: self.onClick
        }
      }, [self.$slots.default]);

      return buttonEl;
    },
    methods: {
      onClick: function onClick (event) {
        this.$emit('click', event);
      }
    }
  };

var treeNode = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[(_vm.isFolder)?_c('span',{staticClass:"sf-tree-arrow",on:{"click":_vm.handleExpand}},[_c('i',{staticClass:"glyphicon",class:_vm.allowClasses})]):_vm._e(),_vm._v(" "),_c('span',{class:_vm.titleClasses,domProps:{"innerHTML":_vm._s(_vm.data.name)},on:{"click":_vm.handleSelect}}),_vm._v(" "),(_vm.isFolder)?_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.open),expression:"open"}]},_vm._l((_vm.data.children),function(item){return _c('tree-node',{key:item,attrs:{"data":item}})})):_vm._e()])},
staticRenderFns: [],
    name: 'treeNode',
    props: {
      data: {
        type: Object,
        default: function default$1 () {
          return {};
        }
      }
    },
    data: function data () {
      return {
        open: !!this.data.expand,
      }
    },
    computed: {
      isFolder: function isFolder () {
        return this.data.children && this.data.children.length
      },
      allowClasses: function allowClasses () {
        return 'glyphicon-chevron-' + (this.open ? 'down' : 'right');
      },
      titleClasses: function titleClasses () {
        return [
          'sf-tree-title',
          {
            'sf-tree-title-selected': this.data.selected
          }
        ]
      }
    },
    methods: {
      handleSelect: function handleSelect (e) {
        if (this.data.selected) {
          this.data.selected = false;
        }
        this.dispatch('tree', 'selected', this.data);
      },
      handleExpand: function handleExpand () {
        if (this.isFolder) {
          this.open = !this.open;
        }
      },
      dispatch: function dispatch (componentName, eventName, params) {
      	var parent = this.$parent || this.$root;
      	var name = parent.$options.name;
        while(parent && name != componentName){
          parent = parent.$parent;
          if (parent) {
            name = parent.$options.name;
          }
        }
        if (parent) {
          parent.$emit.apply(parent, [eventName].concat([params]));
        }
      }
    }
  };

var Tree = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sf-tree"},[_c('ul',_vm._l((_vm.cloneData),function(item){return _c('tree-node',{key:item,attrs:{"data":item}})})),_vm._v(" "),(!_vm.data.length)?_c('div',[_vm._v("没有数据！")]):_vm._e()])},
staticRenderFns: [],
    name: 'tree',
    components: { treeNode: treeNode },
    props: {
      data: {
        type: Array,
        default: function default$1 () {
          return [];
        }
      }
    },
    data: function data () {
      return {
        children: [],
        cloneData: Assist.transformToTreeFormat(Assist.deepCopy(this.data))
      }
    },
    watch: {
      data: function data () {
        this.cloneData = Assist.transformToTreeFormat(Assist.deepCopy(this.data));
      }
    },
    mounted: function mounted () {
      var this$1 = this;

      this.$on('selected', function (data) {
        if (this$1.children.length <= 0) {
          this$1.findComponentsDownward(this$1, 'treeNode');
        }

        this$1.children.forEach(function (node) {
          this$1.$set(node.data, 'selected', false);
        });
        this$1.$set(data, 'selected', true);
        this$1.$emit('on-select-change', Assist.deepCopy(data));
      });
    },
    methods: {
      findComponentsDownward: function findComponentsDownward (context, componentName) {
        var this$1 = this;

        var childrens = context.$children;
        if (childrens.length) {
          for (var i = 0, len = childrens.length; i < len; i++) {
            var child = childrens[i];
            var name = child.$options.name;
            if (name === componentName) {
              this$1.children.push(child);
            }
            this$1.findComponentsDownward(child, componentName);
          }
        }
      }
    }
  };

// components
/**
 * Plugins
 */
var index = {
  install: function (Vue) {
    Vue.mixin({
      components: {
        // layout
        'sf-view': View,
        'sf-header': Header,
        'sf-footer': Footer,
        'sf-logo': Logo,
        'sf-position': Position,
        'sf-main': Main,
        'sf-aside': Aside,
        'sf-quick-link': QuickLink,
        // functional
        'sf-toolbar': Toolbar,
        'sf-toolbar-item': ToolbarItem,
        'sf-navbar': Navbar,
        'sf-navbar-item': NavbarItem,
        'sf-breadcrumb': Breadcrumb,
        'sf-breadcrumb-item': BreadcrumbItem,
        'sf-font': Font,
        'sf-search': Search,
        'sf-link': Link,
        'sf-tabs': Tabs,
        'sf-tab': Tab,
        'sf-page': Page,
        'sf-table': Table,
        'sf-button': Button,
        "sf-tree": Tree
      }
    });
  }
};

return index;

})));

//# sourceMappingURL=sflds-vue.js.map
