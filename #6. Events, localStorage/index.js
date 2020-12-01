const select = document.querySelector(".select");
const selectValue = select.options[select.selectedIndex].value;

function saveName() {
    localStorage.setItem('country', selectValue);
    console.log(selectValue)
}

saveName();

select.addEventListener("change", saveName);