document.getElementById('error-message').style.display = 'none';
document.getElementById('error-found').style.display = 'none';
//load data from api
const searchBook = () => {
    const searchInput = document.getElementById('search-input');
    const searchField = searchInput.value;
    //clear data
    searchInput.value = '';
    //error handling
    // if (searchField === 'undefined') {
    //     document.getElementById('error-found').style.display = 'block';
    // }
    if (searchField === '' && searchField !== undefined) {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-found').style.display = 'none';
    }
    // else if (searchField !== 'undefined') {
    //     document.getElementById('error-found').style.display = 'none';
    // }
    else {
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('error-found').style.display = 'none';
        const url = `https://openlibrary.org/search.json?q=${searchField}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displayBook(data.docs))
    }
}

//display data on the website
const displayBook = books => {
    console.log(books[0]);
    const displayResult = document.getElementById('display-result');
    displayResult.textContent = '';
    document.getElementById('error-found').style.display = 'block';
    books.forEach(book => {
        console.log(book);
        document.getElementById('error-found').style.display = 'none';
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
                <div class="card-body w-75 h-75 mx-auto">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg"class="card-img-top" alt="...">
                    <h5 class="card-title p-2">Book Name : ${book.title}</h5>
                    <h5 class="card-text p-2">Author Name : ${book.author_name[0]}</h5>
                    <h5 class="card-text p-2">Publisher : ${book.publisher[0]}</h5>
                    <h5 class="card-text p-2">First Publish Date : ${book.first_publish_year}<h5>
                </div>
        </div>
        `;
        displayResult.appendChild(div);
    })
}