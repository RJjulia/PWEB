
function abrirJanela() {
    var select = document.getElementById("cursos");
    var cursoSelecionado = select.options[select.selectedIndex].text;
    var confirmacao = confirm("Deseja abrir a janela com o curso: " + cursoSelecionado + "?");

    if (confirmacao) {
        var url;
        if (select.value === "1") {
            url = "http://fatecsorocaba.edu.br/curso_ads.asp";
        } else if (select.value === "2") {
            url = "http://fatecsorocaba.edu.br/curso_ea.asp";
        } else if (select.value === "3") {
            url = "http://fatecsorocaba.edu.br/curso_fm.asp";
        }

        if (url) {
            var janela = window.open(url, "_blank", "width=600,height=300");
        }
    }
}
