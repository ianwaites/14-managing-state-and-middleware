'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // the requestRepos function is getting all of the GitHub repos linked to the site owners GitHub repository and then placing them in the repos.all array.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
