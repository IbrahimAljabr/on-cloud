import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllItem } from "../../services/items";
import {
    Button, ButtonContainer, Card, CardContainer, CardImage, CardText, Text, Title
} from "./items.style";

/**
 * Render sign up page.
 *
 * @return {JSX.Element}
 */
function Items() {
    const [items, setItems] = useState({});
    const navigate = useNavigate();

    const getItems = async () => {
        const data = await getAllItem();
        setItems(data);
    }

    useEffect(() => {
        getItems()
    }, []);

    return (
        <CardContainer>
            {items?.length > 0 && items.map(({ image, name, price, description, id }) => (
                <Card>
                    <CardImage>
                        <img src={image || ''} />
                    </CardImage>

                    <CardText>
                        <Title>{name || "name not available"}</Title>
                        <Text>$ {price || 0}</Text>
                        <Text>{description || "description not available"}</Text>

                        <ButtonContainer>
                            <Button onClick={() => navigate(`/details/${id}`)}>View</Button>
                        </ButtonContainer>
                    </CardText>

                </Card>
            ))}
        </CardContainer>
    );
}

export default Items;
