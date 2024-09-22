import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import ErrorMessage from './ErrorMessage';

const UserForm = ({formData, handleSubmit}) => {
  const {
    fr_title,
    inputs,
    bt_msg,
    link_msg,
    link,
    error
  } =  formData;

  return(
    <>
        <FormContainer>
          <Wrapper>
              <h3>{fr_title}</h3>
              <form onSubmit={handleSubmit}></form>
              {inputs}
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <Button>{bt_msg}</Button>
              <Link to={link}>{link_msg}</Link>
          </Wrapper>
        </FormContainer>
    </>
  )
};

export default UserForm;


const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0ead2;
`;

const Wrapper = styled.div`
  width: 300px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  border-radius: 8px;

  > h3 {
    font-family: Georgia, serif;
    font-size: 18px;
    color: #6c584c;
  }

  > a {
    display: block;
    text-align: right;
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
