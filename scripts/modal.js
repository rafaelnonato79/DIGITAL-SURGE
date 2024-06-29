document.addEventListener('DOMContentLoaded', () => {
    const servicos = document.querySelectorAll('.card-servico');
    const modalContainer = document.querySelector('.modal-container');
    const modalContent = document.querySelector('.modal p');
    const modalFechar = document.querySelector('.modal [data-modal="fechar"]');
    
    const conteudosModal = {
        'gestao-midia': 'Nosso serviço de Gestão de Mídias Sociais na Digital Surge é projetado para maximizar sua presença online, engajar seu público e promover sua marca de maneira eficaz. Com estratégias personalizadas e conteúdo atraente, ajudamos a aumentar o alcance e a interação nas suas plataformas sociais. Para saber mais sobre como podemos transformar suas mídias sociais, inscreva-se no formulário e receba nosso material exclusivo diretamente no seu e-mail cadastrado.',
        'seo': 'Nosso serviço de SEO (Otimização para Motores de Busca) é voltado para melhorar significativamente a visibilidade do seu site nos resultados de pesquisa, atraindo mais tráfego orgânico e qualificando leads. Com técnicas avançadas de SEO, como otimização de palavras-chave, melhorias técnicas e estratégias de link building, garantimos que seu site esteja sempre bem posicionado. Para descobrir como podemos impulsionar seu ranking nos motores de busca, inscreva-se no formulário e receba nosso material no e-mail cadastrado.',
        'marketing-conteudo': 'Nosso serviço de Marketing de Conteúdo é projetado para criar e distribuir conteúdo relevante e valioso que atraia e engaje seu público-alvo, promovendo a sua marca e impulsionando conversões. Desenvolvemos estratégias de conteúdo personalizadas que incluem blogs, artigos, infográficos e muito mais, tudo alinhado aos interesses e necessidades do seu mercado. Para saber como podemos transformar sua estratégia de conteúdo, inscreva-se no formulário e receba nosso material exclusivo diretamente no e-mail cadastrado.',
        'publicidade-online': 'O serviço de Publicidade Online na Digital Surge, especializado em Google Ads e Facebook Ads, é projetado para aumentar sua visibilidade e gerar leads qualificados de maneira eficaz. Com campanhas personalizadas que alcançam o público-alvo com precisão, otimizando continuamente para garantir o melhor retorno. Para descobrir como nossa expertise em publicidade online pode impulsionar seu negócio, inscreva-se no formulário e receba nosso material exclusivo diretamente no seu e-mail cadastrado.'
    };

    servicos.forEach(servico => {
        servico.addEventListener('click', () => {
            const tipoServico = servico.getAttribute('data-servico');
            modalContent.textContent = conteudosModal[tipoServico];
            modalContainer.style.display = 'flex';
        });
    });

    modalFechar.addEventListener('click', () => {
        modalContainer.style.display = 'none';
    });

    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });
});
