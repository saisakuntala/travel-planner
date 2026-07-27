let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=> {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
let selectedPackage = '';

function selectPackage(packageName, price) {
    selectedPackage = packageName;
    document.getElementById('package').value = packageName + ' - $' + price;
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const travelDate = document.getElementById('date').value;

    const confirmationMessage = `Thank you ${name}! Your booking for ${selectedPackage} on ${travelDate} has been confirmed. A confirmation email has been sent to ${email}.`;
    document.getElementById('confirmation-message').innerText = confirmationMessage;
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('form').reset();
    document.getElementById('package').value = '';
}
