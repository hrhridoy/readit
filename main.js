const book = document.querySelector('#book');

function fetchData() {
  fetch('https://gutendex.com/books')
    .then((res) => res.json())
    .then((data) => {
      if (typeof data === 'object') {
        for (const datas of data.results) {
          // console.log(typeof datas.formats['image/jpeg']);
          let imageUrl = datas.formats['image/jpeg'];
          book.innerHTML += `<div class="p-2 justify-center hover:bg-gradient-to-r from-green-300 to-blue-200 hover:rounded-2xl">
          <img class="justify-items-center" src=${imageUrl} />
          <h2 class="text-center">${datas.title}</h2>
          <h3>${datas.authors[0].name}</h3>
          
          
          
          </Div>
         
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
