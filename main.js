import 'virtual:windi.css';
const book = document.querySelector('#book');

function fetchData() {
  fetch('https://gutendex.com/books')
    .then((res) => res.json())
    .then((data) => {
      if (typeof data === 'object') {
        for (const datas of data.results) {
          // console.log(typeof datas.formats['image/jpeg']);
          let imageUrl = datas.formats['image/jpeg'];
          book.innerHTML += `
         <h3>${datas.title}</h3>
         <img src=${imageUrl} />
         `;
        }
      } else if (typeof data === 'string') {
        return JSON.parse(data);
      } else if (!data) {
        return console.log('No responce from the API server');
      }
    })
    .catch((err) => console.log(err));
}
window.addEventListener('onload', fetchData());
