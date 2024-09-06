function pesquisar() {
    const section = document.getElementById("resultados-pesquisa");
    const input = document.getElementById("input-pesquisa").value.toLowerCase(); // Obtém o valor da pesquisa e converte para minúsculas
  
    let resultados = "";
  
    // Itera sobre cada dado e filtra os resultados
    for (let dado of dados) {
      if (dado.titulo.toLowerCase().includes(input)) {
        resultados += `
          <div class="item-resultado">
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
          </div>
        `;
      }
    }
  
    section.innerHTML = resultados;
  }