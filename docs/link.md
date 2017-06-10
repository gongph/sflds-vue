# 超链接组件
超链接组件是对 `<a>` 标签的封装，实现页面跳转等点击效果，页面上的很多地方都用到了超链接组件，例如：[quick-link](./quick-link.html) 组件等，像下面的示例代码。

## 示例代码

```html
<sf-link href="./about">系统简介</sf-link>
```

## API
以下是 `<sf-link>` 组件可用的 props：

| 属性 | 类型 | 默认值 | 说明 |
| :---: | :---: | :---: | --- |
| href | String | `#` | 指定跳转链接 |
| target | String | `_blank` | 打开链接方式，用法同 `<a>` |

