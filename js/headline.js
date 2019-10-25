const form = document.querySelector('.form');
const reg = document.querySelector('.reg');
const auth = document.querySelector('.auth');

reg.addEventListener('click', function(e){
  turn();
});

auth.addEventListener('click', function(e){
  turn();
});

function turn() {
  auth.classList.toggle('headline--active');
  form.classList.toggle('headline-auth');
  reg.classList.toggle('headline--active');
  form.classList.toggle('headline-reg');
};