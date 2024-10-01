document.addEventListener("DOMContentLoaded", function() {
    fetch('php/check_login.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.loggedin)
            if (data.loggedin) {
                if (document.getElementById('authmenu')){
                    document.getElementById('authmenu').style.display = 'flex';
                    document.getElementById('nonauth').style.display = 'none';
                }
                let welcomeMessages = document.getElementsByClassName('welcome-message');
                for (let message of welcomeMessages) {
                    message.textContent = data.firstname + " " + data.lastname;
                }} 
            else {
                document.getElementById('authmenu').style.display = 'none';
                document.getElementById('nonauth').style.display = 'flex';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            let welcomeMessages = document.getElementsByClassName('welcome-message');
            for (let message of welcomeMessages) {
                message.textContent = "Error checking login status.";
            }});
});

