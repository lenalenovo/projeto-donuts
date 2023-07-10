import filtro from '../../assets/Group 3851.png'
import { ContainerNav } from './styles'
import Botao from '../Botao/Botao'

function Nav(){
    return(
        <>
        <ContainerNav>
            <Botao titulo={'Donuts'}/>
            <Botao titulo={'Ice cream'}/>
            <Botao titulo={'Bomboloni'}/>
            <img src={filtro} alt=''/>
        </ContainerNav>
        
        </>
    )
}

export default Nav 