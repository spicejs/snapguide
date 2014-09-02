// mock dependencies
var ajax = S.observable(function ajax(url) {
  ajax.url = url;
  setTimeout(function () {
    ajax.trigger("load", ajax.data || {})
  }, 10);
  return ajax;
});
