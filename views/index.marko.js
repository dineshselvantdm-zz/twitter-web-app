function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      await_tag = __loadTag(require("marko/taglibs/async/await-tag")),
      escapeScript = __helpers.xs;

  return function render(data, out) {
    out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"robots\" content=\"INDEX,FOLLOW\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=yes\"><title>Twitter App</title><link href=\"/assets/bundle.css\" media=\"screen\" rel=\"stylesheet\"> <link rel=\"shortcut icon\" href=\"/images/favicon.ico\" type=\"image/x-icon\"></head><body>");

    await_tag({
        timeout: 20000,
        _dataProvider: data.promiseData,
        _name: "data.promiseData",
        renderBody: function renderBody(out, promiseData) {
          out.w("<div id=\"appContainer\">" +
            str(promiseData.serverside_rendered_html) +
            "</div><script src=\"/assets/bundle.min.js\" async=\"async\" defer=\"defer\"></script><script type=\"text/javascript\">\n\t\t\t\tvar userData = " +
            escapeScript(JSON.stringify(promiseData.userData)) +
            "\n\t\t\t</script>");
        }
      }, out);

    out.w(" </body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
