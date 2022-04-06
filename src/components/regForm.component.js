import { Field, Form, Formik, ErrorMessage } from 'formik';
import registrationSchema from './schema/registration.schema';

const RegForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                sex: '',
            }}
            validationSchema={registrationSchema}
            onSubmit={(values, actions) => {
                console.log(values);
                actions.setSubmitting(false);
            }}
        >
            {formikProps => (
                <Form onSubmit={formikProps.handleSubmit}>
                    <div className="form-group p-lg-3">
                        <label className="form-label" htmlFor="name">Name<span className="text-danger">*</span> </label>
                        <Field className="form-control" style={{ maxWidth: "40%" }} type="text" id="name" name="name" />
                        <div className="invalid-feedback d-block"><ErrorMessage name="name" /></div>
                    </div>

                    <div className="form-group p-lg-3">
                        <label className="form-label" htmlFor="sex">Sex<span className="text-danger">*</span> </label>
                        <Field as="select" name="sex">
                            <option value="select">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Field>
                        <div className="invalid-feedback d-block"><ErrorMessage name="sex" /></div>
                    </div>

                    <button type="submit" className="btn btn-warning  m-3"> Register </button>
                </Form>
            )}
        </Formik>
    );
}

export default RegForm;