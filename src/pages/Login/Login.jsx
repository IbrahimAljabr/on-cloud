import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { login } from "../../services/login";
import { Button, Container, FormContainer, Input, Text, Title } from "./login.styles";

/**
 * Render sign up page.
 *
 * @return {JSX.Element}
 */
function Login() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", });
  const navigate = useNavigate();
  const { setUserInfo, } = useUser()


  const submit = async (e) => {
    e.preventDefault();

    const userData = await login(formData)

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
          Login
        </Title>

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

        <Button onClick={submit}>Login</Button>
        <Text>
          <a onClick={() => navigate("/sign-up")}> Create account</a>
        </Text>

      </FormContainer>
    </Container>
  );
}

export default Login;
