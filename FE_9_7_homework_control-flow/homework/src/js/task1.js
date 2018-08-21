let login = prompt('Login');
let hour = new Date().getHours();
if (login === 'User') {
    let password = prompt('Password')
    if (password === 'SuperUser') {
        if (hour < 20) {
            alert('Good Day!');
        } else {
            alert('Good Evening!');
        }
    } else if (password === '' || password === null) {
        alert('Canceled.');
    } else {
        alert('Wrong password');
    }
} else if (login === '' || login === null) {
    alert('Canceled.');
} else if (login.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else {
    alert('I don’t know you');
}