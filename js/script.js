// 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("actives");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// var open = document.getElementById("openBtn")
// var close = document.getElementById("closeBtn")

function showMenu() {
    document.getElementById('sidebar').classList.add('open');
    document.querySelector('.overlay-menu').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideMenu() {
    document.getElementById('sidebar').classList.remove('open');
    document.querySelector('.overlay-menu').style.display = 'none';
    document.body.style.overflow = 'auto';
}



// // increment-number 

const counterContainers = document.querySelectorAll('.counter-container');
counterContainers.forEach((container) => {
    const counter = container.querySelector('.counter');
    const dataCeil = parseInt(container.getAttribute('data-ceil'));
    container.addEventListener('mouseenter', () => {
        incrementCounter(counter, dataCeil);
    });

    container.addEventListener('mouseleave', () => {
        // Stop incrementing when leaving the container
        counter.innerText = currentNum; // Reset the counter's value
    });
});

let currentNum = 0; // Initialize the counter outside the event listeners

function incrementCounter(counterElement, dataCeil) {
    if (currentNum < dataCeil) {
        currentNum++;
        counterElement.innerText = currentNum;
        setTimeout(() => incrementCounter(counterElement, dataCeil), 30);
    }
}