
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
  <img src="C:/Users/udayu/OneDrive/Pictures/Screenshots/SmartInterviews_DSA.png" alt="Data Structures and Algorithms" height="200px">
  <img src="C:/Users/udayu/OneDrive/Pictures/Screenshots/Internshala_web.png" alt="Web Development">
  <img src="C:/Users/udayu/OneDrive/Pictures/Screenshots/Cisco_PythonEssentials.png" alt="Python Essentials" height="200px">
  <img src="C:/Users/udayu/OneDrive/Pictures/Screenshots/Nptel_DSAJava.png" alt="DSA through Java">
`;

const techStackHTML = `
  <img src="https://emaillistvalidation.com/blog/content/images/2023/09/HTML5_logo_and_wordmark.svg.png" alt="HTML 5" height="150px" width="25px">
  <img src="https://cdn.iconscout.com/icon/free/png-256/css3-8-1175200.png" alt="CSS 3" height="150px" width="25px">
  <img src="https://th.bing.com/th/id/OIP.Oag0dh4MINdG_qxOzJMoiwHaIB?cb=iwp1&rs=1&pid=ImgDetMain" alt="JavaScript" height="150px" width="25px">
  <img src="https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png" alt="Java" height="150px" width="25px">
  <img src= "https://res.cloudinary.com/teepublic/image/private/s--kWYh2vbW--/t_Preview/b_rgb:000000,c_limit,f_jpg,h_630,q_90,w_630/v1520050660/production/designs/2416585_0.jpg" alt="Python" height="150px" width="25px">
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
