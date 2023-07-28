//clickable products
var lastClickedDescription = null;

function toggleDescription(event) {
  var imageContainer = event.target.parentNode;
  var description = imageContainer.querySelector(".image-description");

  if (lastClickedDescription !== null && lastClickedDescription !== description) {
    lastClickedDescription.style.display = "none";
  }

  if (description.style.display === "none" || description.style.display === "") {
    description.style.display = "inline-block";
  } else {
    description.style.display = "none";
  }

  lastClickedDescription = description;
}

//draggable contents
const imageScrolls = document.querySelectorAll('.image-scroll');

imageScrolls.forEach(function(imageScroll) {
  let isDragging = false;
  let startPos = 0;
  let scrollLeft = 0;

  imageScroll.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPos = e.clientX;
    scrollLeft = imageScroll.scrollLeft;
  });

  imageScroll.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startPos;
    imageScroll.scrollLeft = scrollLeft - delta;
  });

  imageScroll.addEventListener('mouseup', () => {
    isDragging = false;
  });

  imageScroll.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  const images = imageScroll.querySelectorAll('img');

  images.forEach(function(image) {
    image.setAttribute('draggable', 'false');
  });
});