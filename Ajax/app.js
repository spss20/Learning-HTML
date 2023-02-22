const searchForm = document.querySelector('#search-form');
const searchInput = searchForm.firstElementChild;
const todoList = document.querySelector('#todo-list');
const imageContainer = document.querySelector('#images-container');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value;
    fetchData(query);
})

async function fetchData(show_name) {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${show_name}`);
    const data = await res.json();
    if (data === null || data.length === 0) {
        console.log("No movie or drama found with name " + show_name);
        return;
    }
    console.log(data);

    const imageUrl = data[0].show.image?.medium;
    const showName = data[0].show.name;

    //Insert Show Name
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = showName;
    todoList.insertBefore(li, todoList.firstChild);

    //Insert Image
    if (imageUrl != null) {
        const image = document.createElement('img');
        image.classList.add('img-fluid');
        image.src = imageUrl;
        imageContainer.append(image);
    } else {
        console.log("No image found for this show");
    }

}

function surya() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Oh Fuck")
        }, 1000);
    })
}