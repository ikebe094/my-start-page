let num1inpElm = document.getElementById("num1inp");
let num2inpElm = document.getElementById("num2inp");
let num3inpElm = document.getElementById("num3inp");
let num4inpElm = document.getElementById("num4inp");
let num5inpElm = document.getElementById("num5inp");

let resultpElm = document.getElementById("resultp");

function warizan145() {
    // 1〜4を、5で割る
    let resultxt = "warizan145(); 結果";
    resultxt += "<br>num1 / num5 -> " + num1inp.value / num5inp.value;
    resultxt += "<br>num2 / num5 -> " + num2inp.value / num5inp.value;
    resultxt += "<br>num3 / num5 -> " + num3inp.value / num5inp.value;
    resultxt += "<br>num4 / num5 -> " + num4inp.value / num5inp.value;
    resultpElm.innerHTML = resultxt;
}

function warizan1324() {
    // 1を3で、2を4で割る
    let resultxt = "warizan1324(); 結果";
    resultxt += "<br>num1 / num3 -> " + num1inp.value / num3inp.value;
    resultxt += "<br>num2 / num4 -> " + num2inp.value / num4inp.value;
    resultpElm.innerHTML = resultxt;
}

function tashizan15() {
    // 1〜5を全部たす
    let resultxt = "tashizan15(); 結果";
    resultxt += "<br>num1 + num2 + num3 + num4 + num5 -> " + num1inp.value + num2inp.value + num3inp.value + num4inp.value + num5inp.value;
    resultpElm.innerHTML = resultxt;
}

function tashizan15int() {
    // 1〜5を全部たす
    let resultxt = "tashizan15(); 結果";
    let resultnum = parseInt(num1inp.value) + parseInt(num2inp.value) + parseInt(num3inp.value) + parseInt(num4inp.value) + parseInt(num5inp.value);
    resultxt += "<br>num1 + num2 + num3 + num4 + num5 -> " + resultnum;
    resultpElm.innerHTML = resultxt;
}
