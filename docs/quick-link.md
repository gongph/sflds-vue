# 快速链接组件
快速链接组件是 [aside](./aside.html) 组件的子组件。

## 示例代码

```html
<sf-quick-link>
  <sf-link v-for="link of links" :key="link.id" :href="link.url">{{link.name}}</sf-link>
</sf-quick-link>
```

```js
new Vue({
  ...
  data: {
    links: [
      { id: '1', name: '上海证券交易所', url: 'http://www.sse.com.cn'},
      { id: '2', name: '深圳证券交易所', url: 'http://www.szse.cn'},
      { id: '3', name: '中国金融期货交易所', url: 'http://www.cffex.com.cn'}
    ]
  }
});
```

## API

以下是 `<sf-quick-link>` 组件可用的 props：

| 属性 | 类型 | 默认值 | 说明 |
| :---: | :---: | :---: | --- |
| title | String | `快速链接` | 标题 |