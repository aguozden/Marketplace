export default function SignUp() {
  return (
    <section>
      <h1>NGO Sign Up</h1>

      <p>
        Create an account to publish needs and connect with people who want to
        help.
      </p>

      <form>
        <label>
          NGO Name
          <input type="text" placeholder="Organization name" />
        </label>

        <label>
          Country
          <input type="text" placeholder="Country" />
        </label>

        <label>
          Email
          <input type="email" placeholder="Email address" />
        </label>

        <label>
          Password
          <input type="password" placeholder="Password" />
        </label>

        <button type="submit">Create account</button>
      </form>
    </section>
  );
}
