const pages = [
    ["Home","index.html"],
    ["About","about.html"],
    ["News","news.html"],
    ["Showcase","youtube.html"],
]

const navBar = document.createElement("nav")
const unorderedList = document.createElement("ul")
unorderedList.setAttribute('class','unselectable')
function createNavBarItem(name,link,iscurrentpage) {
    const listItem = document.createElement('li')
    const navLink = document.createElement("a")

    navLink.innerHTML = name
    
    listItem.appendChild(navLink)
    unorderedList.appendChild(listItem)
    
    if (iscurrentpage) {
        listItem.id = "HOLYCOWITSTHECURRENTPAGE"
        navLink.innerHTML=name+"!"
        navLink.style.cursor = "default"
    } else {
        navLink.href = link
        navLink.addEventListener('pointerenter',function(){
            navLink.innerHTML=name+"?"
        })
        navLink.addEventListener('pointerleave',function(){
            navLink.innerHTML=name
        })
    }
}

document.body.insertAdjacentElement('afterbegin',navBar)
navBar.insertAdjacentElement('afterbegin',unorderedList)

for (let index = 0; index < pages.length; index++) {
    const pathname = window.location.pathname.replace("/","")
    const pageName = pages[index][0]
    const pageLink = pages[index][1]
    const isCurrentPage = pathname==pageLink
    createNavBarItem(pageName,pageLink,isCurrentPage)
    // console.log(window.location.pathname,pathname,pageLink,isCurrentPage)
}