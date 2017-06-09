// components
import View from './components/view/view.vue';
import Header from './components/header/header.vue';
import Footer from './components/footer/footer.vue';
import Main from './components/main/main.vue';
import Aside from './components/aside/aside.vue';
import QuickLink from './components/quick-link/quick-link.vue';
import Logo from './components/logo/logo.vue';
import Toolbar from './components/toolbar/toolbar.vue';
import ToolbarItem from './components/toolbar/toolbar-item.vue';
import Navbar from './components/navbar/navbar.vue';
import NavbarItem from './components/navbar/navbar-item.vue';
import Position from './components/position/position.vue';
import Breadcrumb from './components/breadcrumb/breadcrumb.vue';
import BreadcrumbItem from './components/breadcrumb/breadcrumb-item.vue';
import Font from './components/font/font.vue';
import Search from './components/search/search.vue';
import Link from './components/link/link.vue';
import Tabs from './components/tabs/tabs.vue';
import Tab from './components/tabs/tab.vue';
import Page from './components/page/page.vue';
import Table from './components/table/table.vue';
import Button from './components/button/button.vue';

const install = function (Vue, opts = {}) {
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
      'sf-button': Button
    }
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign({}, { install });