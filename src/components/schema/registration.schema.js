import { string, object } from 'yup';

const registrationSchema = object().shape({
    name: string()
        .trim()
        .min(3, "This field must be at least 2 character long.")
        .max(20, "This field must be at most 20 character long.")
        .required('This field must not be empty.'),

    sex: string()
        .required('This field must not be empty.'),

});

export default registrationSchema;