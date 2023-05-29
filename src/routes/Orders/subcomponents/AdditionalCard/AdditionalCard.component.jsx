import {
    AdditionalCardStyled,
    Description,
    Image,
    ImageContainer,
    InfoContainer,
    Container,
    Name,
    Price,
} from "./AdditionalCard.styles";
import HamburguerImage from "../../../../assets/images/category-combos.png";
import { formatPrice } from "../../../../utils/functions";
import { Spacer } from "../../../../components/Spacer/Spacer.component";
import { Radio } from "../../../../components/Radio/Radio.component";

export const AdditionalCard = ({ additional, isChecked, onCheck }) => {
    return (
        <AdditionalCardStyled>
            <Container>
                <ImageContainer>
                    <Image src={HamburguerImage} />
                </ImageContainer>
                <Spacer x={24} />
                <InfoContainer>
                    <Name>{additional.name}</Name>
                    <Spacer y={4} />
                    <Description>{additional.description}</Description>
                </InfoContainer>
            </Container>
            <Container>
                <Price>R$ {formatPrice(additional.price)}</Price>
                <Spacer x={32} />
                <Radio isChecked={isChecked} onClick={onCheck} />
            </Container>
        </AdditionalCardStyled>
    );
};
