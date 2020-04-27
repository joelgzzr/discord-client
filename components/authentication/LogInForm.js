import styled from 'styled-components';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { signIn } from '../../redux/actions/authActions';

const CustomContainer = styled.div`
  display: flex;
  width: ${props => props.width};
`;

const FormContainer = styled.div`
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

const FormFlex = styled.form`
  display: flex;
  flex-grow: ${props => props.flexGrow};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CustomFlex = styled.div`
  display: flex;
  flex-grow: ${props => props.flexGrow};
  flex-direction: ${props => props.flexDirection};
  margin: ${props => props.margin};
  width: ${props => props.width};
`;

const CustomInputField = styled.input`
  border: 1px solid black;
  padding: 5px 5px;
`;

const CustomLabel = styled.label`
  flex-grow: ${props => props.flexGrow};
  color: white;
  font-size: 12px;
`;

const CustomError = styled.div`
  color: #e44546;
  flex-grow: ${props => props.flexGrow};
`;

const CustomButton = styled.button`
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

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LogInForm = () => {
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: values => {
      dispatch(signIn(values))
    },
  });

  return (
    <CustomContainer width="300px">
      <FormContainer>
        <CustomFlex margin="10px 0px 8px 0px">
          <div style={{ fontSize: '24px' }}> WELCOME BACK </div>
        </CustomFlex>
        <FormFlex onSubmit={handleSubmit} flexGrow="1">
          <CustomFlex flexDirection="column" margin="5px 0px">
              <CustomLabel htmlFor="email"> EMAIL: </CustomLabel>
              <CustomInputField 
                id="email"
                name="email"
                type="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
              { errors.email && touched.email &&
                  <CustomError> { errors.email } </CustomError> }
          </CustomFlex>
          <CustomFlex flexDirection="column" margin="5px 0px">
              <CustomLabel htmlFor="password"> PASSWORD: </CustomLabel>
              <CustomInputField 
                id="password"
                name="password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
              />
              { errors.password && touched.password &&
                  <CustomError> { errors.password } </CustomError> }
          </CustomFlex>
          <CustomFlex margin="8px 0px 10px 0px" width="100%">
            <CustomButton type="submit">Login</CustomButton>
          </CustomFlex>
        </FormFlex>
      </FormContainer>
    </CustomContainer>
  )
}

export default LogInForm;
