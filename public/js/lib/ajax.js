var ajax = (function() {
  function ajax(url, options) {
    var request = S.observable(new XMLHttpRequest());
    options = options || {};
    request.format = options.format || "json";
    request.onload = load.bind(request);
    request.onerror = error.bind(request);
    request.open(options.method || "GET", url, true);
    request.send();
    return request;
  }

  function load() {
    if (this.status < 200 || this.status >= 400) return error();

    var data = this.format === "json" ?
      JSON.parse(this.responseText) :
      this.responseText;

    this.trigger("load", data);
  }

  function error() {
    this.trigger("error");
  }

  return ajax;
})();
