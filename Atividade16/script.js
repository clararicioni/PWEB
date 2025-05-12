function abrirCurso() {
    const select = document.getElementById("cursoSelect");
    const valor = select.value;

    if (!valor) return;

    const confirmacao = confirm("Deseja realmente abrir informações sobre este curso?");
    if (!confirmacao) return;

    let conteudo = "";
    switch (valor) {
        case "ads":
            conteudo = "<h2>ADS</h2><p>Curso voltado ao desenvolvimento de software, banco de dados e lógica de programação.</p>";
            break;
        case "logistica":
            conteudo = "<h2>Logística</h2><p>Curso focado na gestão de cadeias de suprimento e distribuição de produtos.</p>";
            break;
        case "fabmec":
            conteudo = "<h2>Fabricação Mecânica</h2><p>O egresso do CST em Fabricação Mecânica poderá atuar no projeto e na supervisão de sistemas de operações mecânicas, voltados a processos de fabricação. Domina o funcionamento, as características e a manutenção de máquinas operatrizes, máquinas-ferramenta, ferramentas e dispositivos em geral, podendo administrar todo um processo de produção mecânica.</p>";
            break;
        case "eletronica":
            conteudo = "<h2>Eletrônica Automotiva</h2><p>O tecnólogo em Eletrônica Automotiva: participa de equipes de desenvolvimento de novos produtos, novas tecnologias e subsistemas na área automotiva; supervisiona, coordena e orienta equipes na área automotiva; realiza a padronização, mensuração e controle de qualidade nas áreas automotivas de veículos especiais, carga e passeio; especifica instrumentos e equipamentos para teste de veículos; oferece assistência, assessoria e consultoria referentes a instrumentos e equipamentos usados em testes de veículos de especiais, carga e passeio</p>";
            break;
        case "gq" :
            conteudo = "<h2>Gestão da Qualidade</h2><p>O Tecnólogo em Gestão da Qualidade será um profissional que planeja, implementa e audita sistemas de gestão da qualidade. Realiza mapeamento de processos organizacionais segundo indicadores de qualidade e produtividade.</p>";
            break;
        case "manufatura" :
            conteudo = "<h2>Manufatura Avançada</h2><p>O aluno aprenderá a transformar ambientes de manufatura convencional em ambientes mais tecnológicos. Estruturado por blocos temáticos direcionados a projetos, o conteúdo do curso é dividido em processos de manufatura, eletrônica e automação e áreas multidisciplinares.</p>";
            break;
        case "aeronaves" :
            conteudo = "<h2>Manutenção de Aeronaves</h2><p>A estrutura das aeronaves e de seus sistemas e componentes – aviões de transporte de passageiros, aviões executivos, helicópteros – e as características dos materiais utilizados na fabricação; o funcionamento e a manutenção dos sistemas hidráulicos, de trens de pouso, de ar condicionado e dos propulsores, além dos processos de reparos estruturais e soldagem.</p>";
            break;
        case "polimeros" :
            conteudo = "<h2>Polímeros</h2><p>Esse profissional trabalha na fabricação dos Polímeros, compostos químicos utilizados na fabricação de produtos como o plástico, por exemplo. Avalia o desempenho de equipamentos e processos, interpreta fluxogramas de processos, aplica formulação química de polímeros, tintas e vernizes e desenvolve métodos de análises laboratoriais para caracterização dos materiais poliméricos, além de processos de modelagem.</p>"
            break;
        case "procmetal" :
            conteudo = "<h2>Processos Metalúrgicos</h2><p>O tecnólogo em Processos Metalúrgicos utiliza os fenômenos envolvidos em processos como: tratamentos térmicos, fundição, siderurgia, laminação, forjamento de metais, sinterização e tratamentos de superfície.</p>";
            break;
        case "projmecan" :
            conteudo = "<h2>Projetos Mecânicos</h2><p>O tecnólogo em Projetos Mecânicos está habilitado a realizar projetos, com detalhamento técnico de sistemas mecânicos que envolvam máquinas, motores, instalações mecânicas e termo-mecânicas. Tem conhecimento de todos os materiais usuais em construção mecânica e suas aplicações práticas.</p>";
            break;
        case "sbio" :
            conteudo = "<h2>Sistemas Biomédicos</h2><p>O tecnólogo em Sistemas Biomédicos é responsável por planejar, gerenciar, implantar e manter equipamentos clínicos e médico-hospitalares. Supervisiona e coordena equipes de manutenção e otimização do uso de equipamentos eletromédicos. Assessora a aquisição, executa a instalação, capacita usuários de equipamentos e sistemas biomédicos, além de participar de equipes de pesquisa aplicada.</p>";
    }


    const novaJanela = window.open("", "_blank", "width=600,height=300");
    novaJanela.document.write(`
        <html>
        <head><title>Informações do Curso</title></head>
        <body>${conteudo}</body>
        </html>
    `);
}