# 按钮组件
目前的按钮组件只有一个 `click` 事件，主要是通过点击事件实现自己的业务逻辑，像下面的示例代码。

## 示例代码

```html 
<sf-button tag="p" tag-class="btn_b" @click="more" primary>更多>></sf-button>

// 渲染后的DOM元素如下：
<p class="btn_b"><button class="btn btn-primary">更多>></button></p>
```

```js
new Vue({
  ...
  methods: {
    more: function (event) {
      // 业务处理
    }
  }
  ...
});
```

## API

以下是 `<sf-button>` 组件可用的 props：

| 属性 | 类型 | 默认值 | 说明 |
| :---: | :---: | :---: | :--- |
| tag | String | - | 指定一个标签作为一个按钮组件的父容器 |
| tag-class | String | - | 指定标签的类选择器 |
| primary | Boolean | `false` | 设置按钮组件的 `btn-primary` 样式 |
| success | Boolean | `false` | 设置按钮组件的 `btn-success` 样式 |
| danger | Boolean | `false` | 设置按钮组件的 `btn-danger` 样式 |
| info | Boolean | `false` | 设置按钮组件的 `btn-info` 样式 |
| warning | Boolean | `false` | 设置按钮组件的 `btn-warning` 样式 |


以下是 `<sf-button>` 组件所有的事件：

| 事件名 | 参数 | 参数类型 | 说明 |
| :---: | :---: | :---: | :--- |
| click | event | Object | 点击事件 |
