const init = async () => {
    let searchGiphyButton = document.querySelector("#searchGiphy");
    let numberOfResults = 50;

    document.body.addEventListener("keydown", e => { if (e.keyCode == 13) searchGiphy(document.querySelector("#giphySearchText").value, numberOfResults)});

    searchGiphyButton.addEventListener("click", () => searchGiphy(document.querySelector("#giphySearchText").value, numberOfResults));
}

const searchGiphy = async (searchString, gifLimit) => {
    const giphyAPIKey = "Itns2ooCkzQSaeloIoJ4cXZIEGdoQ9gq";
    let url = `http://api.giphy.com/v1/gifs/search?q="${searchString}"&limit=${gifLimit}&api_key=${giphyAPIKey}`;

    await fetch(url).then(gifs => gifs.json()).then(data => displayImages(data.data));
}

const displayImages = images => {
    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "imageDiv");

    images.map(image => {
        let aGif = document.createElement("img");
        aGif.setAttribute("src", image.images.original.url);
        aGif.setAttribute("alt", image.title);
        aGif.setAttribute("class", "gifResults");
        imageDiv.appendChild(aGif, document.querySelector(".imageDiv"));

        aGif.addEventListener("click", displayOne);
    });

    document.querySelector("#imageDivSection").replaceChild(imageDiv, document.querySelector(".imageDiv"));
}

function displayOne() {
    this.setAttribute("id", "displayOne");
    this.setAttribute("class", "imageDiv");
    document.querySelector("#imageDivSection").replaceChild(this, document.querySelector(".imageDiv"));
}

window.onload = init;