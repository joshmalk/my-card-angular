// JavaScript to toggle visibility of the paragraph descriptions
const toggleDetailsButtons = document.querySelectorAll('.toggle-details');
const paragraphsSections = document.querySelectorAll('.paragraphs');

toggleDetailsButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    paragraphsSections[index].classList.toggle('hidden');
  });
});

// JavaScript for cloning cards
document.querySelector('#duper').addEventListener('click', (e) => {
  const cardContainer = document.querySelector('.card-container');
  const cardWrapperClone = document.querySelector('.card-wrapper').cloneNode(true);

  // Add unique classes to the cloned elements
  cardWrapperClone.classList.add('cloned-card');
  cardWrapperClone.querySelector('.toggle-details').textContent = 'Details';

  cardContainer.appendChild(cardWrapperClone);

  // Set up event listeners for the cloned button
  const clonedToggleDetailsButton = cardWrapperClone.querySelector('.toggle-details');
  const clonedParagraphsSection = cardWrapperClone.querySelector('.paragraphs');

  clonedToggleDetailsButton.addEventListener('click', () => {
    clonedParagraphsSection.classList.toggle('hidden');
  });
});
document.querySelector('#deleteLastCard').addEventListener('click', (e) => {
// Code for deleting the last card
const cardContainer = document.querySelector('.card-container');
const cardWrappers = document.querySelectorAll('.card-wrapper');

// Check if there's at least one card to delete
if (cardWrappers.length > 1) {
    const lastCard = cardWrappers[cardWrappers.length - 1];
    cardContainer.removeChild(lastCard);
}
});

document.querySelector('.card-wrapper').addEventListener('mouseover', (e) => {
const cardWrapper = document.querySelector('.card-wrapper');
cardWrapper.classList.toggle('alt-bg2');
});

document.querySelector('.card-wrapper').addEventListener('mouseleave', (e) => {
const cardWrapper = document.querySelector('.card-wrapper');
cardWrapper.classList.toggle('alt-bg2');
});

document.querySelector('#title').addEventListener('click', (e) => {
const headings = document.querySelectorAll('.sheetzLbl'); // Corrected class name
headings.forEach((heading) => {
heading.textContent = "something else";
});
});



document.querySelector('#background').addEventListener('click', (e) => {
const cardWrappers = document.querySelectorAll('.card-wrapper');
/* loop to change each existing iteration*/
cardWrappers.forEach((cardWrapper) => {
  cardWrapper.classList.toggle('alt-bg');
});
});