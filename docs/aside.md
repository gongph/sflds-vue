# 侧边栏组件
侧边栏组件是 [main](./main.html) 组件的子组件，例如左侧，右侧。其中法律法规系统首页的 `综合查询` 和 `快速链接` 就属于侧边栏的左侧部分。

## 示例代码

```html 
<sf-aside align="left">...</sf-aside>
```

## 效果图

![preview](./media/aside.png)

## API

以下是 `<sf-aside>` 组件可用的 props：

| 属性 | 类型 | 默认值 | 说明 |
| :---: | :---: | :---: | :--- |
| align | String | - | 侧边栏位置，可选值为 `left` , `right`|