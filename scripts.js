document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.display = "none";
    }, 2000);

    // GSAP Animations
    gsap.from("header", { duration: 1, y: -100, opacity: 0 });
    gsap.from("#home h1", { duration: 1, opacity: 0, delay: 0.5 });
    gsap.from("#home p", { duration: 1, opacity: 0, delay: 1 });
    gsap.from("#home button", { duration: 1, opacity: 0, delay: 1.5 });

    // Scroll animations
    gsap.from("#about", { scrollTrigger: "#about", duration: 1, opacity: 0 });
    gsap.from("#projects", { scrollTrigger: "#projects", duration: 1, opacity: 0 });
    gsap.from("#contact", { scrollTrigger: "#contact", duration: 1, opacity: 0 });

    // Fetch GitHub Projects dynamically
    fetch("https://api.github.com/users/ayesh-chamodye/repos?sort=updated")
        .then(response => response.json())
        .then(repos => {
            const projectsList = document.getElementById("projects-list");
            repos.forEach(repo => {
                // Skip projects with the "hide" keyword in their name or description
                if (repo.name.toLowerCase().includes("myself") || (repo.description && repo.description.toLowerCase().includes("hide"))) {
                    return; // Skip this project and don't add it to the list
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
