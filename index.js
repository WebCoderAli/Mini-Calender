const monthEl = document.querySelector("#month");

const weekDayEl = document.querySelector("#weekday");

const dayEl = document.querySelector("#day");

const yearEl = document.querySelector("#year");

const date = new Date();

const month = date.getMonth();

const weekday = date.getDay();

monthEl.innerText = date.toLocaleDateString("en" , {
    month: "long"
});

weekDayEl.innerText = date.toLocaleDateString("en",{
    weekday : "long"
});

dayEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();