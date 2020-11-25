const title = document.querySelector("h2");

const colors = ['red', 'blue', 'green', 'tomato'];

const superEventHandler = {
    mouseOnTop : function(){
        title.style.color = colors[0];
        title.innerHTML = 'The mouse is here!';
    },
    mouseLeaves : function(){
        title.style.color = colors[1];
        title.innerHTML = 'The mouse is gone!';
    },
    windowResize : function(){
        title.style.color = colors[2];
        title.innerHTML = 'You Just Resized!';
    },
    mouseRightClick : function(){
        title.style.color = colors[3]; 
        title.innerHTML = 'That was a right click!';
    }
}
title.addEventListener('mouseenter', superEventHandler.mouseOnTop);
title.addEventListener('mouseleave', superEventHandler.mouseLeaves);
window.addEventListener('resize', superEventHandler.windowResize);
window.addEventListener('contextmenu', superEventHandler.mouseRightClick);
