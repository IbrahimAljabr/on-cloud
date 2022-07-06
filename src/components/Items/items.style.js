import styled from 'styled-components';
import colors from '../../styles/colors';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 5rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background-color: ${colors.mercury};
  width: 20rem;
  height: 16rem;
  display: flex;
  margin: 1rem;
  border-radius: 0.6rem;
`;

export const CardText = styled.div`
  width: 20rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.div`
  margin: 1rem;
  width: 8rem;
  height: 8rem;

  img{
    width:100%;
    height: 100%;
  }
`;

export const ItemContainer = styled.div`
  background-color: ${colors.lightGray};
  width: 40rem;
  height: 20rem;
  display: flex;
`;

export const ItemText = styled.div`
  width: 40rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  margin: 1rem;
  width: 18rem;
  height: 15rem;

  img{
    width:100%;
    height: 100%;
  }
`;

export const FormContainer = styled.form`
  background-color: ${colors.lightGray};
  width: 35rem;
  height: 28rem;
  border-radius: 0.5rem;
 
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  width: 95%;
  margin: 0 1rem;
`;

export const ButtonContainer = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  margin: 0.5rem 1rem;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  margin: 0.7rem;
  font-size: 1rem;
  background-color: ${colors.mineShaft};
  color: ${colors.mercury};
  padding: 0.5rem;
  border-radius: 0.4rem;
  cursor: pointer;
`;

export const Text = styled.p`
  margin: 0.8rem 1rem;
  font-size: 1rem;
  color: ${colors.mineShaft};
  max-width:10rem;
  max-height: 2rem;
  word-wrap: break-word;

  a{
    color: ${colors.azure};
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  color: ${colors.mineShaft};
  display: flex;
  justify-content: center;
`;
