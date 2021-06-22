window.addEventListener('DOMContentLoaded',function() {
    if (localStorage.getItem("dark_mode") === "true") {
        document.body.classList.toggle('dark-mode')
    }
})
function darkmode() {
    document.body.classList.toggle('dark-mode')
    localStorage.setItem("dark_mode",document.body.classList.contains("dark-mode").toString())
}