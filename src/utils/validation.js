import * as yup from 'yup';

const validate = yup.object().shape({
    Email: yup.string().email().required().label("Please Enter Your Email"),
    Name: yup.string().required().label("Please Enter Your Fullname")
})

export default {
    validate
}