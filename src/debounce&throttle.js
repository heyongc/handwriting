/**
 * 防抖和节流是常用的优化手段，主要用于处理高频事件触发，如用户的点击、滚动、输入等
 */

// 防抖：多次触发同一个事件，只有在最后一次触发，经过指定的等待时间，才会执行相应的事件处理函数
function debounce(cb, duration) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb.apply(null, arguments);
    }, duration);
  };
}

// 节流：在一定时间内，多次触发同一个事件，但是只会执行一次事件处理函数。节流适用于需要控制函数执行频率的场景。
function throttle(cb, duration) {
  let timer;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        cb.apply(null, arguments);
        timer = null;
      }, duration);
    }
  };
}

function throttleImediate(cb, duration) {
  let t;
  return function () {
    if (!t || new Date() - t > duration) {
      cb.apply(null, arguments);
      t = new Date();
    }
  };
}
