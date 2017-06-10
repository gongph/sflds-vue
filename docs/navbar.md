# 导航栏组件
导航栏组件是 [header](./header.html) 组件的子组件。

## 示例代码

```html
<sf-navbar>
  <sf-navbar-item href="zhcx">综合查询</sf-navbar-item>
  <sf-navbar-item href="/fltxcx">法律体系查询</sf-navbar-item>
  <sf-navbar-item href="/home" active>最新法律资讯</sf-navbar-item>
  <!-- active属性也可以像下面这样写 -->
  <sf-navbar-item href="/home" :active="true">动态Prop属性</sf-navbar-item>
</sf-navbar>
```

## 效果图

![preview](./media/navbar.png)

## API

以下是 `<sf-navbar-item>` 组件可用的 props：

| 属性 | 类型 | 默认值 | 说明 |
| :---: | :---: | :---: | :--- |
| href | String | `#` | 指定跳转链接 |
| target | String | `_blank` | 指定跳转方式，用法同 `<a>` |
| active | Boolean | `false` | 是否是激活状态 |

以下是 `<sf-navbar-item>` 组件可用的事件：

| 事件名 | 参数 | 参数类型 | 说明 |
| :---: | :---: | :---: | --- |
| click | event | Object | 点击事件 |