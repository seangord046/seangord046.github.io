document.addEventListener('mousemove', function(e) {
    const header = document.querySelector('h1');
    const x = (e.clientX - window.innerWidth / 2) / 20;
    const y = (e.clientY - window.innerHeight / 2) / 20;
    header.style.transform = `translate(${x}px, ${y}px)`;
});
