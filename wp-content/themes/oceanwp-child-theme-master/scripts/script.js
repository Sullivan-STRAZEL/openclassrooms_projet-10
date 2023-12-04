// Variables
const popup = document.querySelector('.popup-overlay');
const popupCloseBtn = document.querySelector('.popup-close');

// FUNCTION - POPUP - Close the popup
function popupClose() {
    popup.style.display = 'none';
}

// EVENT - POPUP - Close the popup when the close button is clicked on
popupCloseBtn.addEventListener('click', () => {
    popupClose();
});