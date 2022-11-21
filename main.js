let input = document.querySelector("#add");
let btn = document.querySelector("#btn");
let list = document.querySelector(".list");

btn.addEventListener("click", (array) => {
    let txt = input.value;
    if (txt === "") {
        alert("write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = txt;
        list.appendChild(li);
        input.value = "";
        console.log(array);
        for (i = 0; i < array.length; i++) {
            array = txt;
            array.unshift;
        }
    }
});