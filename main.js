const book = document.querySelector('#book');

function fetchData() {
  fetch('https://gutendex.com/books')
    .then((res) => res.json())
    .then((data) => {
      if (typeof data === 'object') {
        for (const datas of data.results) {
          let imageUrl = datas.formats['image/jpeg'];
          let readUrl = datas.formats['text/plain; charset=utf-8'];
          let tags = datas.bookshelves.values();
          let tager = [];
          for (let tag of tags) {
            tager.push(tag);
          }
          console.log(tager);
          // console.log(datas.authors);
          book.innerHTML += `<div class="overflow-hidden shadow-lg p-4 flex space-x-8 hover:bg-gradient-to-r from-green-300 to-blue-200 hover:rounded-2xl">
          <img class="w-4/5" src=${imageUrl} alt="${datas.title}">
          <div class="px-4 py-2">
          <div class="font-bold text-xl mb-2">${datas.title}</div>
          <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"><a href=${readUrl}>Read Online</a></button>
          
          <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${tager[0] != undefined ? tager[0] : 'No Tags'}</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${tager[1] != undefined ? tager[1] : 'No Tags'}</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${tager[2] != undefined ? tager[2] : 'No Tags'}</span>
          </div>
          </div>
          </Div>
          </div>
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
{
  /* <div class="p-4 flex space-x-8 hover:bg-gradient-to-r from-green-300 to-blue-200 hover:rounded-2xl">
          <img class="block" src=${imageUrl} />
          <div class="font-bold space-y-4">
          <h2>${datas.title}</h2>
          <h3>${datas.authors[0].name}</h3>
        </div> 
       bu 
        */
}
