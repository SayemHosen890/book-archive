//load data from api
const searchBook = () => {
    const searchInput = document.getElementById('search-input');
    const searchField = searchInput.value;
    searchInput.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchField}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs))
}
//display data on the website
const displayBook = books => {
    console.log(books[0]);
    const displayResult = document.getElementById('display-result');
    displayResult.textContent = '';
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card container">
                <div class="card-body w-75 mx-auto">
                    <img src="https://covers.openlibrary.org/b/id/554106-M.jpg"class="card-img-top w-50" alt="...">
                    <h5 class="card-title">${book.title}</h5>
                    <h5 class="card-text">${book.author_name}</h5>
                    <h5 class="card-text">${book.first_publish_year}<h5>
                    <h5 class="card-text">${book.publisher}</h5>
                </div>
        </div>
        `;
        displayResult.appendChild(div);
    })
}