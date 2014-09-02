describe("Guide", function() {
  it("fetches data from ajax", function() {
    ajax.data = {guide: {publish_title: "Acai Bowl"}};
    Guide.fetch("123");

    setTimeout(function () {
      assert.equal(Guide.last_url, "/api/guide/123");
      assert.deepEqual(Guide.cache, ajax.data.guide);
    }, 11);
  });
});
