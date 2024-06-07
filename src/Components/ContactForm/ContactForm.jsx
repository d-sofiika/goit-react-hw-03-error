import { Form, Formik, Field } from "formik"
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const ContactForm = ({onAdd}) => {

const initialValues = {
  username: "",
 number: "",
  
};
    const handleSubmit = (values, actions) => {
        onAdd{
            id: nanoid()
            name: values.username
                numb: values.number
        }
        actions.resetForm();
    }
   const nameFieldId = useId();
    const numberFieldId = useId();
  
    const FeedbackSchema = Yup.object().shape({
        username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
    
    });

  return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema} >
          <Form>
              <label htmlFor={nameFieldId}>Name</label>
              <Field type="text" name="username" />
                <ErrorMessage name="username" component="span" />
              <label htmlFor={numberFieldId}>Number</label>
              <Field type="tel" name="numb" />
                <ErrorMessage name="numb" component="span" />
              <button type="submit">Add contact</button>
          </Form>
    </Formik>
  )
}

export default ContactForm