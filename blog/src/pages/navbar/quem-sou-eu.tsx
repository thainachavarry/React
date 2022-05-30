import { ContainerGeral, Titulo } from "../../components/Geral";
import Navbar from "../../components/Navbar";



const QuemSouEu = () =>{
    return (
      <ContainerGeral>
        <Navbar />
        <div style={{display: "inline-flex"}}>
        <div>
        <Titulo>Um pouco sobre mim...</Titulo>
        <p style={{width: "67%", fontSize: "120%"}}>Apaixonada pela minha primeira formação, pedagogia e atuando professora da rede pública
          do Ditrito Federal, me especializei em Psicopedagogia, para aprofundar ainda mais meus conhecimentos.
        </p>
        </div>
        <div style={{display: "inline-flex"}}>
        <img src="src/imgs/logoFotoTexto.png"/>
        </div>
        </div>
        </ContainerGeral>
    );
  }
  export default QuemSouEu;