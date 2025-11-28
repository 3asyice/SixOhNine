function calcularIdade(dn) {
    const hoje = new Date();
    const nascimento = new Date(dn);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}

function atualizarIdadeSemId() {
    // 1. Pega todos os <p> do documento
    const ps = document.querySelectorAll("p");

    let pNascimentoLabel = null;

    // 2. Encontra qual <p> tem o texto "Data de Nascimento"
    ps.forEach(p => {
        if (p.textContent.trim() === "Data de Nascimento") {
            pNascimentoLabel = p;
        }
    });

    // Se não achou, para
    if (!pNascimentoLabel) return;

    // 3. O valor da data é o próximo <p> irmão
    const pNascimentoValor = pNascimentoLabel.nextElementSibling;

    // Converte "17-12-1982" -> "1982-12-17"
    const texto = pNascimentoValor.textContent.trim();
    const [dia, mes, ano] = texto.split("-");
    const dataFormatada = `${ano}-${mes}-${dia}`;

    // 4. Calcula idade
    const idade = calcularIdade(dataFormatada);

    // 5. Agora acha o <p> que tem o texto "Idade"
    let pIdadeLabel = null;
    ps.forEach(p => {
        if (p.textContent.trim() === "Idade") {
            pIdadeLabel = p;
        }
    });

    if (!pIdadeLabel) return;

    // 6. O valor da idade é o próximo <p> irmão
    const pIdadeValor = pIdadeLabel.nextElementSibling;

    // 7. Escreve a idade automaticamente
    pIdadeValor.textContent = idade;
}

// Atualiza ao carregar
atualizarIdadeSemId();

// Atualiza a cada dia (se a página ficar aberta)
setInterval(atualizarIdadeSemId, 24 * 60 * 60 * 1000);
function calcularIdade(dn) {
    const hoje = new Date();
    const nascimento = new Date(dn);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}

function atualizarIdadeSemId() {
    // 1. Pega todos os <p> do documento
    const ps = document.querySelectorAll("p");

    let pNascimentoLabel = null;

    // 2. Encontra qual <p> tem o texto "Data de Nascimento"
    ps.forEach(p => {
        if (p.textContent.trim() === "Data de Nascimento") {
            pNascimentoLabel = p;
        }
    });

    // Se não achou, para
    if (!pNascimentoLabel) return;

    // 3. O valor da data é o próximo <p> irmão
    const pNascimentoValor = pNascimentoLabel.nextElementSibling;

    // Converte "17-12-1982" -> "1982-12-17"
    const texto = pNascimentoValor.textContent.trim();
    const [dia, mes, ano] = texto.split("-");
    const dataFormatada = `${ano}-${mes}-${dia}`;

    // 4. Calcula idade
    const idade = calcularIdade(dataFormatada);

    // 5. Agora acha o <p> que tem o texto "Idade"
    let pIdadeLabel = null;
    ps.forEach(p => {
        if (p.textContent.trim() === "Idade") {
            pIdadeLabel = p;
        }
    });

    if (!pIdadeLabel) return;

    // 6. O valor da idade é o próximo <p> irmão
    const pIdadeValor = pIdadeLabel.nextElementSibling;

    // 7. Escreve a idade automaticamente
    pIdadeValor.textContent = idade;
}

// Atualiza ao carregar
atualizarIdadeSemId();

// Atualiza a cada dia (se a página ficar aberta)
setInterval(atualizarIdadeSemId, 24 * 60 * 60 * 1000);
