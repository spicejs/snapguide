describe("S.control(galleries)", function () {
  var body = document.createElement("div");
  body.innerHTML = '<template>{{= small_url }}</template>';

  it("lists the images on load", function () {
    S.control("galleries", body);
    Gallery.load({a123: {small_url: "small.jpg"}});
    assert.equal(body.innerHTML, Gallery.cache.a123.small_url);
  });

});
