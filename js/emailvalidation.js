const form = document.querySelector("form");
const email = document.querySelector("#email");
const button =  document.querySelector(".button");
const error = document.querySelector("#error");
const tulisanerror = document.querySelector("#tulisan-error")


button.addEventListener("click", e => {
    e.preventDefault;
    console.log(email.value);
    if(validateEmail(email.value) === false){
        email.style.border = "2px solid red";
        error.classList.add("error");
        tulisanerror.classList.add("tulisan-error")
        tulisanerror.style.display = "block"
    }
    else {
        email.style.border = null;
        error.classList.remove("error")
        tulisanerror.classList.remove("tulisan-error")
        tulisanerror.style.display = "none"
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}