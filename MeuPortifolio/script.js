const alternarTemaBtn = document.getElementById('MudarTema');
const body = document.body;
alternarTemaBtn.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
  });