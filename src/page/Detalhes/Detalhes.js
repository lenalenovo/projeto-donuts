import Header from '../../components/Header/Header'
import seta from '../../assets/Vector3.png'
import ponto from '../../assets/Group 3863.png'
import group from '../../assets/Group 3867.png'
import donutGrande from '../../assets/donut 1.png'
import { BotaoAddCard, ContainerDiv, BotaoMore, ContainerDetalhes, ImagemGrande, MaisProdutos, TextMore, TextNumber, TextoDonuts, TituloDonuts } from './styles'

function Detalhes(props){
    return(
        <>
            <Header
                pagina={props.pagina}
                imgPrimeira={seta}
                imgSegunda={ponto}
            />
            <ContainerDetalhes>

                <ImagemGrande src={donutGrande}/>
                <ContainerDiv>
                    <TituloDonuts>
                        Unicorn Sprinkles
                    </TituloDonuts>
                    <TextoDonuts>
                        a fuffly fresh cooked donut covered by a creamy strawberry flavour with rainbow sprinkles
                    </TextoDonuts>
                    <MaisProdutos>
                        <img src={group} alt='sla'/>
                        <TextNumber>7800</TextNumber>
                    </MaisProdutos>

                    <MaisProdutos>
                        <TextMore>Need more?</TextMore>
                        <BotaoMore>Add more</BotaoMore>
                    </MaisProdutos>

                    <BotaoAddCard>Add to card</BotaoAddCard>
                </ContainerDiv>
            </ContainerDetalhes>
        </>
    )
}

export default Detalhes