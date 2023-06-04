const arr = [];

function thongso(mg1, mg2, mg3, mg4, mg5, mg6, m1, m2, m3, m4, m5, m6) {
    clearText();
    if (isValidate()) {
        var rpnap = parseInt(document.getElementById("rd-value").value);
        var i, sorq;
        arr[0] = mg1;
        arr[1] = mg2;
        arr[2] = mg3;
        arr[3] = mg4;
        arr[4] = mg5;
        arr[5] = mg6;
        var max = arr[0];
        var temp = 0;
        var sum = 0;
        var summoney = 0;

        while (rpnap >= mg1) {
            arr.forEach(element => {
                if (rpnap >= element) {
                    max = element;
                }
            });
            temp = rpnap / max;
            var money;
            if (max == mg1) {
                money = m1;
            }
            else if (max == mg2) {
                money = m2;
            }
            else if (max == mg3) {
                money = m3;
            }
            else if (max == mg4) {
                money = m4;
            }
            else if (max == mg5) {
                money = m5;
            }
            else if (max == mg6) {
                money = m6;
            }

            document.getElementById("result-text").innerHTML += '<p>' + parseInt(temp) + ' x ' + parseInt(max) + ' VP (' + parseInt(temp) + ' x ' + parseInt(money) + 'K)</p>';
            rpnap -= (parseInt(temp) * parseInt(max));
            sum += (parseInt(temp) * parseInt(max));
            summoney += (parseInt(temp) * parseInt(money));
        }

        if (rpnap != 0) {
            document.getElementById("result-text").innerHTML += '<p>1 x ' + mg1 + ' VP (1 x ' + m1 + 'k)</p>';
            document.getElementById("sum-rq").innerText = sum + mg1;
            document.getElementById("conlai-rq").innerText = mg1 - rpnap;
            document.getElementById("result-money").innerText = summoney + m1;
        } else {
            document.getElementById("sum-rq").innerText = sum;
            document.getElementById("conlai-rq").innerText = 0;
            document.getElementById("result-money").innerText = summoney;
        }
    } else {
        alert("Ô nhập VP không được để rỗng!")
    }

}

function clearText() {
    document.getElementById("result-text").innerHTML = "";
}

function isValidate() {
    var vp = document.getElementById("rd-value").value;
    if (vp == "" || vp.length == 0) {
        return false;
    } 
    return true;
}

function isClicking_hover(btn) {
    var btns = document.querySelectorAll("button");
    btns.forEach(element => {
        element.style.backgroundColor = "#1a1c1e";
    });
    btn.style.backgroundColor = "#ff4c53";
} 

function hidingElement() {
    if(document.getElementById("huongdansudung-img").style.display == "block") {
        document.getElementById("huongdansudung-img").style.display = "none";
        return
    }
    document.getElementById("huongdansudung-img").style.display = "block";
}