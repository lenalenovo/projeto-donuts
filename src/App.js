// import Header from "./components/Header/Header";
import StyledGlobal, { CorFundo } from "./styledGlobal";
import Home from './page/Home/Home'
import { useState } from "react";
import Detalhes from "./page/Detalhes/Detalhes"
function App() {
  const [trocarDePagina, setTrocarDePagina] = useState(0)

  const changePage = (change)=>{
    setTrocarDePagina(change)
  }
  return (
    <>
      <CorFundo>
        <StyledGlobal />
        {trocarDePagina === 0 ? (
          <Home pagina={()=>changePage(0)}/>
        ): (
          <Detalhes pagina={()=>changePage(1)}/>
        )}
        {/* <Home/> */}

      </CorFundo>
    </>
  );
}

export default App;
