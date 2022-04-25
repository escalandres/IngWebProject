window.addEventListener('resize', () => {
    const button = document.getElementById('navButton');
    const Div = document.getElementById('navDiv');
    const A = document.getElementById('navA');
    if(screen.width <= 768 && screen.width > 600){
        alert('Si')
        button.classList.remove("hide");
        Div.classList.remove("hide");
        A.classList.remove("hide");
    }
    else{
        alert('no')
        button.classList.add("hide");
        Div.classList.add("hide");
        A.classList.add("hide");
        alert('ya')
    }
});

