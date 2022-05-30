import { ContainerDentro, ContainerGeral, ContainerImagens, ContainerTexto, ConteudoTextoHome, Foot, Titulo } from "../../components/Geral";
import Navbar from "../../components/Navbar";

const Contato = () =>{
    return (
        <ContainerGeral>
        <Navbar />
        <ContainerDentro>
        <ContainerTexto>
          <Titulo>Contato</Titulo>
          <ConteudoTextoHome>

        </ConteudoTextoHome>
          </ContainerTexto>
          <ContainerImagens>
        <img src="src/imgs/logoFotoTexto.png" style={{width: "129%", marginLeft: "75%", marginTop: "10%"}}/>
        </ContainerImagens>

        </ContainerDentro>

        <Foot>
          Contato
        </Foot>
        </ContainerGeral>
      
         
        
      
    );
  }
  export default Contato; 