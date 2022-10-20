/* Basic Date class methods */
function test_date() {
    const date = new Date();
    console.log(date); // Date
    console.log(date.getFullYear()); // Get full year
    console.log(date.getMonth()); // Get month
    console.log(date.getDate()); // Get day

    console.log(date.getTime()); // Amount of seconds from 1st Jan 1970 midnight
    console.log(Date.now()); // Does the same as previous line, but a bit more effective: we don't create exeplar of Date class


    console.log(date.getTime()); //UTC  
    console.log(date.getTimezoneOffset()); //Timezone offset
    console.log(date.getUTCHours(), date.getHours()); //Hours in london and (in my case) in Irkutsk
}


/* Experiments with some dates functions*/
function date_parser() {
    const newDate = Date.parse('2022-09-02'); // from String to ms amount
    console.log(newDate);
    console.log(Date(newDate)); // Parse ms amount as the date
    console.log(new Date('2022', '8')) //The first of september 2022, midnight
    console.log(new Date('2022', '8', '2')) //The first of september 2022

    console.log(new Date('2022', '1', '33')) // The 5th of march'll be logged 
}
