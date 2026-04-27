document.querySelector('body').style.backgroundColor = 'grey';

// let isEmployed = confirm('Are you employed?');
// alert(isEmployed)
// console.log(isEmployed)

document.getElementById('checkName').addEventListener('click', displayName);

function displayName() {
    // with the lines below we are getting the value of the input field and storing it in a variable called userName
    const userName = document.querySelector('#userName').value;
    // alert(`Your name is ${userName}`);

    // throug the lines ebelow we are displaying the value of the userName variable in the h1 element with the id of displayName
    document.querySelector('#displayName').textContent = userName;
}