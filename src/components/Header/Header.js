import menu from "../../assets/Group 3847.png";
import { BotaoNavegacao, PrimeiroMenu } from "./styles";

function Header(props) {
  const handlePageChange =()=>{
    props.pagina()
  }
  return (
    <PrimeiroMenu>
      <BotaoNavegacao onClick={handlePageChange}>
        <img src={props.imgPrimeira} alt='donut'></img>
      </BotaoNavegacao>
      <BotaoNavegacao>
        <img src={props.imgSegunda} alt="donut"></img>
      </BotaoNavegacao>
    </PrimeiroMenu>
  );
}

export default Header;
