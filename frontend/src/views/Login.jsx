function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label htmlFor="email">Entrez votre Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <label htmlFor="password">Entrez un mot de passe de 8 caractères</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
}

export default Login;
