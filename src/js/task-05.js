const inputEl = document.querySelector("#name-input");
const spunEl = document.querySelector("#autput");
const onInputEntering = (event) => {
    if (event.currentTarget.value.trim() !== "") {
        spanEl.textContent = event.currentTarget.value;
    } else {
        spanEL.textContent = "Anonymous";
    }
};
inputEl.addEventListener("input", onInputEntering);