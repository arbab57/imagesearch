// FmWVzU9t_ZbztGOiq5DU0tJYIzTFV_YJpo-OsGFygbo

const btnSearch = document.querySelector('#btn-submit')
const conImgs = document.querySelector('#con-images')
const searchBox = document.querySelector('#search-box')
const moreBtn = document.querySelector('#more-btn')
let array = [];
let search = "office";
let page = 1;
let perPage = 12;

moreBtn.addEventListener("click", () => {
    page++;
    fetchData()
})


btnSearch.addEventListener('click', (e) => {
    e.preventDefault()
    conImgs.innerHTML = "";
    page = 1;
    search = searchBox.value
    fetchData()

    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error("could not fetch resources") 
    //     }
    //     return response.json()
    // })
    // .then(data => array = data)
    // .catch(error => console.error(error))
    // console.log(array)


})

async function fetchData() {

    try{
        const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=${perPage}&query=${search}&client_id=FmWVzU9t_ZbztGOiq5DU0tJYIzTFV_YJpo-OsGFygbo`);
        if (!response.ok) {
            throw new Error("could not fetch")
        }
        const data = await response.json()
        array = data.results
        render()
    }
    catch(error){
        console.error(error)
    }
    
}


function render() {
    conImgs.insertAdjacentHTML('beforeend', array.map((item, index) => {
        return (

            `<div class="col-lg-4 col-md-6 img-con"> 

                <a href="${item.links.html}">
                
                <img class="result-img" src="${item.urls.small}" alt="">
                
                </a>

            </div>`

        )
    }).join(''))
    moreBtn.classList.remove('d-none')

    
}




    
