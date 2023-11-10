import { Formik, Field, Form } from 'formik';

export const Searchbar = () => {
  return (
    <header>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async values => {
          await new Promise(r => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <button type="submit">
            <span>Search</span>
          </button>

          <Field
            name="input"
            autocomplete="off"
            type="text"
            autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};
