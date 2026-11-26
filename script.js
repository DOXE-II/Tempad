const boutons = document.querySelectorAll(".nav-btn");




boutons.forEach(function(bouton){
    bouton.addEventListener("click", function(){

        const ecranActuel = document.querySelector(".screen.active");
        const ecranCible = document.getElementById(bouton.dataset.target);
        
        ecranActuel.classList.remove("active");
        ecranCible.classList.add("active");

    })
})

const bootBouton = document.getElementById("boot-btn");

bootBouton.addEventListener("click", function(){
    
    document.documentElement.requestFullscreen().then(function(){
        screen.orientation.lock("landscape");

        const ecranBoot = document.getElementById("boot");
        const ecranSignIn = document.getElementById("signin");

        ecranBoot.classList.remove("active");
        ecranSignIn.classList.add("active");

    });
});
