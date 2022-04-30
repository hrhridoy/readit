const book = document.querySelector('#book');
const url = window.location.href;
// data not always pushed in the array because of latency
let dataArr = [];
console.log(dataArr);
function fetchData() {
  fetch('https://gutendex.com/books')
    .then((res) => res.json())
    .then((data) => {
      if (typeof data === 'object') {
        for (const datas of data.results) {
          dataArr.push(datas);
          let imageUrl = datas.formats['image/jpeg'];
          let readUrl = datas.formats['text/html'];
          let download = datas.formats['application/epub+zip'];
          let tags = datas.bookshelves.values();
          let tager = [];
          for (let tag of tags) {
            tager.push(tag);
          }
          book.innerHTML += `<div class="overflow-hidden shadow-lg p-4 flex space-x-8 hover:bg-gradient-to-r from-green-300 to-blue-200 hover:rounded-lg">
          <img class="md:w-40 w-auto h-auto rounded-2xl" src=${imageUrl}
          alt="${datas.title}">
          <div class="px-4 py-2">
          <div class="font-bold text-xl mb-2 text-sky-500 dark:text-sky-400">
          ${datas.title}</div>
          <p class="text-base mb-2 italic text-black font-bold">Written By:
          ${datas.authors[0].name}</p>
          <div class="w-3/4 justify-between flex"><button class="bg-green-500 px-2 py-2 text-sm text-black-600 font-semibold rounded-lg border hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"><a href=${readUrl}>Read Online</a></button>
          <button class="bg-red-500 px-2 py-2 text-sm text-black-600 font-semibold rounded-lg border hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"><a href=${download}>Download</a></button></div>

          <div class="pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${tager[0] != undefined ? tager[0] : 'No Tags'}</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${tager[1] != undefined ? tager[1] : 'No Tags'}</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${tager[2] != undefined ? tager[2] : 'No Tags'}</span>
          </div>
          </div>
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

if (url.match(/books/ | url.includes('*/'))) {
  window.addEventListener('onload', fetchData());
}
// pushed to github
