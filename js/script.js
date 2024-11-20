const rowElem = document.querySelector(".m-row");
const overlayElem = document.getElementById("overlay");
const overlayBtn = document.getElementById("overlay-btn");
const imgCurElem = document.querySelector("img-cur");
let photosArray = [];

const printPhotos = () => {
    let result = "";
    photosArray.forEach((curItem) => {
       result += `
            <div class="m-col">
                <div class="m-card-photo" data-post-id="${curItem.id}">
                    <div class="m-photo">
                        <img src="${curItem.url}">
                    </div>
                    <div class="m-card-text">${curItem.title}</div>
                </div>
            </div>
            `;
    });
    rowElem.innerHTML = result
}


// Mostro overlay
const showOverlay = (clickElem) => {
    const postId = clickElem.dataset.postId;
    console.log(postId);
    const imgElem = photosArray.find((curItem) => curItem.id === postId);
    console.log(imgElem);
    overlayElem.classList.remove("d-none");
    overlayElem.classList.add("d-flex");
};

// Nascondo overlay
const hideOverlay = () => {
    overlayElem.classList.remove("d-flex");
    overlayElem.classList.add("d-none");
};

// Event listener
const addEvent = () => {
    const photos = document.querySelectorAll(".m-card-photo");
    photos.forEach((curPhotos) => {
        curPhotos.addEventListener("click", () => showOverlay(curPhotos));
    });
};


// Axios
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then((resp) => {
    photosArray = resp.data;
    // console.log(photosArray);
    printPhotos();
    addEvent();
});

overlayBtn.addEventListener("click", hideOverlay);