function pesquisar() {
  const section = document.getElementById("resultados-pesquisa");
  const campoPesquisa = document
    .getElementById("input-pesquisa")
    .value.toLowerCase(); // Obtém o valor da pesquisa e converte para minúsculas

  if (campoPesquisa == "" || " ") {
    section.innerHTML = "<h3>Nada Foi Encontrado :(</h3>";
    return;
  }

  let resultados = "";
  // Itera sobre cada dado e filtra os resultados
  for (let dado of dados) {
    if (
      dado.titulo.toLowerCase().startsWith(campoPesquisa) ||
      dado.descricao.toLowerCase().includes(campoPesquisa) ||
      dado.tags.toLowerCase().includes(campoPesquisa)
    ) {
      resultados += `
          <div class="item-resultado">
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
          </div>
        `;
    }
  }
  if(!resultados){
    resultados = '<p>Nada foi encontrado</p>';
  }

  section.innerHTML = resultados;
}
