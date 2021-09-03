import "./styles.css";

const WelcomePage = ({ user, setIsLoggedIn }) => {
  const HandleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="welcomeBox">
      <h1>Bem vindo, {user}!</h1>
      <button onClick={HandleLogout}>Sair</button>
    </div>
  );
};

export default WelcomePage;
