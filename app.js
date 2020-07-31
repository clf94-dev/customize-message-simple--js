const inputName = document.querySelector('input');
const button = document.querySelector('button');
const label = document.querySelector('label');

var second = false,
    newH1;
button.addEventListener('click', function() {
    var text = inputName.value;
    if (second) {
        newH1.remove();
    }
    inputName.value = "";
    newH1 = document.createElement('h1');
    newH1.textContent = "Welcome " + text + ". How are you? ";
    document.body.insertBefore(newH1, label);
    second = true;
})