// const filterBtnContainer = document.querySelector('.filter-button-container');
// let selectedBtn = null;

// filterBtnContainer.addEventListener('click', onfilterBtnContainerClick);

// function onfilterBtnContainerClick(evt) {
//     if (evt.target.nodeName !== 'BUTTON') {
//         return;
//     }

//     const currentActiveBtn = document.querySelector('.current');

//     if (currentActiveBtn) {
//         currentActiveBtn.classList.remove('.current');
//     }

//     const nextActiveBtn = evt.target;
//     nextActiveBtn.classList.add('.current');
//     selectedBtn = nextActiveBtn.dataset.value; //Add dataset value
// }