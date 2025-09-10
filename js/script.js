// Dicionário de soluções baseadas em palavras-chave
const solucoes = {
    "wifi": [
        "Verifique se o roteador está ligado.",
        "Reinicie o modem e o roteador.",
        "Confira se o cabo de rede está conectado corretamente.",
        "Esqueça a rede Wi-Fi no seu dispositivo e conecte novamente."
    ],
    "impressora": [
        "Verifique se a impressora está ligada.",
        "Confira se há papel na bandeja.",
        "Veja se o cabo USB ou rede está conectado.",
        "Reinstale o driver da impressora."
    ],
    "email": [
        "Verifique sua conexão com a internet.",
        "Confirme se seu usuário e senha estão corretos.",
        "Cheque se a caixa de entrada não está cheia.",
        "Tente acessar o e-mail em outro navegador."
    ]
};

// Função para buscar soluções
function buscarSolucoes(titulo) {
    titulo = titulo.toLowerCase();
    let sugestoes = [];

    for (let palavra in solucoes) {
        if (titulo.includes(palavra)) {
            sugestoes = solucoes[palavra];
            break;
        }
    }

    return sugestoes;
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    const btnBuscar = document.getElementById("btnBuscar");
    const resultadoDiv = document.getElementById("resultado");

    btnBuscar.addEventListener("click", () => {
        const titulo = document.getElementById("tituloProblema").value;
        resultadoDiv.innerHTML = "";

        const sugestoes = buscarSolucoes(titulo);

        if (sugestoes.length > 0) {
            let lista = "<ul class='list-disc pl-5 mb-4'>";
            sugestoes.forEach(s => lista += `<li>${s}</li>`);
            lista += "</ul>";

            resultadoDiv.innerHTML = `
                <p class="mb-2">Tente as seguintes soluções:</p>
                ${lista}
                <div class="flex gap-4">
                    <button id="btnResolveu" class="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700">Resolvido</button>
                    <button id="btnNaoResolveu" class="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700">Abrir Chamado</button>
                </div>
            `;

            // Se resolveu
            document.getElementById("btnResolveu").addEventListener("click", () => {
                resultadoDiv.innerHTML = `<p class="text-green-400">Ótimo! Problema resolvido ✅</p>`;
            });

            // Se não resolveu → redireciona
            document.getElementById("btnNaoResolveu").addEventListener("click", () => {
                window.location.href = "abertura_chamado.html";
            });

        } else {
            resultadoDiv.innerHTML = `
                <p class="text-yellow-400">Não encontramos soluções automáticas. <br> Deseja abrir um chamado?</p>
                <button onclick="window.location.href='abertura_chamado.html'" 
                        class="mt-3 bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700">Abrir Chamado</button>
            `;
        }
    });
});
