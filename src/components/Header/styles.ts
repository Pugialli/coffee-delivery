import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;
  padding: 0 10rem;

  nav {
    display: flex;
    gap: 0.75rem;
    font-size: ${(props) => props.theme["font-text-s"]};
  }
`;

export const BaseNavContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;

  border: 0;
  border-radius: 6px;
`;

export const LocationContainer = styled(BaseNavContainer)`
  font-size: ${(props) => props.theme["font-text-s"]};
  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
`;

export const LocationPin = styled.div`
  color: ${(props) => props.theme["purple"]};
`;

export const CartContainer = styled(BaseNavContainer)`
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  cursor: pointer;
`;
