document.addEventListener("DOMContentLoaded", function () {
    // Lista de objetos contendo nome e número da sala
    var listaDePacientes = [
        { nome: "João Silva", sala: 101 },
        { nome: "Maria Oliveira", sala: 102 },
        { nome: "Carlos Santos", sala: 103 },
        { nome: "Ana Souza", sala: 104 }
    ];

    // Função para exibir o próximo paciente da lista
    function chamarProximoPaciente() {
        if (listaDePacientes.length > 0) {
            var proximoPaciente = listaDePacientes.shift(); // Remove o primeiro paciente da lista
            exibirInfoPaciente(proximoPaciente);
        } else {
            exibirInfoPaciente({ nome: "Aguardando chamada...", sala: "" }); // Mensagem padrão quando a lista estiver vazia
        }
    }

    // Função para exibir as informações do paciente na tela
    function exibirInfoPaciente(paciente) {
        var infoPacienteElemento = document.getElementById("infoPaciente");
        infoPacienteElemento.innerHTML = `<p>Nome: ${paciente.nome}</p><p>Sala: ${paciente.sala}</p>`;

        // Limpa as informações após alguns segundos (tempo de exibição)
        setTimeout(function () {
            infoPacienteElemento.innerHTML = "<p>Aguardando chamada...</p>";
        }, 5000); // 5000 milissegundos = 5 segundos
    }

    // Chama o próximo paciente quando a página é carregada
    chamarProximoPaciente();

    // Intervalo para chamar automaticamente o próximo paciente a cada 10 segundos (pode ser ajustado)
    setInterval(chamarProximoPaciente, 10000); // 10000 milissegundos = 10 segundos
});
