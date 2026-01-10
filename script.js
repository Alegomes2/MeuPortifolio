

function enviarWhats(event) {
    event.preventDefault(); // ✅ Corrigido: faltavam os parênteses

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const telefone = '5527995828244'; // Seu número com DDI + DDD

    if (!nome || !mensagem) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const mensagemFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;

    // Abre o WhatsApp em nova aba
    window.open(url, '_blank');
}
