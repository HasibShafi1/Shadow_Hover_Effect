document.addEventListener("mousemove", (event) => {
    const text = document.querySelector(".hover-text");
    const { clientX, clientY } = event;

    // Apply the glowing effect at the mouse position
    text.style.textShadow = `${clientX / 10}px ${clientY / 10}px 40px rgba(255, 255, 255, 0.8)`;
});
