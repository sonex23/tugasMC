document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".nav").forEach(elm => {
        elm.addEventListener("click", (event) => {
            page = event.target.getAttribute("href").substr(1);
            loadPage(page);

        })
    })

    let page = window.location.hash.substr(1);
    if (page == "") page = 'home';

    const loadPage = page => {
        fetch(`./pages/${page}.html`)
            .then(response => {
                return response.text();
            })
            .then(data => {
                const dataKontainer = document.querySelector("#atas");
                dataKontainer.innerHTML = data;
            })
            .catch(error => {
                console.log(`error ${error}`);
            })
    }

    loadPage(page);


})