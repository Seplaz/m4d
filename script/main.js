const cardContainer = document.getElementById('card__container');
const card = document.getElementById('card');

function handleCardClick(event) {
 const target = event.target;
 const serviceDescription = target.querySelector('p').innerHTML;

 if (serviceDescription) {
 showServiceDescription(serviceDescription);
 }
}

function showServiceDescription(description) {
 const popup = document.createElement('div');
 popup.classList.add('popup');
 popup.innerHTML = description;

 card.append(popup);

 popup.style.display = 'block';
 popup.style.opacity = 1;

 popup.addEventListener('animationend', () => {
 popup.style.display = 'none';
 });

 popup.addEventListener('animationend', () => {
 popup.style.opacity = 1;
 });
}

for (let i = 0; i < cardContainer.children.length; i++) {
 cardContainer.children[i].addEventListener('click', handleCardClick);
}