# 底部组件
底部组件是 [view](./view.html) 组件的子组件。

## 示例代码

```html
<sf-footer>
  <sf-link>系统简介</sf-link> | 
  <sf-link>联系我们</sf-link> | 
  <sf-link>访问统计</sf-link> | 
  <sf-link>网站地图</sf-link>
</sf-footer>
```

## 效果图

![preview](./media/footer.png)

## API
以下是 `<sf-footer>` 组件可用的 props：

| 属性 | 类型 | 默认值 | 说明 |
| :---: | :---: | :---: | :--- |
| copyright | String | `版权所有：2016年 中国证监会` | 版权 |
| address | String | `地址：西城区金融大街3号金益大厦` | 地址 |