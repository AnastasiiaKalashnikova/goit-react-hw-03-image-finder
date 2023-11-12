import { Formik, Field, Form } from 'formik';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header>
      <Formik
        initialValues={{
          input: '',
        }}
        onSubmit={(value, actions) => {
          onSubmit(value);
          actions.resetForm();
        }}
      >
        <Form>
          <button type="submit">
            <span>Search</span>
          </button>

          <Field
            name="input"
            autoComplete="off"
            type="text"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};
