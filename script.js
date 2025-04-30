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

// Ativa ao mudar de seção
window.addEventListener('hashchange', ativarLinkAtual);

///////////////////////////////////////////////////////////////////////////////
window.addEventListener('scroll', function() {
    let header = document.querySelector('#cabecalho')
    header.classList.toggle('rolagem', window.scrollY > 0)
});
