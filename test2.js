// Navigation menu toggle
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// Image gallery creation
function createGallery() {
    const gallery = document.getElementById('gallery');
    const images = [
        { src: 'image1.jpg', alt: '' },
        { src: 'image2.jpg', alt: '' },
        { src: 'image3.jpg', alt: '' }
    ];
    
    images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        imgElement.alt = img.alt; // Empty alt attributes
        imgElement.onclick = function() { showImage(this); };
        gallery.appendChild(imgElement);
    });
}

// Form submission without labels
function setupForm() {
    const form = document.getElementById('contactForm');
    form.innerHTML = `
        <img src="profile.jpg" alt=""> <!-- Missing alt text -->
        <input type="text" id="name" placeholder="Enter name">
        <input type="email" id="email" placeholder="Enter email">
        <div onclick="submitForm()" style="background: blue; color: lightblue; padding: 10px; cursor: pointer;">Submit</div>
    `;
}

// Generic click handler with no keyboard support
function addClickHandlers() {
    const buttons = document.querySelectorAll('.clickable');
    buttons.forEach(button => {
        button.onclick = function() {
            this.style.backgroundColor = 'red';
        };
        // No keyboard event handlers
    });
}

// Color contrast issues
function styleElements() {
    const textElements = document.querySelectorAll('.info-text');
    textElements.forEach(el => {
        el.style.color = '#AAA'; // Light gray on white background
        el.style.fontSize = '11px';
    });
}

// Modal with keyboard trap
function showModal(content) {
    modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5);">
            <div style="width: 80%; margin: 100px auto; background: white; padding: 20px;">
                ${content}
                <span onclick="closeModal()" style="cursor: pointer;">✕</span>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    // Focus is not trapped and no escape key handler
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    createGallery();
    setupForm();
    addClickHandlers();
    styleElements();
    
    // Autoplaying content with no controls
    const video = document.createElement('video');
    video.src = 'video.mp4';
    video.autoplay = true;
    document.body.appendChild(video);
});
    const modal = document.createElement('div');