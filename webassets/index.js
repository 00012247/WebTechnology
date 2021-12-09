"use strict"
window.addEventListener("DOMContentLoaded" , () => {
    const menuBtn = document.querySelector(".menu i"),
        navbar = document.querySelector(".menu-items"),
        caruselBtnLeft = document.querySelector(".left i"),
        caruselBtnright = document.querySelector(".right i"),
        firstCard = document.querySelector(".firstCard"),
        lastCard = document.querySelector(".lastCard"),
        reviewBtnA = document.querySelector(".A"),
        reviewBtnB = document.querySelector(".B"),
        reviewBtnC = document.querySelector(".C"),
        card1= document.querySelector(".card1"),
        card2= document.querySelector(".card2"),
        card3= document.querySelector(".card3");

    // ReviewCarusel
    reviewBtnA.addEventListener("click" , () =>{
        card1.classList.remove('actively');
        card2.classList.add('actively');
        card3.classList.add('actively');
        reviewBtnA.style.background = "#111"
        reviewBtnB.style.background = "#999"
        reviewBtnC.style.background = "#999"
    })
    reviewBtnB.addEventListener("click" , () =>{
        card1.classList.add('actively');
        card2.classList.remove('actively');
        card3.classList.add('actively');
        reviewBtnA.style.background = "#999"
        reviewBtnB.style.background = "#111"
        reviewBtnC.style.background = "#999"
    })
    reviewBtnC.addEventListener("click" , () =>{
        card1.classList.add('actively');
        card2.classList.add('actively');
        card3.classList.remove('actively');
        reviewBtnA.style.background = "#999"
        reviewBtnB.style.background = "#999"
        reviewBtnC.style.background = "#111"
    })

        // navItem = document.querySelectorAll(".nav-item")

        
        // To activite navbar indicator
        // navItem.forEach((nav) =>{
        //     nav.addEventListener("click", (e)=>{
        //         const activeNav = e.target;
        //         // console.log(activeNav);
        //         if(activeNav = e.target){
        //             activeNav.classList.add("active");
                    
        //         }
        //         else{
        //             nav.classList.remove("active")
        //         }
        //     })
        // })

        // Caurusel cards
        caruselBtnLeft.style.opacity = .5;
        caruselBtnLeft.addEventListener("click", ()=>{
            firstCard.classList.remove("visible");
            lastCard.classList.add("visible")
            caruselBtnLeft.style.opacity = .5;
            caruselBtnright.style.opacity = 1;
        })
        caruselBtnright.addEventListener("click",() =>{
            firstCard.classList.add("visible");
            lastCard.classList.remove("visible");
            caruselBtnLeft.style.opacity = 1;
            caruselBtnright.style.opacity = .5;
        })

        

        // Opening menu
        menuBtn.addEventListener("click", ()=>{
            navbar.classList.toggle("visibility");
            menuBtn.classList.toggle("fa-times");
        })

        // Jump bottom and vavbar scroll
        window.addEventListener("scroll" , () =>{
            const top = document.querySelector(".to-top");
            const nav = document.querySelector("#nav-container");

            const limit = window.pageYOffset;
            // jump
            // console.log(limit);
            if(limit < 600){
                top.classList.add("visible")
            }
            else{
                top.classList.remove("visible")
            }
            // navbar 
            if (limit > 100 && limit <1000){
                nav.classList.add("visible");
            }
            else{
                nav.classList.remove("visible")
                
            }
        
        })
});