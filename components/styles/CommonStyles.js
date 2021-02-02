import styled from 'styled-components';

export const CustomContainer = styled.div`
  display: flex;
  width: ${props => props.width};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #36393f;
  color: white;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const FormFlex = styled.form`
  display: flex;
  flex-grow: ${props => props.flexGrow};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CustomFlex = styled.div`
  display: flex;
  flex-grow: ${props => props.flexGrow};
  flex-direction: ${props => props.flexDirection};
  margin: ${props => props.margin};
  width: ${props => props.width};
`;

export const CustomInputField = styled.input`
  border: 1px solid black;
  padding: 5px 5px;
`;

export const CustomLabel = styled.label`
  flex-grow: ${props => props.flexGrow};
  color: white;
  font-size: 12px;
`;

export const CustomError = styled.div`
  color: #e44546;
  flex-grow: ${props => props.flexGrow};
`;

export const CustomButton = styled.button`
  background-color: #7289da;
  border: none;
  cursor: pointer;
  height: 27px;
  width: 100%;
  color: white;

  &:hover {
    background-color: white;
    color: #7289da;
  }
`;

export const CustomAnchor = styled.a`
    text-decoration: none;
    color: #7289da;
    cursor: pointer;

    &:hover {
        color: white;
    }
`;