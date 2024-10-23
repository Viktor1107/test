import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";

const ContactsForm = () => {
  const dispatch = useDispatch();

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(6, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={s.Form}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" />
        <label className={s.label} htmlFor="number">
          Number
        </label>

        <Field type="text" name="number" />
        <ErrorMessage name="number" />
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactsForm;
