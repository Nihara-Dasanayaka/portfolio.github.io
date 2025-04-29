// Typed.js initialization
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Fixed CV download functionality for Vercel
document.querySelector('.btn2').addEventListener('click', function(e) {
    e.preventDefault();
    
    console.log('CV download initiated');
    
    // For analytics (optional):
    // You can add Google Analytics or other tracking here
    
    // Vercel-compatible path to your CV
    const cvPath = '/docs/cv_nihara_dasanayaka(1).pdf';
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Nihara_Dasanayaka_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Alternative method that works on all browsers
    setTimeout(() => {
        window.open(cvPath, '_blank');
    }, 300);
});