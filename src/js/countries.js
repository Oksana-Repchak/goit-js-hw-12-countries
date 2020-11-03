import API from '../js/fetchCountries';
import errorMessage from '../js/pnotify';

import countriesList from '../templates/countriesList.hbs';
import countriesInfo from '../templates/countriesInfo.hbs';
import getRefs from './get-refs'

import debounce from 'lodash.debounce';

const refs = getRefs();

refs.input.value = '';

refs.input.addEventListener('input', debounce(searchCountry, 500));

function searchCountry(event) {
    clearListItems();
    const searchQuery = refs.input.value;
if (!searchQuery) return;

  API.fetchCountries(searchQuery).then(typeOfMarkup).catch(errorMessage);
}

function typeOfMarkup(arr) {
  if (arr.length > 10) {
    errorMessage();
    return;
  }

  if (arr.length === 1) {
    showCountryInfo(arr[0]);
    return;
  }
  showListOfCountries(arr);
}

function showCountryInfo(country) {
  const markup = countriesInfo(country);
  refs.listCountries.insertAdjacentHTML('beforeend', markup);
}

function showListOfCountries(countries) {
  const markup = countries.map(country => countriesList(country)).join('');
  refs.listCountries.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
  refs.listCountries.innerHTML = '';
}