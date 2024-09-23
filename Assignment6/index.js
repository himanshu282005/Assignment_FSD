// Function to fetch and display user data
function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // Parsing the JSON data
      .then(users => {
        const userList = document.getElementById('userList');
        users.forEach(user => {
          // Creating a list item for each user
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.street}, ${user.address.city}</p>
          `;
          userList.appendChild(listItem);
        });
      })
      .catch(error => console.log('Error fetching user data:', error));
  }
  
  // Fetch and display users when the page loads
  window.onload = fetchUsers;
  