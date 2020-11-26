const title = document.querySelector("#title");
const background = document.querySelector('body')


function windowResize(){
    const windowSize = window.innerWidth;
    title.innerHTML = 'This window size is ' + windowSize;
    if (windowSize > 800){
        background.style.backgroundColor = '#9b59b6';
    } else if (windowSize <= 800 && windowSize > 600){
        background.style.backgroundColor = '#2980b9';
    } else {
        background.style.backgroundColor = '#27ae60'
    }
}

window.addEventListener('resize', windowResize);
