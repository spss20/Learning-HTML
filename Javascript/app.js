console.log("Hello World")

const form = document.querySelector("#user-form");
const input = form.querySelector("input");
const reset = document.querySelector("#reset-btn");
const items = document.querySelector("#items-list");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("SUBMITTED");
    const new_item = document.createElement('li');
    console.log({ value: input.value });
    new_item.innerText = input.value;
    items.append(new_item);
});

reset.addEventListener('click', () => {
    console.log("RESET CLICKED");
    items.innerHTML = "";
});

