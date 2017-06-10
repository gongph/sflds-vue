# 按钮组件
目前的按钮组件只有一个 `click` 事件，主要是通过点击事件实现自己的业务逻辑，像下面的示例代码。

## 示例代码

```html 
<sf-button @click="more">更多>></sf-button>
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
以下是 `<sf-button>` 组件所有的事件：

| 事件名 | 参数 | 参数类型 | 说明 |
| :---: | :---: | :---: | :--- |
| click | event | Object | 点击事件 |
