import styled from "styled-components";
import background from "../../assets/background-intro.svg";

export const HomeContainer = styled.main`
  background-image: url(${background});

  img {
    height: 22.5rem;
  }
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: ${(props) => props.theme["font-text-xl"]};
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  padding: 0 10rem;
`;
export const PinpointContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
