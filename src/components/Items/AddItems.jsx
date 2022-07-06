import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { addItem, editItem, getItem } from "../../services/items";
import { Button, Container, FormContainer, Input, Text, Title } from "./items.style";

/**
 * Render sign up page.
 *
 * @return {JSX.Element}
 */
function Login() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { userInfo } = useUser()
  const { id } = useParams();

  const submit = async (e) => {
    e.preventDefault();
    await addItem(formData, userInfo.id)
    navigate(`/`)

  }

  const edit = async (e) => {
    e.preventDefault();
    await editItem(formData, id)
    navigate(`/`)

  }

  const getItemDetails = async () => {
    const data = await getItem(id);
    setFormData(data);
  }

  useEffect(() => {
    if (id) {
      getItemDetails()
    }

  }, []);

  !userInfo && navigate("/")
  return (
    <Container>
      <FormContainer>
        {!id && <Title >Add New Item</Title>}
        {id && <Title >Edit Item</Title>}

        <Text>
          Name
        </Text>
        <Input onChange={(e) => {
          setFormData((form) =>
            ({ ...form, name: e.target.value }))
        }} value={formData.name || ""} type="text" placeholder="Name" />

        <Text>
          Price
        </Text>
        <Input onChange={(e) => {
          setFormData((form) =>
            ({ ...form, price: e.target.value }))
        }} value={formData.price || ""} type="text" placeholder="Price" />

        <Text>
          Image
        </Text>
        <Input onChange={(e) => {
          setFormData((form) =>
            ({ ...form, image: e.target.value }))
        }} value={formData.image || ""} type="text" placeholder="Image URL" />

        <Text>
          description
        </Text>
        <Input onChange={(e) => {
          setFormData((form) =>
            ({ ...form, description: e.target.value }))
        }} value={formData.description || ""} type="text" placeholder="description" />

        {!id && <Button onClick={submit}>Add Item</Button>}
        {id && <Button onClick={edit}>Edit</Button>}

      </FormContainer>
    </Container>
  );
}

export default Login;
