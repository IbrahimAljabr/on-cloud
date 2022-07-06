import styled from 'styled-components';
import colors from '../../../styles/colors';


export const HeaderContainer = styled.div`
  background-color: ${colors.mineShaft};
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem;
`;

export const HeaderText = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: ${colors.mercury};
  margin-left: 2rem;
`;

export const HeaderTextHover = styled(HeaderText)`
  cursor: pointer;
`;

export const HeaderLogin = styled.button`
  color: ${colors.mercury};
  margin: 0;
  font-size: 1.5rem;
  background-color: ${colors.mineShaft};
  border: none;
  cursor: pointer;
  margin-left: 1rem;
`;

