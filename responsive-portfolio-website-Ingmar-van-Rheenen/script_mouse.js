const cursorSmall = document.querySelector('.small');
const cursorBig = document.querySelector('.big');

const positionElement = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  // Check if user is selecting text
  const selection = window.getSelection();
  if (selection.type === 'Range') {
    // If user is selecting text, change cursor styles
    cursorSmall.style.backgroundColor = 'black';
    cursorBig.style.backgroundColor = 'transparent';
  } else {
    // If user is not selecting text, reset cursor styles
    cursorSmall.style.backgroundColor = 'black';
    cursorBig.style.backgroundColor = 'transparent';
  }

  // Move cursor elements to mouse position
  cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

const handleClick = (e) => {
  // Get element at current mouse position
  const element = document.elementFromPoint(e.clientX, e.clientY);

  // Trigger click event on element
  element.click();
}

// Add mousedown event listener to trigger click event as soon as mouse button is pressed down
window.addEventListener('mousedown', handleClick);

// Increase the frequency of the mousemove event listener
window.addEventListener('mousemove', positionElement, { passive: true, capture: false, once: false });