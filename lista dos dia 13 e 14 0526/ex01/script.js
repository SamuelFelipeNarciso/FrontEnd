function valcpf() {
    const inputCPF = document.getElementById("vali").value;
    const msg = document.getElementById("resultado");
    const cpf = inputCPF.replace(/\D/g, '');

    // Função auxiliar para exibir a mensagem e a cor
    function mostrarMensagem(texto, cor) {
        msg.innerText = texto;
        msg.style.color = cor;
        msg.style.fontWeight = "bold";
        msg.style.marginTop = "15px";
    }

    // Validação de formato e repetidos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        mostrarMensagem("Erro: CPF invalido!", "red");
        return;
    }

    // Cálculo do 1º Dígito
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    let digito1 = (resto === 10 || resto === 11) ? 0 : resto;

    if (digito1 !== parseInt(cpf.charAt(9))) {
        mostrarMensagem("Erro: CPF invalido!", "red");
        return;
    }

    // Cálculo do 2º Dígito
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    let digito2 = (resto === 10 || resto === 11) ? 0 : resto;

    if (digito2 !== parseInt(cpf.charAt(10))) {
        mostrarMensagem("Erro: CPF invalido!", "red");
        return;
    }

    // Sucesso
    mostrarMensagem("Sucesso: CPF Valido!", "green");
}