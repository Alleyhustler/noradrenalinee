document.getElementById('spinButton').addEventListener('click', () => {
    const wheel = document.getElementById('wheel');
    const resultDiv = document.getElementById('result');
    
    // Generate a random degree to spin the wheel
    const randomDegree = Math.floor(Math.random() * 360);
    
    // Apply spinning effect
    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${randomDegree + 1800}deg)`; // Adding 1800 degrees to ensure multiple spins
    
    // Determine result after spinning
    setTimeout(() => {
        const result = randomDegree < 180 ? 'Yes, you are!' : 'No, you are not!';
        resultDiv.textContent = result;
    }, 3000); // Time should match the spinning duration
});
