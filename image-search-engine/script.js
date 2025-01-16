
const accessKey = "wzCF11UnyS0Yvwq98zM8LEx7QOEJTe-PWZUgew_N-wQ";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";

let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${ keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json;

   /* console.log(data);*/
   const results = data.results;

   results.map((result) =>{
const image = document.createElement("img");  /*this will create an image tag*/
image.src = result.urls.small;
const imageLink = document.createElement("a"); /*creates an a tag*/
imageLink.href = result.links.html;
imageLink.target = "_blank";

imageLink.appendChild(image); /*plcing the image inside the image link */

searchResult.appendChild(imageLink); /**you want the result to display in the div with id search result */
   })
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page =1;
    searchImages();
})
