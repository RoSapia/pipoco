import home from "./pages/home/index.js"
import about from "./pages/about/index.js"
import contacts from "./pages/contacts/index.js"

const main = document.querySelector("root")

const init = () =>{
    window.addEventListener("hashchange", () => console.log(window.location.hash))
}

window.addEventListener("load", () =>{
    main.appendChild(home())
    init()
} )