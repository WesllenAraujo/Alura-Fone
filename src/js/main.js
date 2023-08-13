let buttonsList = document.querySelectorAll('input[type=button]');
let boxTxt = document.querySelector('input[type=tel]');

for (let count = 0; count < buttonsList.length; count++) {
    const button = buttonsList[count];
    button.onclick = function() {
        document.querySelector('input[type=tel]').value = boxTxt.value + button.value;
    }
}
