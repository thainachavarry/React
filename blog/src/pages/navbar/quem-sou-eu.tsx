import { Link, NavLink } from "react-router-dom";
import { BotaoContato, ContainerCentroBotao, ContainerDentro, ContainerGeral, ContainerImagens, ContainerTexto, ConteudoTextoHome, Foot, Titulo } from "../../components/Geral";
import Navbar from "../../components/Navbar";



const QuemSouEu = () =>{
    return (
      <><ContainerGeral>
        <Navbar />
        <ContainerDentro>
          <ContainerTexto>
            <Titulo>Um pouco sobre mim...</Titulo>
            <ConteudoTextoHome>Olá, eu sou a Janaina Victor, tenho 45 anos de idade e sou apaixonada por pedagogia e sou professora da secretaria de educação do Ditrito Federal há 17 anos.
              Sou formada em Pedagogia e tenho pós-graduação em Neuropsicopedagogia Clínica e estou me aperfeiçoando ainda mais em outros cursos de capacitação.
            </ConteudoTextoHome>
            <ConteudoTextoHome> Meu objetivo é ajudar ainda mais as pessoas, por isso decidi começar meus atendimentos com crianças que sofrem com algum tipo de dificuldade ou transtornos de aprendizagem.
            </ConteudoTextoHome>
            <ConteudoTextoHome> Comigo, você conseguirá conhecer novos caminhos para desenvolver um aprendizado significativo, solucionando suas dificuldades cognitivas apresentadas.
            </ConteudoTextoHome>
            <ContainerCentroBotao>
              <NavLink to='/contato'>
                <BotaoContato>
                  Entre em contato!
                </BotaoContato>
              </NavLink>
            </ContainerCentroBotao>
          </ContainerTexto>

          <ContainerImagens>
            <img src="src/imgs/Janaina.jpeg" style={{ width: "100%", height: "58%", marginTop: "20%", borderRadius: "11px" }} />
            <img src="src/imgs/DesenhoCriancas.jpg" style={{ width: "105%", marginTop: "17%", borderRadius: "11px" }} />
          </ContainerImagens>

          <ContainerImagens>
            <img src="src/imgs/logoFotoTexto.png" style={{ width: "98%", marginLeft: "18%", marginTop: "10%" }} />
            <img src="src/imgs/Criancas.jpg" style={{ width: "95%", marginLeft: "18%", marginTop: "10%", borderRadius: "11px" }} />
          </ContainerImagens>


        </ContainerDentro>
      </ContainerGeral>
      
        <Foot>
        <a target="_blank" href="https://wa.me/5561999843235" style={{color: "white", marginRight: "1%"}}><BotaoContato>Whatsapp</BotaoContato></a>
        <a target="_blank" href="https://www.instagram.com/janavpedagoga/" style={{color: "white"}}><BotaoContato>Instagram</BotaoContato></a>
        </Foot></>
      

    );
  }
  export default QuemSouEu;