//Task No 1 JS Section
function date() {

    let d = new Date();

    const weekday = new Array(7);

    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let n = weekday[d.getDay()];

    let time = new Date();

    console.log(time);

    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    console.log(hr);
    let h = hr % 12;
    let ampm = (hr < 12 || hr == 24) ? "AM" : "PM"
    console.log("hr : " + hr + " min : " + min + " sec = " + sec + " ampm : " + ampm);

    document.getElementById("date").innerHTML = "Today is : " + n + ".<br>" + "Current Time is : " + h + " " + ampm + " : " + min + " : " + sec;

}

//Task No 2 JS Section

function multiply() {
    let fnumber = document.getElementById("fn").value;
    let snumber = document.getElementById("sn").value;
    let cal = fnumber * snumber;
    document.getElementById("result").innerHTML = cal;
}
function divide() {

    let fnumber = document.getElementById("fn").value;
    let snumber = document.getElementById("sn").value;
    let cal = fnumber / snumber;
    document.getElementById("result").innerHTML = cal;

}

//Task No 3 JS Section

function geturl() {
    let url = window.location.href;
    document.getElementById("url").innerHTML = "Current URL is : " + url;
}

//Task No 4 JS Section
function sortString() {
    let i = document.getElementById("st").value;

    const str_array = i.split("").sort();

    let sorted = str_array.toString();
    let newStr = sorted.replace(/,/g, '');

    document.getElementById("sorted").innerHTML = newStr;
}

//Task 5 JS section

function func5(stPara) {

    let str = stPara;
    console.log(str);
    const words = str.split(' ');
    console.log(words);
    let sorted = words.sort(function (a, b) { return b.length - a.length; });
    console.log(sorted);
    let lword = sorted[0];

    return lword;
}
window.onload = function () {
    var x = func5("Web Development Tutorial");
    document.getElementById("resultLS").innerHTML = x;
}


//Task 6 JS section

function slsg() {
    let number = document.getElementById("num").value;
    console.log(number);
    let strArray = number.toString().split("");
    console.log(strArray);
    let numArray = strArray.map(x => parseInt(x));
    console.log(numArray);
    var max = Math.max.apply(null, numArray);
    console.log(max);
    numArray.splice(numArray.indexOf(max), 1);

    console.log(numArray);

    var secMax = Math.max.apply(null, numArray);
    console.log(secMax);
    var numArray2 = numArray;

    var min = Math.min.apply(null, numArray2);

    numArray2.splice(numArray2.indexOf(min), 1);

    var secMin = Math.min.apply(null, numArray2);

    document.getElementById("minmaxresult").innerHTML = "Second Min : " + secMin + ", Second Max : " + secMax;
}

//Task 7 JS Section

function notRepeated() {

    var st = document.getElementById("chars").value;


    var arra1 = st.split('');
    var result = '';
    var ctr = 0;

    for (var x = 0; x < arra1.length; x++) {
        ctr = 0;

        for (var y = 0; y < arra1.length; y++) {
            if (arra1[x] === arra1[y]) {
                ctr += 1;
            }
        }

        if (ctr < 2) {
            result = arra1[x];
            break;
        }
    }


    document.getElementById("notRepeatedRes").innerHTML = "First Not Repeated Char =  " + result;
}

//Task 8 JS Section

function largest() {
    var num = document.getElementById("num3").value;

    var strArray = num.split('');

    var numArray = strArray.map(Number);

    console.log(numArray);

    if (numArray[0] <= numArray[1] && numArray[1] <= numArray[2]) {

        alert(numArray[0] + ", " + numArray[1] + ", " + numArray[2]);
    }
    else if (numArray[0] <= numArray[2] && numArray[2] <= numArray[1]) {

        alert(numArray[0] + ", " + numArray[2] + ", " + numArray[1]);

    }
    else if (numArray[1] <= numArray[0] && numArray[0] <= numArray[2]) {

        alert(numArray[1] + ", " + numArray[0] + ", " + numArray[2]);
    }
    else if (numArray[1] <= numArray[0] && numArray[2] < numArray[0]) {

        alert(numArray[2] + ", " + numArray[1] + ", " + numArray[0]);
    }
    else if (numArray[2] <= numArray[0] && numArray[0] <= numArray[1]) {

        alert(numArray[2] + ", " + numArray[0] + ", " + numArray[1]);
    }
    else {

        alert(numArray[2] + ", " + numArray[1] + ", " + numArray[0]);
    }
}

//Task 9 JS Section

function evenOdd() {

    for (var i = 0; i <= 15; i++) {

        if (i % 2 == 0) {
            document.getElementById("evenOddResult").innerHTML += i + " is EVEN" + "<br />";
            console.log(i);
        } else {
            document.getElementById("evenOddResult").innerHTML += i + " is ODD" + "<br />";
            console.log(i);
        }

    }

}

//Task 10 JS Section

function pattren() {

    for (var i = 0; i < 5; i++) {
        for (var j = 0; j <= i; j++) {
            document.getElementById("pResult").innerHTML += "*";
        }
        document.getElementById("pResult").innerHTML += "<br />";
    }

}

//Task 11 JS Section

function join() {
    var str = "Red Green White Black";
    var spStr = str.split(' ');

    var joinedComma = spStr.join(",");

    document.getElementById("joinResult").innerHTML = joinedComma + "<br />" + joinedComma + "<br />";

    var joinedplus = spStr.join("+");

    document.getElementById("joinResult").innerHTML += joinedplus;
}

//Task 12 JS Section

function pArray() {

    var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

    for (var i = 0; i < 5; i++) {

        document.getElementById("pArrayResult").innerHTML += "Row" + i + "<br />";

        for (var j = 0; j < 4; j++) {

            document.getElementById("pArrayResult").innerHTML += a[i][j] + "<br />";

        }

    }

}

//Task 13 JS Section

function mDays() {

    var getDaysInMonth = function (month, year) {

        return new Date(year, month, 0).getDate();

    };

    document.getElementById("mDaysResult").innerHTML += getDaysInMonth(1, 2012) + "<br />";
    document.getElementById("mDaysResult").innerHTML += getDaysInMonth(2, 2012) + "<br />";
    document.getElementById("mDaysResult").innerHTML += getDaysInMonth(9, 2012) + "<br />";
    document.getElementById("mDaysResult").innerHTML += getDaysInMonth(12, 2012) + "<br />";



}

//Task 14 JS Section

function getMon() {

    var month_name = function (dt) {
        mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return mlist[dt.getMonth()];
    };
    document.getElementById("getMonResult").innerHTML += month_name(new Date("10/11/2009")) + "<br />";
    document.getElementById("getMonResult").innerHTML += month_name(new Date("11/13/2014"));

}

//Task 15 JS Section

function countryFunc() {

    var str = document.getElementById("countryTxt").value;

    var strArray = str.split(' ');

    let sorted = strArray.sort(function (a, b) { return b.length - a.length; });

    let lword = sorted[0];

    document.getElementById("countryResult").innerHTML = lword;

}

//Task 16 JS Section

function toFahrenheit() {
    var str = document.getElementById("celsiusTxt").value;

    var cToFahr = str * 9 / 5 + 32;
    var message = str + '\xB0C is ' + cToFahr + ' \xB0F.';
    document.getElementById("fahrenheitResult").innerHTML = message;

}
function toCelsius() {
    var str = document.getElementById("fahrenheitTxt").value;

    var fToCel = (str - 32) * 5 / 9;
    var message = str + '\xB0F is ' + fToCel + '\xB0C.';
    document.getElementById("celsiusResult").innerHTML = message;

}

//Task 17 JS Section

function leapYear() {
    var str = document.getElementById("leapYearText").value;

    if ((0 == str % 4) && (0 != str % 100) || (0 == str % 400)) {

        document.getElementById("leapYearResult").innerHTML = str + " is a leap year";


    } else {
        document.getElementById("leapYearResult").innerHTML = str + " is not a leap year";
    }

}

//Task 18 JS Section

function getCurDate() {

    var date = new Date();

    var yr = date.getFullYear();

    var mon = date.getMonth() + 1;

    var day = date.getDate();

    document.getElementById("curDateResult").innerHTML += mon + "-" + day + "-" + yr + "<br />";
    document.getElementById("curDateResult").innerHTML += mon + "/" + day + "/" + yr + "<br />";
    document.getElementById("curDateResult").innerHTML += day + "-" + mon + "-" + yr + "<br />";
    document.getElementById("curDateResult").innerHTML += day + "/" + mon + "/" + yr + "<br />";
}

//Task 19 JS Section

function getArea() {
    var strside1 = document.getElementById("side1").value;
    var strside2 = document.getElementById("side2").value;
    var strside3 = document.getElementById("side3").value;

    var side1 = parseInt(strside1);
    var side2 = parseInt(strside2);
    var side3 = parseInt(strside3);

    console.log(side1 + "," + side2 + "," + side3);

    var perimeter = (side1 + side2 + side3) / 2;

    console.log(perimeter);

    var area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));

    document.getElementById("areaResult").innerHTML = area;
}

//Task 20 JS Section

function sunYear() {

    for (var year = 2014; year <= 2050; year++) {
        var d = new Date(year, 0, 1);
        if (d.getDay() === 0)


            document.getElementById("sunYearResult").innerHTML += "1st January is being a Sunday  " + year + "<br />";
    }

}