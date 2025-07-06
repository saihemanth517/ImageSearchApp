//! access key from unsplash webpage
const accessKey = "ffHS3TkntfnCbNRP3cznuZwjoRYRYZobfGCbHRZIB5s";

const form = document.querySelector("form");
const inputValue = document.querySelector("#inputvalue");
const showResults = document.querySelector("#storeImage");
const showMoreBtn = document.querySelector("#showmore");

let keyword ="";
let page = 1;
async function searchImages(){
    keyword = inputValue.value;
        // console.log(keyword);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.results);
    if(page == 1){
        showResults.innerHTML="";
    }
    data.results.map((result)=>{
                console.log(result);
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href=result.links.html;

        imageLink.appendChild(image);
        showResults.appendChild(imageLink);

    });
    showMoreBtn.style.display="block";
}


form.addEventListener("submit" , e=>{
    e.preventDefault();
    page=1;
    searchImages()
})

showMoreBtn.addEventListener("click",_=>{
    page++;
    searchImages();
})