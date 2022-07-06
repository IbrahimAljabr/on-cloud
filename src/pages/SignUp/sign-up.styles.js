import styled from 'styled-components';
import colors from '../../styles/colors';


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

export const Button = styled.button`
  margin: 1rem;
  font-size: 1.5rem;
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
