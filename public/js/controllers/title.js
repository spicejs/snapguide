S.controller("title", function(element) {
  var tmpl = S.template(element.getElementsByTagName("template")[0].innerHTML);

  Guide.on("load", function() {
    element.innerHTML = tmpl(Guide);
    document.title = "SnapGallery: " + Guide.title;
  });
});
