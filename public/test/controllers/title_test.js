describe("S.control(title)", function() {
  var h1 = document.createElement("h1");
  h1.innerHTML = '<template>{{= title }}</template>';

  it("sets the page title", function () {
    S.control("title", h1);
    assertTitle("Make Confit Byaldi");
    assertTitle("How to cook a pie");
  });

  function assertTitle(title) {
    Guide.trigger("load", {publish_title: title});
    assert.equal(h1.innerText, title);
    assert.equal(document.title, "SnapGallery: " + title);
  }
});
