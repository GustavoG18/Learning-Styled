import styled from "styled-components";

export const DefaultButton = styled.button`
  background: #645cff;
  color: #FFFFFF;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
`;

// Extends styled-components
export const HipsterButton = styled(DefaultButton)`
  width: 400px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
`;