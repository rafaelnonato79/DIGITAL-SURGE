
    class Equipe extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});

        //criar div de equipe
        const equipe = document.createElement('div');
        equipe.classList.add('equipe');

        //linha de foto e nome
        const cabecalho = document.createElement('div');
        cabecalho.classList.add('cabecalho');

        const foto = document.createElement('img');
        foto.src = this.getAttribute('src');

        const informacoes = document.createElement('div');
        informacoes.classList.add('informacoes');

        const nomeIntegrante = document.createElement('h4');
        nomeIntegrante.textContent = this.getAttribute('nome');

        const cargo = document.createElement('span');
        cargo.textContent = this.getAttribute('cargo');

        const icone = document.createElement('img');
        icone.src = this.getAttribute('icone');

        informacoes.appendChild(nomeIntegrante);
        informacoes.appendChild(cargo);
        informacoes.appendChild(icone);

        cabecalho.appendChild(foto);
        cabecalho.appendChild(informacoes);

        const descricaoIntegrante = document.createElement('p');
        descricaoIntegrante.textContent = this.getAttribute('descricao');

        equipe.appendChild(cabecalho);
        equipe.appendChild(descricaoIntegrante);


        const style = document.createElement('style');
        style.textContent = `
            .equipe{
                width: 410px;
                height: 340px;
                background-color: #F2F2F2;
                display: flex;
                flex-direction: column;
                align-items: start;
                margin-top: 40px;
                padding: 40px 0 40px 40px;
            }

            .cabecalho{
                display: flex;
                flex-direction: row;
                align-items: start;
            }
            
            .cabecalho img{
                width: 70px;
                height: 70px;
                border-radius: 50%;
                margin: 10px;
            }
            
            .informacoes{
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: center;
            }
            .informacoes h4{
                font-family: 'Poppins', sans-serif;
                font-size: 24px;
                line-height: 24px;
                color: #333333;
                margin: 5px 0;
            }

            .informacoes span{
                font-family: 'Lato', sans-serif;
                font-size: 12px;
                line-height: 16px;
                color: #C4C4C4;
            }

            
            .informacoes img{
            width: 17.55px;
            height: 18.6px;
            margin:0px;
            }

            .informacoes::after{
                content: '';
                width: 4px;
                height: 10px;
                position: relative;
                top: -80px;
                left: 280px;
                background-color: #FF5733;
                margin-left: 20px;
            }
            
            .equipe p{
                font-family: 'Lato', sans-serif;
                width: 370px;
                font-size: 18px;
                line-height: 32px;
                color: #666666;
                font-weight: 500;
                margin-top: 20px;
                text-align: start;
                
            }


            @media (max-width: 1600px) {
                .equipe{
                    width: 380px;
                    padding: 40px 20px;
                }
                .cabecalho img{
                    width: 50px;
                    height: 50px;
                }
                .informacoes h4{
                    font-size: 20px;
                }
                .informacoes span{
                    font-size: 10px;
                }
                .informacoes img{
                    width: 15px;
                    height: 15px;
                }
                .informacoes::after{
                    width: 3px;
                    height: 8px;
                    top: -60px;
                    left: 200px;
                }
                .equipe p{
                    font-size: 16px;
                    line-height: 28px;
                    width: 100%;
                }
            }
            
            @media (max-width: 1350px) {
                .equipe{
                        width: 350px;
                        padding: 40px 20px;
                    }

            @media (max-width: 540px) {
                .equipe{
                    width:326px;
                    height:303px;
                    padding: 28px;
                    margin-top: 0px;
                    box-sizing: border-box;
                }
                .informacoes{
                    height: 50px;
                    margin-top: 10px;
                }
                .cabecalho img{
                    width: 50px;
                    height: 50px;
                    margin: 10px;
                }
                .informacoes h4{
                    font-size: 14px;
                    line-height: 14px;
                    margin:0;
                }
                .informacoes span{
                    font-size: 10px;
                    font-weight: 600;   
                    margin-top: 2px;  
                }
                .informacoes img{
                    width: 11.27px;
                    height: 12px;
                    margin-top: 2px;
                }

                .informacoes::after{
                    left: 190px;
                }
                .equipe p{
                    width: 280px;
                    font-size: 14px;
                    font-weight: 500;
                    margin-top: 16px;   
                    line-height: 24px;
                    text-align: left;
                    margin-botton:33px;

                }
            

            }
            `;

        shadow.appendChild(style);
        shadow.appendChild(equipe);
    }
}

customElements.define('equipe-component', Equipe);
