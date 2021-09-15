export default function debounce(fn: Function, delay: number) {
  let timeoutID: any = null
  return function (this: Function) {
    clearTimeout(timeoutID)
    const args = arguments
    const _this = this
    timeoutID = setTimeout(function () {
      fn.apply(_this, args)
    }, delay)
  }
}
