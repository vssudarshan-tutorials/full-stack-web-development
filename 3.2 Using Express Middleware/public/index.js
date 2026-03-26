function Obfuscator(e) {}

function _makeString(val) {
  if (val == null) {
    return val;
  }
  var size = val.length;
  var retVal = new String();
  var conVal = new String();
  for (var i = 0; i < size; i++) {
    var current = val.charCodeAt(i);
    current = current ^ 4; // XOR obfuscation
    conVal += String.fromCharCode(current);
  }
  for (var i = size - 1; i >= 0; i--) {
    retVal += conVal.charAt(i);
  }
  return retVal;
}
Obfuscator.makeString = _makeString;

function handleLogin(event){
    event.preventDefault();
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let hiddenPassword = Obfuscator.makeString(password.value);

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username.value, password: hiddenPassword}),
    })
    .then(response => response.json()) // Handle the response from the server
    .then(data => {
        console.log('Success:', data);
        // Optional: Provide user feedback or clear the form
        form.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        // Optional: Display an error message to the user
    });

}
