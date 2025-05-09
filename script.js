const links = document.querySelectorAll('.menu-link');

function ativarLinkAtual() {
  links.forEach(link => link.classList.remove('ativo'));

  const hash = window.location.hash || '#inicio'; 
  const linkAtivo = document.querySelector(`.menu-link[href="${hash}"]`);

  if (linkAtivo) {
    linkAtivo.classList.add('ativo');
  }
}

ativarLinkAtual();

window.addEventListener('hashchange', ativarLinkAtual);

///////////////////////////////////////////////////////////////////////////////
window.addEventListener('scroll', function() {
    let header = document.querySelector('#cabecalho')
    header.classList.toggle('rolagem', window.scrollY > 0)
});


///////////////////////////////////////////////////////////////////////////////////

async function buscarHorarios() {
  const bairro = document.getElementById("bairro").value.trim();
  const resultado = document.getElementById("resultado");

  try {
    const res = await axios.get(`http://localhost:5000/bairros/${bairro}`);
    const dados = res.data;

    resultado.innerHTML = `
      <p><strong>Dias da Coleta:</strong> ${dados.diascoleta}</p>
      <p><strong>Turno:</strong> ${dados.turnocoleta}</p>
    `;
  } catch (err) {
    resultado.innerHTML = "<p>Bairro não encontrado.</p>";
  }
}