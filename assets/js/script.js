var btn_nav=document.getElementById('btn-nav');
btn_nav.addEventListener('click', function() {
    document.querySelector('.cover').classList.toggle('active-cover');
    document.querySelector('.nav-mobile').classList.toggle('active');
});
var cover=document.querySelector('.cover');
cover.addEventListener('click', function() {
    document.querySelector('.cover').classList.toggle('active-cover');
    document.querySelector('.nav-mobile').classList.toggle('active');
});