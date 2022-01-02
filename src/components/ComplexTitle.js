import styled from "styled-components";
import { colors, setupBorder } from "../utils"

const ComplexTitle = () => {
  return(
    <>
      <Wrapper>
        <Div className="underline"></Div>
      </Wrapper>
    </>
  );
};

const Div = styled.div`
  border: ${setupBorder({width: 5, type: 'solid', color: 'green'})}
`;

const Wrapper = styled.div`
  .underline {
    width: 5rem;
    height: 0.5rem;
    background: ${colors.primary};
    margin: 4rem auto;
  };
`;

export default ComplexTitle;