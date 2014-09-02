describe("Gallery", function() {
  var media = {
    e64: {
      content_type: "image/jpeg",
      height: 2048,
      width: 1536,
      type: "guide_image",
      url: "http://images.snapguide.com/images/guide/e64/original.jpg"
    },
    b201: {
      content_type: "video/quicktime",
      height: 480,
      thumb_url: "http://images.snapguide.com/images/guide/b201.jpg",
      type: "guide_video",
      url: "http://videos.snapguide.com/guide_video/b201.mov",
      width: 272
    }
  };

  describe("#fetch", function () {
    it("Loads media", function() {
      Gallery.load(media);
      assert.deepEqual(Object.keys(Gallery.cache), ["e64", "b201"]);
    });
  });

  describe("#buildMedia", function () {
    it("buids a guide_image object", function() {
      assert.deepEqual(Gallery.buildMedia("e64", media.e64), {
        content_type: "image/jpeg",
        height: 2048,
        width: 1536,
        type: "guide_image",
        url: "http://images.snapguide.com/images/guide/e64/original.jpg",
        uuid:"e64",
        original_url: "http://images.snapguide.com/images/guide/e64/original.jpg",
        small_url: "http://images.snapguide.com/images/guide/e64/60x60_ac.jpg",
        medium_url: "http://images.snapguide.com/images/guide/e64/300x294_ac.jpg"
      });
    });

    it("buids a guide_video object", function() {
      assert.deepEqual(Gallery.buildMedia("b201", media.b201), {
        content_type: "video/quicktime",
        height: 480,
        thumb_url: "http://images.snapguide.com/images/guide/b201.jpg",
        type: "guide_video",
        url: "http://videos.snapguide.com/guide_video/b201.mov",
        width: 272,
        uuid: "b201",
        original_url: "http://images.snapguide.com/images/guide/b201/original.jpg",
        small_url: "http://images.snapguide.com/images/guide/b201/60x60_ac.jpg",
        medium_url: "http://images.snapguide.com/images/guide/b201/300x294_ac.jpg"
      });
    });
  });
});
