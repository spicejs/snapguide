var Guide = S.observable({
  guideUrl: "http://snapguide.com",
  uuid: "b995492d5e7943e3b2757a88fe3ef7c6", // default
  cache: {},
  last_url: undefined,

  fetch: function(uuid) {
    var self = this, url = "/api/guide/" + (uuid || self.uuid);
    if (self.last_url === url) return;

    ajax(url).on("load", function(data) {
      self.last_url = url;
      self.trigger("load", data.guide);
    });
  }
}).on("load", function(data) {
  this.cache = data;
  this.title = data.publish_title;
  this.url = this.guideUrl + data.publish_url;
  Gallery.load(data.media);
});
