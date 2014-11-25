S.controller("galleries", function(element) {
  var tmpl = S.template(element.getElementsByTagName("template")[0].innerHTML);

  Gallery.on("load", function(medias) {
    var html = "", key;

    for(key in medias) if (medias.hasOwnProperty(key)) {
      html += tmpl(medias[key]);
    }

    element.innerHTML = html;
  }).on("activate", function(media) {
    Gallery.load();
    S.route.update("/guide/" + Guide.uuid + "/media/" + media.uuid, false);
  });
});
