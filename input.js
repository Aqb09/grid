const quad_1 = new Array();
const quad_2 = new Array();
const quad_3 = new Array();
const quad_4 = new Array();

function toothnum() {


    let tnum = document.getElementById('tnum').value;
    let str = tnum;
    let num = Number(str);



    if (num >= 11 && num <= 18) {
        //print in quadrant 1
        quad_1.push(num);
        document.getElementById('tl').textContent = quad_1;
        console.log(quad_1);

    } else if (num >= 21 && num <= 28) {
        //print in quadrant 2
        quad_2.push(num);
        document.getElementById('tr').textContent = quad_2;
        console.log(quad_2);

    } else if (num >= 31 && num <= 38) {
        //print in quadrant 3
        quad_3.push(num);
        document.getElementById('bl').textContent = quad_3;
        console.log(quad_3);

    } else if (num >= 41 && num <= 48) {
        //print in quadrant 4
        quad_4.push(num);
        document.getElementById('br').textContent = quad_4;
        console.log(quad_4);

    }




}