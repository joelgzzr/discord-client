import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { signIn } from '../../redux/actions/authActions';
import { 
  CustomContainer, 
  FormContainer, 
  CustomFlex,
  FormFlex,
  CustomLabel,
  CustomInputField,
  CustomError,
  CustomButton,
  CustomAnchor 
} from '../styles/CommonStyles';

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
          <CustomFlex margin="8px 0px 10px 0px" width="181px">
            <CustomButton type="submit">Login</CustomButton>
          </CustomFlex>
          <CustomFlex margin="8px 0px 10px 0px" width="100%">
            Don't have an account? &nbsp; <CustomAnchor href='/register'>Register</CustomAnchor>
          </CustomFlex>
        </FormFlex>
      </FormContainer>
    </CustomContainer>
  )
}

export default LogInForm;
