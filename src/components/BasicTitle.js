import styled from "styled-components";

export const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  /* color: ${({ special }) => special && 'red'}; This sentence if i need a prop to set a specific value */
  color: ${({ special }) => special ? 'red':'blue'};
`; 