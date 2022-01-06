(function() {
  var app = {
    'getDate': {
      'getYear': function () {
        return new Date().getFullYear();
      },
      'applyYear': function(el, year) {
        el.innerHTML = year;
      },
    },
    'init': function() {
      // Copyright Date
      const copyrightEl = document.querySelector('#copyright-year');
      app.getDate.applyYear(copyrightEl, app.getDate.getYear());
    }
  };
  window.app = app;
})();

// Move to inside IIFE at production time !!!
app.init();
