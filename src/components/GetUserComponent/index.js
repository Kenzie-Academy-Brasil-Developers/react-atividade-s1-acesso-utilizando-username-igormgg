import { useState } from "react";
import "./styles.css";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  const HandleLogin = () => {
    setUser(userInput);
    setIsLoggedIn(true);
  };

  return (
    <div className="mainBox">
      <form>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button onClick={() => HandleLogin(userInput)}>
          Acessar com o nome
        </button>
      </form>
    </div>
  );
};

export default GetUserComponent;
