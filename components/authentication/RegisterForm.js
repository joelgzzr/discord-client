import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { signUp } from '../../redux/actions/authActions';
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
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    username: Yup.string().max(20, 'Username cannot be more than 20 characters').required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be more than 8 characters')
        .max(20, 'Password must be less than 20 characters')
        .matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Password is too weak')
        .required('Password is required'),
    birthday: Yup.string().required('Birthday is required'),
});

const RegisterForm = () => {
    const dispatch = useDispatch();

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          birthday: ''
        },
        validationSchema,
        onSubmit: values => {
          dispatch(signUp(values))
        },
    });

    return (
        <CustomContainer width="300px">
            <FormContainer>
                <CustomFlex margin="10px 0px 8px 0px">
                    <div style={{ fontSize: '24px' }}> REGISTER </div>
                </CustomFlex>
                <FormFlex onSubmit={handleSubmit} flexGrow="1">
                    <CustomFlex flexDirection="column" margin="5px 0px">
                        <CustomLabel htmlFor="firstName"> FIRST NAME: </CustomLabel>
                        <CustomInputField 
                            id="firstName"
                            name="firstName"
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                        />
                        { errors.firstName && touched.firstName &&
                            <CustomError> { errors.firstName } </CustomError> }
                    </CustomFlex>
                    <CustomFlex flexDirection="column" margin="5px 0px">
                        <CustomLabel htmlFor="lastName"> LAST NAME: </CustomLabel>
                        <CustomInputField 
                            id="lastName"
                            name="lastName"
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.lastName}
                        />
                        { errors.lastName && touched.lastName &&
                            <CustomError> { errors.lastName } </CustomError> }
                    </CustomFlex>
                    <CustomFlex flexDirection="column" margin="5px 0px">
                        <CustomLabel htmlFor="username"> USERNAME: </CustomLabel>
                        <CustomInputField 
                            id="username"
                            name="username"
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.username}
                        />
                        { errors.username && touched.username &&
                            <CustomError> { errors.username } </CustomError> }
                    </CustomFlex>
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
                    <CustomFlex flexDirection="column" margin="5px 0px">
                        <CustomLabel htmlFor="birthday"> BIRTHDAY: </CustomLabel>
                        <CustomInputField 
                            id="birthday"
                            name="birthday"
                            type="date"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.birthday}
                        />
                        { errors.birthday && touched.birthday &&
                            <CustomError> { errors.birthday } </CustomError> }
                    </CustomFlex>
                    <CustomFlex margin="8px 0px 10px 0px" width="181px">
                        <CustomButton type="submit">Register</CustomButton>
                    </CustomFlex>
                    <CustomFlex margin="8px 0px 10px 0px" width="100%">
                        Already have an account? &nbsp; <CustomAnchor href='/'>Login</CustomAnchor>
                    </CustomFlex>
                </FormFlex>
            </FormContainer>
        </CustomContainer>
    )
}

export default RegisterForm
