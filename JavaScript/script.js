let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offest && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul li a [href*=' + id + ']').classList.add('active');
            });
        };
    });
};