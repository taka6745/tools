document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.getElementById("download-tool");
    const releaseNotesDiv = document.getElementById("release-notes");
  
    // Fetch latest release information from the GitHub API
    fetch("https://api.github.com/repos/taka6745/Change-Environments/releases/latest")
      .then(response => response.json())
      .then(data => {
        // Set the download link
        const zipUrl = data.zipball_url;
        downloadButton.onclick = () => {
          window.location.href = zipUrl;
        };
  
        // Populate release notes
        const notes = data.body || "No release notes available.";
        releaseNotesDiv.innerHTML = `<h3>Release Notes:</h3><p>${notes}</p>`;
      })
      .catch(error => {
        console.error("Error fetching release information:", error);
        releaseNotesDiv.innerHTML = `<p>Error loading release notes.</p>`;
      });
  });
  