import useForm from '../../hooks/useForm';

const CustomForm = () => {
  const { email, password, formState, onChange } = useForm({
    email: '',
    password: '',
  });

  return (
    <>
      <h3>Forms</h3>
      <input
        type="text"
        className="form-control my-3"
        placeholder="Email"
        value={email}
        onChange={({ target: { value } }) => onChange(value, 'email')}
      />
      <input
        type="text"
        className="form-control my-3"
        placeholder="Password"
        value={password}
        onChange={({ target: { value } }) => onChange(value, 'password')}
      />
      <code>
        <pre>{JSON.stringify(formState)}</pre>
      </code>
    </>
  );
};

export default CustomForm;
