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
        }, 2000);

    });
});