const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

// Open Lightbox
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showLightbox();
  });
});

function showLightbox() {
  lightbox.style.display = 'flex';
  lightboxImg.src = galleryImages[currentIndex].src;
}

// Close Lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
}

// Next Image
function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
}

// Previous Image
function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
}

// Filter Images (FIXED)
function filterImages(category) {
  const buttons = document.querySelectorAll('.filter-buttons button');
  buttons.forEach(btn => btn.classList.remove('active'));

  // highlight clicked button
  const clickedBtn = event.target;
  clickedBtn.classList.add('active');

  // show/hide images
  galleryImages.forEach(img => {
    if (category === 'all' || img.dataset.category === category) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}
