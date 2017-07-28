'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // aboutController.index is an arrow function that holds the logic for showing the #about section of the index.html page while hiding its sibling (the #articles section)
  // app.repos.requestRepos lives in repo.js and is showing the repos from the site owners GitHub repositories
  // app.repoView.index lives in repoView.js is getting the data from requestRepos and rendering the data with the repoView function
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
