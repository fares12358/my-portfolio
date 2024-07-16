
let commits=document.querySelector(".intro .exper .commits span");

let projects=document.querySelector(".intro .exper .projects span");

async function getGitHubRepos() {
  const username = 'fares12358';
  const url = `https://api.github.com/users/${username}/repos`;

  try {
      const response = await fetch(url);
      const repos = await response.json();

      const repoList = document.getElementById('repo-list');

      repos.forEach(repo => {
          const listItem = document.createElement('li');
          listItem.textContent = repo.name;
          repoList.appendChild(listItem);
      });
  } catch (error) {
      console.error('Error fetching repositories:', error);
  }
}

// Call the function to fetch and display repos
getGitHubRepos();