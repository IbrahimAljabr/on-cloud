import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { deleteItem, getItem } from "../../services/items";
import { Button, ButtonContainer, Container, ImageContainer, ItemContainer, ItemText, Text, Title } from "./items.style";

/**
 * Render sign up page.
 *
 * @return {JSX.Element}
 */
function ItemDetails() {
    const [itemDetails, setItemDetails] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    const { userInfo } = useUser()

    const getItemDetails = async () => {
        const data = await getItem(id);
        setItemDetails(data);
    }

    const deleteItemById = async (e) => {
        e.preventDefault();
        await deleteItem(id)
        navigate(`/`)
    }

    useEffect(() => {
        getItemDetails()
    }, []);

    return (
        <Container>
            <ItemContainer>
                <ImageContainer>
                    <img src={itemDetails?.image || ''} />
                </ImageContainer>

                <ItemText>
                    <Title>{itemDetails?.name || "name not available"}</Title>
                    <Text>$ {itemDetails?.price || 0}</Text>
                    <Text>{itemDetails?.description || "description not available"}</Text>

                    <ButtonContainer>
                        {userInfo?.id === itemDetails?.userId &&
                            <Button onClick={() => navigate(`/items/add/${id}`)}>Edit</Button>}
                        {userInfo?.id === itemDetails?.userId &&
                            <Button onClick={deleteItemById}>Delete</Button>}
                        <Button>Add to Cart</Button>
                    </ButtonContainer>
                </ItemText>



            </ItemContainer>
        </Container>
    );
}

export default ItemDetails;
