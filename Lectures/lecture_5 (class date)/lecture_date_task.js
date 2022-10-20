/*

Script calculating rest of the days until some date. 
Put the date's day to text field and select the month in drop-down list

*/


const INPUT_ID = 'myInput';
const SELECTOR_MONTHS_ID = 'mySelect';
const P_ID = "myP"

//Processing function
function process() {
    const input = document.getElementById(INPUT_ID);
    const select = document.getElementById(SELECTOR_MONTHS_ID);
    const day = +input.value
    const month = +select.value
    const max = new Date(new Date().getFullYear(), month + 1, 0).getDate();
    console.log(max);
    if (isNaN(day) || day > max) {
        input.classList.add('error');
        input.classList.remove('success');
        return
    }
    input.classList.add('success');
    input.classList.remove('error');


    const now = new Date();

    let isSameYear = month === now.getMonth() ? day > now.getDate() : month > now.getMonth();

    const year = isSameYear ? now.getFullYear() : now.getFullYear() + 1;
    const distdate = new Date(year, month, day);

    const seconds = parseInt((distdate - now) / 1000);
    const minutes = parseInt(seconds / 60);
    const hours = parseInt(minutes / 60);
    const days = parseInt(hours / 24);
    console.log(days, hours % 24, minutes % 60, seconds % 60);
    document.getElementById(P_ID).innerHTML = `Rest days to event: <b>${days}d</b>, ${hours % 24}h, ${minutes % 60}m, ${seconds % 60}s   `
}


//Function creating a text field
function create_input() {

    //Create text field somewhere in the memory 
    const input = document.createElement('input');
    input.id = INPUT_ID;

    //Function will be called when we losse focus on input field
    input.onblur = process;

    //Put text field inside the body 
    document.body.appendChild(input); // Returns object (In our case 'Input')
    // Available variant: document.body.append(...); Here we can use  DOMStrings or object as an argument; Returns nothing.
}


//Function creating months filled drop-down list
function create_select() {
    const select = document.createElement('select');
    select.id = SELECTOR_MONTHS_ID;

    //Set to onChange link to the process function. For select is eqal to onblur
    select.onchange = process;

    document.body.appendChild(select);
    const date = new Date();

    //Fill drop-down list with months's names    
    for (let i = 0; i < 12; i++) {
        option = document.createElement('option');
        option.value = i;
        date.setMonth(i);
        option.text = date.toLocaleString('en-US', {
            month: 'long'
        });
        select.appendChild(option);
    }
    select.value = new Date().getMonth();

}

function create_p() {
    const p = document.createElement('p');
    p.id = P_ID;
    document.body.appendChild(p);
}

function main() {
    create_input();
    create_select();
    create_p();
    process();

}


main();
