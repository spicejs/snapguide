var Gallery = S.observable({
  imgUrl: "http://images.snapguide.com/images/guide/",
  uuid: undefined,
  current: undefined,
  cache: {},

  load: function (medias) {
    var key, value;
    if (!medias) return this.trigger("load", this.cache);
    this.cache = {};
    this.uuid = undefined;
    this.current = undefined;

    for (key in medias) if (medias.hasOwnProperty(key)) {
      value = medias[key];
      this.cache[key] = this.buildMedia(key, value);
      this.uuid || this.activate(key);
    }

    return this.trigger("load", this.cache);
  },

  activate: function(uuid) {
    this.uuid = uuid;
    this.current = this.cache[uuid];
    return this.trigger("activate", this.current);
  },

  buildMedia: function (key, data) {
    data.uuid = key;
    data.original_url = this.imgUrl + key + "/original.jpg";
    data.small_url = this.imgUrl + key + "/60x60_ac.jpg";
    data.medium_url = this.imgUrl + key + "/300x294_ac.jpg";
    return data;
  }
});
