const billInput = document.getElementById("bill-input");
const numberPeopleInput = document.getElementById("num-people-input");
const obj = { bill: '', people: '', tip: '' };

function formatResult() {};
function isZero() {};
function getResult() {};

function onReset() {
    billInput.value='';
    numberPeopleInput.value='';
    document.querySelector('input[name="tip"]:checked').checked = false;
};