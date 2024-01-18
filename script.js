const number = document.getElementById("number");
const circle = document.getElementById("progressCircle");

function updateProgressBar() {
    const input = document.getElementById("percentageInput");
    const percentage = parseInt(input.value);

    if (isNaN(percentage) || percentage < 0 || percentage > 100) {
        alert("Please enter a valid percentage between 0 and 100.");
        return;
    }

    // Calculate the dash offset for the circle based on the percentage
    const dashOffset = 472 - (472 * percentage / 100);

    // Set the dash offset property using JavaScript with a smooth transition
    circle.style.transition = "stroke-dashoffset 1s ease-out";
    circle.style.strokeDashoffset = dashOffset;

    // Increment the number gradually
    const startNumber = parseInt(number.textContent);
    animateNumber(startNumber, percentage, 1000);
}

function animateNumber(start, end, duration) {
    const startTime = new Date().getTime();
    
    function update() {
        const currentTime = new Date().getTime();
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
            const value = Math.floor(start + progress * (end - start));
            number.textContent = value + "%";
            requestAnimationFrame(update);
        } else {
            number.textContent = end + "%";
        }
    }

    update();
}
