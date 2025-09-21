// script.js

// Initialize AOS for animations
AOS.init({
  duration: 1000,
  once: true
});

// Toggle Portfolio Content (Certifications vs Tech Stack)
const certBtn = document.getElementById('certBtn');
const techBtn = document.getElementById('techBtn');
const portfolioContent = document.getElementById('portfolioContent');

// HTML for certifications and tech stack
const certificationsHTML = `
  <img src="pictures/SmartInterviews_DSA01.png" alt="Data Structures and Algorithms" height="200px">
  <img src="pictures/Internshala_web.png" alt="Web Development" height="200px">
  <img src="pictures/Cisco_PythonEssentials.png" alt="Python Essentials" height="200px">
  <img src="pictures/Nptel_DSAJava.png" alt="DSA through Java" height="200px">
  <img src="pictures/ApexPlanet.png" alt="Web Development Internship" height="200px">
  <img src="pictures/be10x_AI.png" alt="AI Tools" height="200px">
  <img src="pictures/Gen_AI_Certificate.jpg" alt="Generative Ai" height="200px">
  <img src="pictures/Coursera_Intro.jpg" alt="Coursera Software Intro" height="200px">
`;

const techStackHTML = `
  <img src="https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png" alt="Java" height="150px" width="25px">
  <img src= "https://res.cloudinary.com/teepublic/image/private/s--kWYh2vbW--/t_Preview/b_rgb:000000,c_limit,f_jpg,h_630,q_90,w_630/v1520050660/production/designs/2416585_0.jpg" alt="Python" height="150px" width="25px">
  <img src="https://emaillistvalidation.com/blog/content/images/2023/09/HTML5_logo_and_wordmark.svg.png" alt="HTML 5" height="150px" width="25px">
  <img src="https://cdn.iconscout.com/icon/free/png-256/css3-8-1175200.png" alt="CSS 3" height="150px" width="25px">
  <img src="https://th.bing.com/th/id/OIP.Oag0dh4MINdG_qxOzJMoiwHaIB?cb=iwp1&rs=1&pid=ImgDetMain" alt="JavaScript" height="150px" width="25px">
  <img src="https://www.outsourcing-web.com/wp-content/uploads/2018/09/reactlogo2-300x289.png" alt="React" height="150px" width="25px">
`;

// Event listeners for toggling content
certBtn.addEventListener('click', () => {
  portfolioContent.innerHTML = certificationsHTML;
});

techBtn.addEventListener('click', () => {
  portfolioContent.innerHTML = techStackHTML;
});

// Contact Form Submission with Popup Alert
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  // Show success message popup
  const popup = document.getElementById('popup');
  popup.style.display = 'block';

  // Hide popup after 3 seconds
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);

  // Reset form fields after submission
  this.reset();
});

// Optional: Enable smooth scrolling for anchor links (fallback for older browsers)
if ('scrollBehavior' in document.documentElement.style) {
  // Modern browsers already support smooth scrolling natively
} else {
  // Add smoothscroll polyfill for older browsers
  import('smoothscroll-polyfill').then(() => {
    smoothscroll.polyfill();
  });
}

// ...existing code...

// Modal functionality for certifications
function enableCertModal() {
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('modalImg');
  const closeModal = document.getElementById('closeModal');
  // Add click event to all images inside portfolioContent
  document.querySelectorAll('#portfolioContent img').forEach(img => {
    img.style.cursor = "pointer";
    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    };
  });
  closeModal.onclick = function() {
    modal.style.display = "none";
    modalImg.src = "";
  };
  // Close modal on outside click
  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
    }
  };
}

// Re-enable modal after toggling content
certBtn.addEventListener('click', () => {
  portfolioContent.innerHTML = certificationsHTML;
  enableCertModal();
});
techBtn.addEventListener('click', () => {
  portfolioContent.innerHTML = techStackHTML;
});

// Enable modal on initial load if certifications are shown
if (portfolioContent.innerHTML.includes('pictures/SmartInterviews_DSA01.png')) {
  enableCertModal();
}
