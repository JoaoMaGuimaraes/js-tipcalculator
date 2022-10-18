const billInput = document.getElementById("bill-input");
const customTip = document.getElementById("custom-input");
const numberPeopleInput = document.getElementById("num-people-input");
const obj = { bill: '', people: '', tip: '' };

function formatResult() {};
function isZero() {};
function getResult() {};

function onReset() {
    billInput.value='';
    numberPeopleInput.value='';
    customTip.value='';
    // https://stackoverflow.com/questions/2554116/how-to-clear-radio-button-in-javascript
    document.querySelector('input[name="tip"]:checked').checked = false;
};