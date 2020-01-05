function closeDown () {
    document.querySelector('.bigCards')
        .style.display = "none";
    document.querySelector('#basePrice')
        .style.display = "none";
    document.querySelector('#proPrice')
        .style.display = "none";
    document.querySelector('#betaProg')
        .style.display = "none";
    document.querySelector('#faq')
        .style.display = "none";
    document.querySelector('#support')
        .style.display = "none";
    document.querySelector('#contactUs')
        .style.display = "none";
}

window.onclick = function(event) {
    if (event.target.className  === ".closeBtn") closeDown
};

document.querySelector('.bigCards')
    .addEventListener('click', closeDown);

document.querySelector('.basePrice')
    .addEventListener('click', function () {
        document.querySelector('.bigCards')
        .style.display = "flex";
        document.querySelector('#basePrice')
        .style.display = "block";
});

document.querySelector('.proPrice')
    .addEventListener('click', function () {
        document.querySelector('.bigCards')
        .style.display = "flex";
        document.querySelector('#proPrice')
        .style.display = "block";
});

document.querySelector('.betaProg')
    .addEventListener('click', function () {
        document.querySelector('.bigCards')
        .style.display = "flex";
        document.querySelector('#betaProg')
        .style.display = "block";
});

document.querySelector('.faq')
    .addEventListener('click', function () {
        document.querySelector('.bigCards')
        .style.display = "flex";
        document.querySelector('#faq')
        .style.display = "block";
});

document.querySelector('.support')
    .addEventListener('click', function () {
        document.querySelector('.bigCards')
        .style.display = "flex";
        document.querySelector('#support')
        .style.display = "block";
});

document.querySelector('.contactUs')
    .addEventListener('click', function () {
        document.querySelector('.bigCards')
        .style.display = "flex";
        document.querySelector('#contactUs')
        .style.display = "block";
});

