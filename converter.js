
let birthdays = {
    "Runaen": {
        "day": 21,
        "month": 12,
        "year": 2269
    },
    "Iska": {
        "day": 12,
        "month": 1,
        "year": 2402
    },
    "Kto":{
        "day": 5,
        "month": 5,
        "year": 2290
    },
    "Revalor/Faenmor":{
        "day":17,
        "month":12,
        "year":2293
    }
}

let holidays = {
    "Ascension Day": {
        "day": 13,
        "month": 13
    }
}
let date = new Date().toJSON().replace(/-/g,'/');

console.log(date);
let day = date.slice(8,10);
let month = date.slice(5,7);
let year = date.slice(0,4);
let hour = date.slice(11,13);

let irp_day = day*2;
let irp_month = month*2;
let irp_year = year*2-1640;
if(hour > 12) {
    irp_day = irp_day + 1;
}
while(irp_day > 28) {
    irp_day = irp_day - 28;
    irp_month = irp_month + 1;
}
if(irp_month > 13) {
    irp_month = irp_month - 13;
    irp_year = irp_year + 1;
}
let irp_day_of_year = irp_month*28 + irp_day;
let irp_eberron_year = irp_year- 1402;

let irp_month_names = {
    1: "Zarantyr",
    2: "Olarune",
    3: "Therendor",
    4: "Eyre",
    5: "Dravago",
    6: "Nymm",
    7: "Lharvion",
    8: "Barrakas",
    9: "Rhaan",
    10: "Sypheros",
    11: "Aryth",
    12: "Vult",
    13: "Crya",
    14: "Eclypse"
}
let irp_day_names = {
    1: "Sul",
    2: "Mol",
    3: "Zol",
    4: "Wir",
    5: "Zor",
    6: "Far",
    7: "Sar"
}
let birthday_output = "";
for(const name in birthdays) {
    let birthday_var = false;
    console.log(name);
    let year_age = irp_year - birthdays[name].year;
    let month_age = irp_month - birthdays[name].month;
    let day_age = irp_day - birthdays[name].day;
    let age_days = month_age*28 + day_age;
    if (age_days < 0) {
        age_days = age_days + 28*12;
    }
    let days_until_birthday = 28*12 - age_days;
    if (month_age === 0 && day_age === 0) {
        year_age = year_age + 1;
        birthday_var = true;
    }
    let age = name + " is " + year_age + " years old. Their birthday is in " + days_until_birthday + " days on " +
        irp_month_names[birthdays[name].month] + " " + birthdays[name].day + "st.";
    if (birthday_var) {
        age = age + " Happy Birthday!";
    }
    birthday_output = birthday_output + "<br>" + age;
}
let holiday_output = "";
for (const day in holidays) {
    let month_age = irp_month - holidays[day].month;
    let day_age = irp_day - holidays[day].day;
    let age_days = month_age * 28 + day_age;
    if (age_days < 0) {
        age_days = age_days + 28 * 12;
    }
    let days_until_event = 28 * 12 - age_days;
    let message = days_until_event + ' days until ' + day;
    holiday_output = holiday_output + "<br>" + message
}
    let irp_day_no = irp_day
    while (irp_day_no > 7) {
        irp_day_no = irp_day_no - 7
    }

    let irp_date = irp_day_names[irp_day_no] + ", " + irp_day + " " + irp_month_names[irp_month] + " " + irp_year + " FoH";
    let irp_eberron_date = irp_day_names[irp_day_no] + ", " + irp_day + " " + irp_month_names[irp_month] + " " +
        irp_eberron_year + " YK";
    let output = irp_date + "<br>" + irp_eberron_date + "<br>" + birthday_output + "<br>" + holiday_output;
    console.log(output);
    const irp_date_element = document.getElementById("irp_date");
    console.log(irp_date_element);
    irp_date_element.innerHTML = output;
