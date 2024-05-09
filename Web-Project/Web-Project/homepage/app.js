let quote1 =
  "Look deep into nature, and then you will understand everything better. -Albert Einstein"
let quote2 =
  "The strength of the team is each individual member. The strength of each member is the team. - Phil Jackson";
let quote3 =
  "The best teamwork comes from men who are working independently toward one goal in unison. - James Cash Penney";
let quote4 =
  "Teamwork. A few harmless flakes working together can unleash an avalanche of destruction. - Justin Sewel";

let quotes = [quote1, quote2, quote3];
let counter = 0;

//function that displays a different quote every 3.5 seconds

function displayQuote() {
  let quote = quotes[counter];
  document.querySelector(".quotes").innerHTML = quote;
  document.querySelector(".quotes").classList.add("fade-in");
  setTimeout(function () {
    document.querySelector(".quotes").classList.remove("fade-in");
  }, 3500);
  counter++;
  if (counter === quotes.length) {
    counter = 0;
  }
}
displayQuote();
setInterval(displayQuote, 7000);

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
        entry.target.classList.add('show');
    }

    })
    
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el)); 


function toggleMenu() {
  let nav = document.querySelector('nav');
  if (nav.style.display === 'none') {
      nav.style.display = 'flex';
      nav.classList.add('nav-open');
  } else {
      nav.style.display = 'none';
      nav.classList.remove('nav-open');
  }
}