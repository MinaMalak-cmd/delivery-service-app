const useLogin = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("userName"),
      password: data.get("password"),
    });
  };
  return {
    handleSubmit,
  };
};

export default useLogin;
