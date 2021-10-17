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
        if (number < 1) number = 1;
    }
    people.value = number;
}));

let tips = document.querySelectorAll('.choices li button'),
    selectedTip;
tips.forEach(e => e.addEventListener('click', evt => {
    tips.forEach(e => e.classList.remove('ativo'));
    if (bill.value) evt.currentTarget.classList.add('ativo');
    selectedTip = document.querySelectorAll('.choices li button.ativo span');
}));

let bill = document.getElementById('bill'),
    total = document.getElementById('total-cash'),
    tipamount = document.getElementById('amount-cash'),
    custom = document.getElementById('custom'),
    numb;

function calcCustom() {
    tips.forEach(e => e.classList.remove('ativo'));
    let customTip = custom.value / 100,
        valor = +bill.value;

    if (valor && customTip) {
        let numb = valor * customTip / people.value;
        tipamount.innerText = `$${numb.toFixed(2)}`;
        total.innerText = `$${(valor + valor * customTip) / people.value}`;
    }
}

function calc() {
    let valor = +bill.value;
    if (valor && (selectedTip)) {
        custom.value = '';
        tip = +(selectedTip[0].innerText.slice(0, -1)) / 100;
        numb = valor * tip / people.value;
        tipamount.innerText = `$${numb.toFixed(2)}`;
        total.innerText = `$${(valor + valor * tip) / people.value}`;
    }
}

custom.addEventListener('input', calcCustom);
tips.forEach(each => each.addEventListener('click', calc));
[calc, calcCustom].forEach(exe => {
    bill.addEventListener('input', exe);
    [minus, plus].forEach(e => e.addEventListener('click', exe));
})

let reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    tips.forEach(e => e.classList.remove('ativo'));
    bill.value = '';
    custom.value = '';
    people.value = 1;
    tipamount.innerText = '$0.00';
    total.innerText = '$0.00';
})
