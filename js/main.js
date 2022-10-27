
/* Skills */

const skillsContent = document.getElementsByClassName('skills_content')
const skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills()
{
    if(this.parentNode.className === 'skills_content skills_open')
    {
        this.parentNode.className = 'skills_content skills_close'
    }
    else
    {
        for(i = 0; i < skillsContent.length; i++)
        {
            skillsContent[i].className = 'skills_content skills_close'
        }

        if(this.parentNode.className === 'skills_content skills_close')
        {
            this.parentNode.className = 'skills_content skills_open'
        }
    }

}

/* Portfolio swiper */

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})


let swiper = new Swiper('.portfolio_container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});


/* Arrows */

document.getElementById("arrow-up").onclick = function() {
    window.scrollBy(0, -window.innerHeight);
};

document.getElementById("arrow-down").onclick = function() {
    window.scrollBy(0, window.innerHeight);
};

window.onscroll = function() {
    var top = document.body.scrollTop + document.documentElement.scrollTop == 0;
    document.getElementById('arrow-up').style.display = top ? 'block' : 'none';
    document.getElementById('arrow-up').style.display = top ? 'none' : 'block';

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100){
        document.getElementById('arrow-down').style.display='none';
    }else{
        document.getElementById('arrow-down').style.display='block';
    }
}



/* CSS Refresh on fullscreen */

document.addEventListener("fullscreenchange", refreshCSS());
document.addEventListener("mozfullscreenchange", refreshCSS());
document.addEventListener("webkitfullscreenchange", refreshCSS());
document.addEventListener("msfullscreenchange", refreshCSS());

refreshCSS = () => {
    let links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute('rel') == 'stylesheet') {
            let href = links[i].getAttribute('href')
                                    .split('?')[0];
                
            let newHref = href + '?version=' 
                        + new Date().getMilliseconds();
                
            links[i].setAttribute('href', newHref);
        }
    }
}

/* ViewHeight for mobile devices */

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);











/*==================== SCROLL REVEAL ANIMATION ====================*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home_data, .about_img, .skills_subtitle, .skills_text',{}); 
sr.reveal('.home_img, .about_subtitle, .about_text, .skills_img',{delay: 400}); 
sr.reveal('.home_social-icon',{ interval: 200}); 
sr.reveal('.skill_data, .work_img, .contact_input',{interval: 200}); 

/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 