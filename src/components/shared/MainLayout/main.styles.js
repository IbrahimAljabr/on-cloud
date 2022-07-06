import styled from 'styled-components';
import colors from '../../../styles/colors';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  button{
  justify-content: flex-end;
  }
`;

export const ItemContainer = styled.div`
  width: 40rem;
  height: 20rem;
`;

export const Button = styled.button`
  margin: 1rem;
  font-size: 1.5rem;
  background-color: ${colors.mineShaft};
  color: ${colors.mercury};
  padding: 2rem;
  border-radius: 0.4rem;
  cursor: pointer;
`;

export const Text = styled.p`
  margin: 0.8rem 1rem;
  font-size: 1rem;
  color: ${colors.mineShaft};

  a{
    color: ${colors.azure};
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  color: ${colors.mineShaft};
  display: flex;
  justify-content: center;
`;
