import { BotaoContato, ContainerDentro, ContainerGeral, ContainerImagens, ContainerTexto, ConteudoTextoHome, Foot, Titulo } from "../../components/Geral";
import Navbar from "../../components/Navbar";

const Contato = () =>{
    return (
        <><ContainerGeral>
        <Navbar />
        <ContainerDentro>
          <ContainerTexto>
            <Titulo>Contato</Titulo>
            <ConteudoTextoHome>
              Para agendamentos de consulta: <br></br>
              <a target="_blank" href="https://wa.me/5561999843235" style={{color: "white", marginRight: "1%", marginBottom: "5%"}}><BotaoContato>(61) 99984-3235 </BotaoContato></a> <br></br>
              Caso prefira, também pode enviar um e-mail: <br></br>
              <a target="_blank" href="mailto:jsvc76@gmail.com" style={{color: "white"}}><BotaoContato>jsvc76@gmail.com</BotaoContato></a> <br></br>
              Me siga nas redes sociais! <br></br>
              <a target="_blank" href="https://www.instagram.com/janavpedagoga/" style={{color: "white"}}><BotaoContato>@janavpedagoga</BotaoContato></a>

            </ConteudoTextoHome>
          </ContainerTexto>

          <ContainerImagens>
            <img src="src/imgs/logoFotoTexto.png" style={{ width: "284%", marginLeft: "75%", marginTop: "10%" }} />
          </ContainerImagens>
        </ContainerDentro>

      </ContainerGeral>

      <Foot>
        <a target="_blank" href="https://wa.me/5561999843235" style={{color: "white", marginRight: "1%"}}><BotaoContato>Whatsapp</BotaoContato></a>
        <a target="_blank" href="https://www.instagram.com/janavpedagoga/" style={{color: "white"}}><BotaoContato>Instagram</BotaoContato></a>
      </Foot></>

        
      
    );
  }
  export default Contato; 