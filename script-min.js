const header = document.querySelector("header.header");
var response;
const apiUrl = "https://covid19.mathdro.id/api",
  fetchCountryUrl = "https://covid19.mathdro.id/api/countries",
  confirmed = document.querySelector("#confirmedCases"),
  recovered = document.querySelector("#recoveredCases"),
  deaths = document.querySelector("#deathCases");
var affectedImage = document.querySelector("#affectedImg");
const countrySelect = document.querySelector("#country"),
  errorClose = document.querySelector(".error-close"),
  errorDiv = document.querySelector(".error"),
  errorMessage = document.querySelector(".error-message");
var toggler = document.querySelector(".toggler"),
  close = document.querySelector(".close");
document.addEventListener("DOMContentLoaded", function() { toggler.addEventListener("click", function() { document.querySelector("header.header ul").style.display = "block", toggler.style.visibility = "hidden", close.style.visibility = "visible" }) }), document.addEventListener("DOMContentLoaded", function() { close.addEventListener("click", function() { document.querySelector("header.header ul").style.display = "none", toggler.style.visibility = "visible", close.style.visibility = "hidden" }) });
