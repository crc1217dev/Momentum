const axios = window.axios;

const quote = document.querySelector('#quote span:first-child');
const quote_author = document.querySelector('#quote span:last-child');

const httpClient = axios.create({
  baseURL: 'https://api.quotable.io',
});

async function getQuote() {
  const response = await httpClient
    .get('random')
    .then((responseData) => {
      const data = responseData.data;
      console.log(data);
      quote.innerText = data.content;
      quote_author.innerText = data.author;
    })
    .catch((error) => console.log('error', error));
}
getQuote();
