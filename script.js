const envelope = document.getElementById('envelope');
const fullLetter = document.getElementById('fullLetter');
const closeBtn = document.getElementById('closeBtn');

// Open the letter
envelope.addEventListener('click', () => {
    // 1. First, flip the envelope flap
    document.querySelector('.flap').style.transform = 'rotateX(180deg)';
    
    // 2. Wait a split second, then expand the letter to full screen
    setTimeout(() => {
        fullLetter.classList.add('active');
    }, 400);
});

// Close the letter
closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents re-triggering the open
    fullLetter.classList.remove('active');
    
    // Flip the flap back down after a delay
    setTimeout(() => {
        document.querySelector('.flap').style.transform = 'rotateX(0deg)';
    }, 600);
});
