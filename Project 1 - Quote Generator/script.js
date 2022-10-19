let btn = document.querySelector('#new-quote');
let quote = document.querySelector(".quote");
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: ` Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: ` Albert Einstein`
},{
    quote: `"All you need is only one step to climb a problem to achive SUCCESS"`,
    person: `KirA`
}, ];

btn.addEventListener('click', function (){
    let rand = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[rand].quote;
    person.innerHTML = quotes[rand].person;
})