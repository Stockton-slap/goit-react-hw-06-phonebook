import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  height: 100%;
  border: 2px solid black;
  margin: 0 auto;
  box-shadow: 0 0 5px 5px grey;
  padding: 40px;
`;

export const ContactInfoLabel = styled.label`
  font-weight: 700;
`;

export const ContactInfoValue = styled.input`
  margin-bottom: 20px;
  margin-top: 5px;
  width: 200px;
  padding-left: 5px;
  box-shadow: 0 0 5pt 0.5pt #d3d3d3;
  border-radius: 5px;
`;

export const AddBtn = styled.button`
  cursor: pointer;
  font-weight: 700;
  border-radius: 5px;
`;
