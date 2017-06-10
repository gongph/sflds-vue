# 查询组件
查询组件是 [aside](./aside.html) 组件的子组件。

## 示例代码

```html
<sf-search 
  more-text="高级搜索>>" 
  href="/more" 
  placeholder="请输入关键字..." 
  @click="search">
</sf-search>
```

```js
new Vue({
  ...
  methods: {
    search: function (val) {
      // val: 输入框中的关键字
      // 业务逻辑处理
    }
  }
});
```

## 效果图

![preview](./media/search.png)

## API

以下是 `<sf-search>` 组件可用的 props：

| 属性 | 类型 | 默认值 | 说明 |
| :---: | :---: | :---: | --- |
| href | String | `#` | 点击 `高级查询` 时的跳转链接 |
| more-text | String | `高级查询>>` | 自定义 `高级查询` 链接文本 |
| button-text | String | `-` | 自定义查询按钮文本 |
| placeholder | String | `-` | 文本输入框中的提示文字 |

以下是 `<sf-search>` 组件可用的事件：

| 事件名 | 参数 | 参数类型 | 说明 |
| :---: | :---: | :---: | --- |
| click | val | String | 当点击查询按钮时触发，返回输入框中的值 |