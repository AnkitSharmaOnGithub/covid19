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