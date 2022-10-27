
/* ---------------------------Change Language--------------------------- */

const LangChange = document.getElementById('lang-change')

if(LangChange)
{
    LangChange.addEventListener('click', () =>{
       
        const EngActive = document.getElementById('english')
        
        if(EngActive.classList.contains('LangOn'))
        {
            // To Polish
            EngActive.classList.remove('LangOn');
            document.querySelectorAll(".ENG").forEach(a=>a.style.display = "none");
            document.querySelectorAll(".PL").forEach(a=>a.style.display = "block");
        }
        else
        {
            // To English
            EngActive.classList.add('LangOn');
            document.querySelectorAll(".ENG").forEach(a=>a.style.display = "block");
            document.querySelectorAll(".PL").forEach(a=>a.style.display = "none");
        }
    
    })
}

/* ---------------------------Show/Hide Menu--------------------------- */

const navMenu = document.getElementById('navi-menu')
const navChange = document.getElementById('navi-change')

if(navChange)
{
    navChange.addEventListener('click', () =>{
        if(navMenu.classList.contains('show-menu'))
        {
            // Menu Off
            navMenu.classList.remove('show-menu')
        }
        else
        {     
            // Menu On
            navMenu.classList.add('show-menu')
        }
    })
}

/* ---------------------------Close Menu OnClick--------------------------- */

const navLink = document.querySelectorAll('.navi_link')

function linkAction(){
    const navMenu = document.getElementById('navi-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ---------------------------Show Current Section --------------------------- */

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navi_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.navi_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)