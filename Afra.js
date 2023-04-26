let navUl = document.querySelectorAll(".head-elem nav ul li a");

function scrollto(element) {

    element.forEach(elmnt => {

        elmnt.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior : "smooth"
                
            });
            
        });
        
    });
    
}

scrollto(navUl);

let portfolioButt = document.querySelectorAll(".portfolio .container ul li");

let portfolioimages = document.querySelectorAll(".portfolio .imgs-sec .box");

portfolioButt.forEach(butt => {

    butt.addEventListener("click", (e) => {

        let imageBox = document.querySelectorAll(e.target.dataset.category);

        portfolioButt.forEach(but => {

            but.classList.remove("active");
            
        });

        butt.classList.add("active");

        if(butt.classList.contains("all")) {

            portfolioimages.forEach(image => {

                image.classList.remove("hide");
                
            });
            
        } else {

            portfolioimages.forEach(image => {

                image.classList.add("hide");
                
            });
            
            imageBox.forEach(box => {
    
                box.classList.remove("hide");
                
            });
            
        }
        
    });
    
});