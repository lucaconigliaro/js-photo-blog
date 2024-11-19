const rowElem = document.querySelector(".row");
let photosArray = [];

const printPost = () => {
    photosArray.forEach((curItem) => {
        rowElem.innerHTML += `
             <div class="col">
                    <div class="card-photo">
                        <div class="photo">
                            <img class="img-card" src="${curItem.thumbnailUrl}">
                        </div>
                   <div class="card-text">${curItem.title}</div>
             </div>
    `
    });
}

// Axios
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then((resp) => {
    photosArray = resp.data;
    // console.log(photosArray);
    printPost();
});