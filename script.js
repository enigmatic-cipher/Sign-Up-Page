submit.addEventListener("click", submitHandler);

function submitHandler(e) {

    e.preventDefault();
    let { innerText } = e.target;
    if (innerText !== "Registered") {
        e.target.innerText = "Registered"
    } else {
        e.target.innerText = "Register Now"
    }
}



