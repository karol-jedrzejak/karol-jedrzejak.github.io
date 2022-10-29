
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

