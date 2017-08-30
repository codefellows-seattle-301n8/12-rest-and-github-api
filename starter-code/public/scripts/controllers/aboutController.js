'use strict';
var app = app || {};

(function(module) {
  const aboutController = {
    $(document).ready(() => {
      $("main > section").hide();
      $("#about").show();
    });
  };
    // TODO: Call a function to load all the data.
    // Pass a view function as a callback, so the view will render after the data is loaded.
    module.repos.requestRepos(module.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
