document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.github.com/users/bhavesh-chainani/repos')
        .then(response => response.json())
        .then(data => {
            const projectsList = document.getElementById('projects-list');
            data.forEach(repo => {
                const projectItem = document.createElement('div');
                projectItem.className = 'project';
                projectItem.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                `;
                projectsList.appendChild(projectItem);
            });
        });
});
