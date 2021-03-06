let utils = {};

utils.throttle = function (fn, interval = 1000, option) {
  var last = 0;
  var timer = null;
  if (!option) option = {};
  var trailing = option.trailing || false;
  var result = option.result || null;
  var handleFn = function () {
    // this和argument
    var _this = this;
    var _arguments = arguments;
    var now = new Date().getTime();
    if (now - last > interval) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      callFn(_this, _arguments);
      last = now;
    } else if (timer === null && trailing) { // 只是最后一次
      timer = setTimeout(function () {
        timer = null;
        callFn(_this, _arguments);
      }, interval);
    }
  }
  handleFn.cancel = function () {
    clearTimeout(timer);
    timer = null;
  }

  function callFn(context, argument) {
    var res = fn.apply(context, argument);
    if (result) {
      result(res);
    }
  }
  return handleFn;
}


export default utils