// let apiQuotes = [];

const quoteConatainor = document.getElementById('quote-containor');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const whatsappBtn = document.getElementById('whatsapp');
const newQuoteBtn = document.getElementById('new-quote');

// Show New Quyote
function newQuote(){
    // pick a random Quote from apiQuopte
    const quote = loaclQuotes[Math.floor(Math.random()*loaclQuotes.length)];

    // check if author is blank
    if(!quote.author){
        authorText.textContent = '~ Unknown';
    }else{
        authorText.textContent =  quote.author;
    }
    //Quote length for styling
    if(quote.text.length > 120){
        quoteText.classList.add("long-quote");                                
    }else{
        quoteText.classList.remove("long-quote");
    }  
    quoteText.textContent = quote.text;  
    console.log(quote);
}

// Get Quotes From API


// async function getQuotes(){
//     const apiUrl='https://type.fit/api/quotes';

//     try{
//         const response = await fetch(apiUrl); 
//         apiQuotes  = await response.json(); 
//         newQuote();
//     }catch(error){
//         // catch error here

//     }
// }
//getQuotes();

// whatsapp share
function tweetQuote(){
    const tweetrUrl =`https://wa.me/?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(tweetrUrl,'_blank' );
} 

whatsappBtn.addEventListener('click', tweetQuote);
newQuoteBtn.addEventListener('click', newQuote);


newQuote();
