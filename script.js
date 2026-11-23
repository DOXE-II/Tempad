const boutons = document.querySelectorAll(".nav-btn");




boutons.forEach(function(bouton){
    bouton.addEventListener("click", function(){

        const ecranActuel = document.querySelector(".screen.active");
        const ecranCible = document.getElementById(bouton.dataset.target);
        
        ecranActuel.classList.remove("active");
        ecranCible.classList.add("active");

    })
})



