
// let username;

// username = window.prompt("what is your name ?");

// window.alert(`your name is ${username}`);

let username;

document.getElementById("submit").onclick = function () {
    username = document.getElementById("text").value;
    console.log(username);
    document.getElementById("h1").textContent = `hello ${username}`
}
 