import CEmail from "./confirmEmail";

export default function FPwdP({ goBack }) {

  return (
    <div className="CEmailDiv">
      <div className="CEM">
        <h3>Reset your password</h3>

        <CEmail />

        <p className="PSup">
          Remember you're account?{" "}
          <button
            type="button"
            onClick={goBack}
            className="ToggBtn"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}