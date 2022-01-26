const buttons =  Array.from(document.querySelectorAll('.btn-primary'));
const container = Array.from(document.querySelectorAll('.container'));

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.textContent === "Baseline"){
            container[0].classList.remove("hide");
            setTimeout(() => container[0].classList.add("hide"),3000);
        }else if(btn.textContent === "Leading"){
            container[1].classList.remove("hide");
            setTimeout(() => container[1].classList.add("hide"),3000);
        }
    })
})