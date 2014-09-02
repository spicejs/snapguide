S.route({
  "*": function () {
    S.control("title", document.getElementById("guide-title"));
    S.control("galleries", document.getElementById("thumbnails"));
  },

  "/guide/{uuid}*" : function (params) {
    Guide.fetch(params.uuid);
  },

  "/guide/*/media/{uuid}": function (params) {
    Guide.on("load", function () { Gallery.activate(params.uuid) });
  },

  "/": function () {
    //redirect to the default guide
    S.route("/guide/" + Guide.uuid);
  }
});
