document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animations
    gsap.from("header", { duration: 1, y: -100, opacity: 0 });

    // ScrollTrigger for the about section
    gsap.to("#about", {
        scrollTrigger: {
            trigger: "#about",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        rotationY: 15,  // Slight 3D rotation on Y-axis
        scale: 1.05,
        opacity: 1
    });

    // ScrollTrigger for the education section
    gsap.to("#education", {
        scrollTrigger: {
            trigger: "#education",
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        rotationX: 15,  // Slight 3D rotation on X-axis
        scale: 1.05,
        opacity: 1
    });

    // ScrollTrigger for the skills section
    gsap.to("#skills", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        rotationY: -15,  // Rotate -15 degrees on Y-axis
        scale: 1.1,
        opacity: 1,
    });

    // ScrollTrigger for the projects section
    gsap.to("#projects", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        rotationY: 30,  // Rotate 30 degrees on Y-axis
        scale: 1.1,
        opacity: 1,
    });

    // ScrollTrigger for the contact section
    gsap.to("#contact", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        rotationX: -10,  // Slight X-axis rotation
        scale: 1.05,
        opacity: 1,
    });

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

                // Adding 3D effect on each project card
                gsap.fromTo(projectCard, {
                    opacity: 0,
                    rotationY: 180,
                    scale: 0.8
                }, {
                    opacity: 1,
                    rotationY: 0,
                    scale: 1,
                    duration: 1,
                    ease: "back.out(1.7)"
                });
            });
        })
        .catch(error => console.log("Error fetching GitHub projects:", error));
});
