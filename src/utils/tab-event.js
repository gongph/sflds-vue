export default {
  /**
   * 添加事件监听
   * @param {String}   eventName 事件名
   * @param {Function} cb 回调
   */
  addEventListener (eventName, cb) {
    $('.nav-tabs').delegate('a[data-toggle="tab"]', eventName, cb);
  }
}