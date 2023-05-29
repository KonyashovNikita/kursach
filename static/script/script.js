var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
  
ready(() => { 
    let add  = document.querySelector(".add");
    add.style.display = "none";

    setTimeout(() => {
        add.style.display = "block";
    }, 3000);

    document.querySelector(".close").addEventListener("click", (e) =>{
        add.style.display = "none";

        setTimeout(() => {
            add.style.display = "block";
        }, 20000);

    });

    let burger = document.querySelector(".navbar__burger");
    let menu = document.querySelector(".navbar-wrap");

    burger.addEventListener("click", (e) =>{
        menu.classList.toggle("active");
        burger.classList.toggle("active");
        document.body.classList.toggle("_lock");
    });

    let predmety = document.querySelector("#predmety");
    let aboutus = document.querySelector("#aboutus");
    let contacts = document.querySelector("#contacts");
    let popup = document.querySelector("#pred_popup");
});
