//Login
export function handleLoginSubmit(event, _loginUsername, _loginPassword) {
    event.preventDefault();
    if (validateLoginForm(_loginUsername, _loginPassword)) {
      processLogin(_loginUsername, _loginPassword);
    } else {
      alert("Invalid form! Please check for errors");
    }
}

function validateLoginForm(_loginUsername, _loginPassword) {
    return _loginPassword.length > 0 && _loginUsername.length > 0;
}

async function processLogin(_loginUsername, _loginPassword) {
    const url = 'http://localhost:5000/auth/login';
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: _loginUsername,
        password: _loginPassword
      })
    }

    await fetch(url, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);

        if (response.success) {
          localStorage.setItem('authToken', response.myToken);
        }
        
    alert(response.message);
    })
}

//Register
