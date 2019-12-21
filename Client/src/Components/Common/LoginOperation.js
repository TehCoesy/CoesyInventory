//Login
export function handleLoginSubmit(_username, _password) {
    if (validateLoginForm(_username, _password)) {
      processLogin(_username, _password);
    } else {
      alert("Invalid form! Please check for errors");
    }
}

function validateLoginForm(_username, _password) {
    return _username.length > 0 && _password.length > 0;
}

async function processLogin(_username, _password) {
    const url = 'http://localhost:5000/auth/login';
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: _username,
        password: _password
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
export function handleRegisterSubmit(input) {
  if (validateRegisterForm(input)) {
    processRegister(input);
  } else {
    alert("Invalid Register Form!");
  }
}

function validateRegisterForm(input) {
  var registerValid = true;
  if (input.userName.length <= 0) {
    registerValid = false;
  }
  if (input.password.length <= 0) {
    registerValid = false;
  }
  if (input.email <= 0) {
    registerValid = false;
  }
  if (input.password2 <= 0 || input.password2 !== input.password) {
    registerValid = false;
  }

  return registerValid;
}

async function processRegister(input) {
  const url = 'http://localhost:5000/register/new_acc';
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      regUsername: input.userName,
      regPassword: input.password,
      regEmail: input.email
    })
  }

  await fetch(url, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      alert(response.message);
  })
}