const btnSecondary = document.querySelector('.btn-secondary');

btnSecondary.addEventListener('click', () => {
    const badgeElement = btnSecondary.children[0];

    if(badgeElement.hasAttribute('class')){
        badgeElement.removeAttribute('class')
    }else{
        badgeElement.classList.add('badge');
    }
 
})