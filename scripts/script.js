const observer = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        console.log(entry)
        entry.target.classList.toggle('show', entry.isIntersecting)
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => {
    observer.observe(element)
});

function gotoIDLink(link) {
    window.location.href = link;
}