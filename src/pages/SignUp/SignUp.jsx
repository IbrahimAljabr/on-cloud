import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { signUp } from "../../services/login";
import { Button, Container, FormContainer, Input, Text, Title } from "./sign-up.styles";

/**
 * Render sign up page.
 *
 * @return {JSX.Element}
 */
function SignUp() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", });
  const navigate = useNavigate();
  const { setUserInfo, } = useUser()


  const submit = async (e) => {
    e.preventDefault();

    const userData = await signUp(formData)

    if (userData) {
      setUserInfo({ name: userData.name, id: userData.id })
      navigate("/")
    } else {
      alert("email already on use")
    }
  }

  return (
    <Container>
      <FormContainer>
        <Title>
          sign up
        </Title>

        <Text>
          Name
        </Text>
        <Input onChange={(e) => {
          setFormData((form) =>
            ({ ...form, name: e.target.value }))
        }}
          type="text" placeholder="Name" />
        <Text>
          Email
        </Text>
        <Input onChange={(e) => {
          setFormData((form) =>
            ({ ...form, email: e.target.value }))
        }} type="email" placeholder="Email" />
        <Text>
          Password
        </Text>
        <Input onChange={(e) => {
          setFormData((form) =>
            ({ ...form, password: e.target.value }))
        }} type="password" placeholder="Password" />

        <Button onClick={submit}>sign up</Button>
        <Text>
          Have an account?<a onClick={() => navigate("/login")}> Log In</a>
        </Text>

      </FormContainer>
    </Container>
  );
}

export default SignUp;
