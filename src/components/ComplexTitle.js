import styled from "styled-components";

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

`;

const Wrapper = styled.div`
  .underline {
    width: 5rem;
    height: 0.5rem;
    background: red;
    margin: 4rem auto;
  };
`;

export default ComplexTitle;