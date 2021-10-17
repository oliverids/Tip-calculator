let people = document.getElementById('number'),
    minus = document.getElementById('minus'),
    plus = document.getElementById('plus'),
    number;

[minus, plus].forEach(e => e.addEventListener('click', evt => {
    number = people.value;
    if (evt.currentTarget == minus) {
        number++;
    } else {
        number--;

        if (number < 1) {
            number = 1;
        }
    }
    people.value = number;
}));

let tips = document.querySelectorAll('.choices li button'),
    selectedTip;
tips.forEach(e => e.addEventListener('click', evt => {
    tips.forEach(e => e.classList.remove('ativo'));
    evt.currentTarget.classList.add('ativo');
    selectedTip = document.querySelectorAll('.choices li button.ativo span');
}));

let bill = document.getElementById('bill'),
    tipamount = document.getElementById('amount-cash'),
    numb;
function calc() {
    let valor = bill.value;
    if (valor && (selectedTip)) {
        tip = +(selectedTip[0].innerText.slice(0, -1)) / 100;
        numb = valor * tip / people.value;
        tipamount.innerText = `$${numb.toFixed(2)}`;
    }
}

tips.forEach(e => e.addEventListener('click', calc));
bill.addEventListener('input', calc);
[minus, plus].forEach(e => e.addEventListener('click', calc));

let custom = document.getElementById('custom');
custom.addEventListener('input', () => {
    tips.forEach(e => e.classList.remove('ativo'));
    let customTip = custom.value / 100,
        valor = bill.value;

    if (valor && customTip) {
        let numb = valor * customTip / people.value;
        tipamount.innerText = `$${numb.toFixed(2)}`;
    }
})
