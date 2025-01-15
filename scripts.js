document.addEventListener("DOMContentLoaded", () => {
    // Fetch GitHub Projects dynamically
    fetch("https://api.github.com/users/ayesh-chamodye/repos?sort=updated")
        .then(response => response.json())
        .then(repos => {
            const projectsList = document.getElementById("projects-list");
            repos.forEach(repo => {
                if (repo.name.toLowerCase().includes("hide") || (repo.description && repo.description.toLowerCase().includes("hide"))) {
                    return;
                }

                const projectCard = document.createElement("div");
                projectCard.classList.add("project-card");
                projectCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description available."}</p>
                    <a href="${repo.html_url}" target="_blank">View Project</a>
                `;
                projectsList.appendChild(projectCard);
            });
        })
        .catch(error => console.log("Error fetching GitHub projects:", error));
});
