import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App).mount('#app');

const hash = window.location.hash.substring(1);
const params = JSON.parse(decodeURIComponent(hash));
const mainToken = params.mainToken;

fetch(`https://api.chaster.app/api/extensions/auth/sessions/${mainToken}`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${mainToken}`,
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // Handle the response data here
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });
