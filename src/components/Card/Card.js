import { CardContainer, DivCard, ImagemCard, TextCard, TituloCard } from "./styles"

function Card (){
    return(
        <>
            <CardContainer>
                <ImagemCard src=''/>
                <TituloCard>
                    Unicorn Sprinkles
                </TituloCard>
                <TextCard>
                    Strawberry creamy...
                </TextCard>
                <DivCard>
                    <p>7.800</p>
                  <a>Mais</a>
                </DivCard>


            </CardContainer>
        </>
    )
}

export default Card