const openBTn = document.querySelector("#open-btn");
const modelContainer = document.querySelector("#model-container");
const closeBtn = document.querySelector('#close-btn');

// Event Listeners
openBTn.addEventListener('click', function () {
    modelContainer.style.display='block';
});

closeBtn.addEventListener('click', function () {
    modelContainer.style.display = "none";
});

window.addEventListener('click', function (e){
    if (e.target === modelContainer) {
        modelContainer.style.display = "none";
    }
})