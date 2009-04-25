var Github = {
	initialize: function () {
		this.fetch();
	},
	fetch: function() {
		$.getJSON('http://github.com/api/v1/json/pacoguzman?callback=?', Github.load);
	},
	load: function(github_data) {
		var gh = Github;
		var repositories = github_data.user.repositories;
		repositories.sort(function(a,b) {
			return (a.watchers + a.forks) - (b.watchers + b.forks);
		});
		$('.project_holder').hide();
		$.each(repositories, function(i, repository) {
			if (!repository.fork && !repository.private) {
				if (repository.watchers > 2) {
					// popular
					gh.displayRepository('popular', repository, true);
				} else {
					// other
					gh.displayRepository('other', repository, false);
				}
			}
      if (repository.fork && !repository.private) {
        gh.displayRepository('forks', repository, false);
      }
		});
	},
	displayRepository: function(inside, repo, show_stats) {
		var repo_html = '<div class="repo"><h3><a href="' + repo.url + '">' + repo.name + '</a>';
		if (show_stats) {
			repo_html += ' (' + repo.watchers + ')';
		}
		repo_html += '</h3>';
		repo_html += '<p>' + repo.description + '</p></div>';
		$('#projects_' + inside).prepend(repo_html);
	}
};

$(function() {
	Github.initialize();
})
