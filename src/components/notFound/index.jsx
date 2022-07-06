import { useNavigate } from 'react-router-dom';
import { Container, Text } from './not-found.style';

/**
 * not found page .
 *
 * @return {JSX.Element}
 */
function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Text>The page you requested could not be found</Text>

      <a onClick={() => navigate('/')}>Go to homePage</a>
    </Container>
  );
}

export default NotFoundPage;
