# 分页组件
分页组件主要用来实现分页效果，一般配合 [table](./table.md) 组件使用，也可以单独使用来实现其他的比如文章列表的分页等。

## 示例代码

```html
<sf-page :total="200"></sf-page>
```

## 效果图

![preview](./media/page.png)

## API

以下是 `<sf-page>` 组件可用的 props：

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :---: | :---: | --- |
| :total | Number | `-` | 总条数 |
| :current | Number | `1` | 当前页 |
| :page-size | Number | `20` | 每页显示条数 |
| :show-jump | Boolean | `true` | 是否显示跳转 |

以下是 `<sf-page>` 组件可用的事件：

| 事件名 | 参数 | 参数类型 | 说明 |
| :---: | :---: | :---: | --- |
| on-change | pageInfo | Object | 页码改变时回调，返回分页对象：`{page: 2, pageSize: 20}` 。<br>其中 `page` 是当前页，`pageSize` 是每页显示的条数|