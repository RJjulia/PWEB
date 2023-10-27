function validar() {
    var nome = document.forms.formulario.nome.value;
    var email = document.forms.formulario.email.value;
    var comentario = document.forms.formulario.comentario.value;
    var pesquisa = document.querySelector('input[name="radios"]:checked');

    if (nome.length < 10) {
        alert("O nome deve ter mais de 10 caracteres");
        return false;
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert("Email inválido.");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    if (!pesquisa) {
        alert("A pesquisa é obrigatória.");
        return false;
    }

    if (pesquisa.id === "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre a esta página!");
    }

    return true;
}

function limpar() {
    document.forms.formulario.reset();
    var radioButtons = document.querySelectorAll('input[name="radios"]');
    radioButtons.forEach(function(radio) {
        radio.checked = false;
    });
}