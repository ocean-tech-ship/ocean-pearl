import Vue from "vue";

export default (ctx, inject) => {
  //Global truncate filter
  Vue.filter('truncate', function (text, stop, clamp) {
    return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
  })
}
