document.addEventListener('mousemove', function(e) {
    const image = document.getElementById('moving-image');
    const x = (e.clientX - window.innerWidth / 2) / 20;
    const y = (e.clientY - window.innerHeight / 2) / 20;
    image.style.transform = `translate(${x}px, ${y}px)`;
});
