function Signup() {
  return (
    <div>
      <h1>SIGNUP</h1>
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
        <label htmlFor="confirmPassword">Confirmez votre mot de passe</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />
        <label htmlFor="firstName">Entrez votre nom</label>
        <input type="text" id="firstName" name="firstName" required />
        <label htmlFor="surname">Entrez votre pseudo</label>
        <input type="text" id="surname" name="surname" required />
        <label htmlFor="dateOfBirth">Entrez votre date de naissance</label>
        <input type="text" id="dateOfBirth" name="dateOfBirth" required />
      </form>
    </div>
  );
}

export default Signup;
