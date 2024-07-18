async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        dataContainer.innerHTML = '';

        const userList = document.createElement('ul');

        users.forEach(user => {
            const userData = document.createElement('li');
            userData.textContent = user.name;
            userList.appendChild(userData);
        });

        dataContainer.appendChild(userList);

    }

    catch (error) {
        dataContainer.innerHTML = "Failed to load user data";
    }

    }
    
document.addEventListener('DOMContentLoaded', fetchUserData);