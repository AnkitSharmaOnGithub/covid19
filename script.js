const header = document.querySelector('header.header');
var response;

// Index Page
const apiUrl = "https://covid19.mathdro.id/api";
const fetchCountryUrl = 'https://covid19.mathdro.id/api/countries';
const confirmed = document.querySelector("#confirmedCases");
const recovered = document.querySelector("#recoveredCases");
const deaths = document.querySelector("#deathCases");
var affectedImage = document.querySelector("#affectedImg");

// CountryWise Page
const countrySelect = document.querySelector('#country');
const errorClose = document.querySelector('.error-close');
const errorDiv = document.querySelector('.error');
const errorMessage = document.querySelector('.error-message');

var toggler = document.querySelector('.toggler');
var close = document.querySelector('.close');

document.addEventListener('DOMContentLoaded',function(){
    
    toggler.addEventListener('click',function(){
        document.querySelector('header.header ul').style.display = 'block';
        toggler.style.visibility = 'hidden';
        close.style.visibility = 'visible';
    });
});

document.addEventListener('DOMContentLoaded',function(){
    close.addEventListener('click',function(){
        document.querySelector('header.header ul').style.display = 'none';
        toggler.style.visibility = 'visible';
        close.style.visibility = 'hidden';
    });
});