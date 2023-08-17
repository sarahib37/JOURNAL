import { articlePosts } from "./data.js";

let hidden = ""


document.addEventListener("click", function(e){
    if (e.target.id === 'view'){
        clickedViewButton()
    }

    if (e.target.id === 'home'){
        clickedHomeButton()
    }

    if (e.target.id === 'about-me'){
        clickedAboutButton()
    }

    if (e.target.id === 'logo-text'){
        clickedTextButton()
    }

})
    
function clickedViewButton(){
    const viewMore = document.getElementById('view')

    if (viewMore.innerText === "View Less"){
        viewMore.innerText = "View More"        
    }
    else{
        viewMore.innerText = "View Less"
    }

    for (const post of articlePosts){
        if (post.id == 4){
            document.getElementById('4').classList.toggle('hidden')
        } 

        if (post.id == 5){
            document.getElementById('5').classList.toggle('hidden')
        } 

        if (post.id == 6){
            document.getElementById('6').classList.toggle('hidden')
        } 
    }
    
}

function clickedHomeButton(){
    document.getElementById('main-article').classList.remove('hidden')
    document.getElementById('hero-post').classList.add('hidden')
    document.getElementById('about').classList.add('hidden')
}

function clickedAboutButton(){
    document.getElementById('about').classList.remove('hidden')
    document.getElementById('hero-post').classList.add('hidden')
    document.getElementById('main-article').classList.add('hidden')
}

function clickedTextButton(){
    document.getElementById('about').classList.add('hidden')
    document.getElementById('hero-post').classList.remove('hidden')
    document.getElementById('main-article').classList.add('hidden')
}



function getPosts(){
    let postHtml = ""

    for (const post of articlePosts){

        if (post.id == 4){
            hidden = "hidden"
        }

        if (post.id == 5){
            hidden = "hidden"
        }

        if (post.id == 6){
            hidden = "hidden"
        }
        
        
        postHtml += `
            <div class="article ${hidden}" id="${post.id}">
                <img src="images/${post.images}"> 
                <p class="article-date">${post.date}</p>
                <h2>${post.title}</h2>
                <p class="article-desc">${post.description}
                </p>
            </div>
        `

        
    }

    return postHtml
}

function renderPosts(){
    const articleListing = document.getElementById('article-listing')

    articleListing.innerHTML = getPosts()
}

renderPosts()




