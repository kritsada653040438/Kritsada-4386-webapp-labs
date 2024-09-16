 // Function to fetch GitHub user information
 async function fetchGitHubInfo(username) {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );
      const data = await response.json();

      // Handle case where 'name' is null or empty
      const displayName = data.name ? data.name : data.login;

      //show github info
      document.getElementById("name").innerHTML = `<a href="${data.html_url}" target="_blank">${displayName}</a>`;
      document.getElementById("avatar-image").src = data.avatar_url;
    } catch (error) {
      console.error("Error fetching GitHub information:", error);
    }
  }

  // Call the function
  window.onload = function () {
    const username = "kritsada653040438";
    fetchGitHubInfo(username);
  };