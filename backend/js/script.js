
let openMenu = document.getElementById("navbar-links");
let closeButton = document.getElementById("close");
let link = document.querySelectorAll("#link");

function openBtn() {
    openMenu.style.height = '75vh';
    setTimeout(() => {
        closeButton.style.display = 'block';
    }, 800);
}

function closeBtn() {
    closeButton.style.display = 'none';
    openMenu.style.height = '';
}

link.forEach(li => {
    li.addEventListener("click", () => {
        closeBtn();
    });
    li.addEventListener('click', () => {
        li.classList.add(".active");
    });
});

/* document.getElementById('main-content').addEventListener('mouseover', (e) => {
    e.preventDefault();
    setTimeout(() => {
        closeBtn();
    }, 1000);
}); */

function chooseColor() {
    alert("Choose Your Color Wisely ! 😂");
    let chooseColor = prompt("Choose a color");
    let chooseSecondaryColor = prompt("Choose a color for second");
    document.documentElement.style.setProperty('--body-color', `${chooseColor}`);
    document.documentElement.style.setProperty('--navbar-bg-color', `${chooseSecondaryColor}`);
}


function scrollReveal() {
    const items = document.querySelectorAll(".hide");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("hide");
            } else {
                entry.target.classList.add("hide");
            }
        })
    });

    items.forEach((item) => observer.observe(item));
}

scrollReveal();

function clearForm(event) {
    event.preventDefault(); // Prevent default form submission behavior

    let form = event.target;

    // Send the form data using fetch
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            form.reset(); // Clear form after successful submission
        } else {
            alert("Oops! Something went wrong.");
        }
    }).catch(error => {
        alert("Error sending message. Please try again.");
    });
}
