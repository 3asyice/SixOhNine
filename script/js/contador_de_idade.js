function calcularIdade(dn) {
    const hoje = new Date();
    const nascimento = new Date(dn);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    // Ainda não fez aniversário este ano?
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}

function atualizarIdade() {
    // Lê a data de nascimento que está no HTML
    const texto = document.getElementById("nascimentoTexto").innerText.trim();

    // Converte "17-12-1982" -> "1982-12-17" (formato que o JS entende)
    const [dia, mes, ano] = texto.split("-");
    const dataFormatada = `${ano}-${mes}-${dia}`;

    const idade = calcularIdade(dataFormatada);

    document.getElementById("idadeAuto").innerText = idade;
}

// Atualiza agora
atualizarIdade();

// Atualiza 1x por dia (caso deixe a página aberta)
setInterval(atualizarIdade, 24 * 60 * 60 * 1000);
