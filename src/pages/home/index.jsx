import "../../styles/globalStyle.css";
import "../../styles/home.css";
import imageMobile from "../../img/Group262.png";
import imageDesktop from "../../img/Illustration.png";

export function HomePage({ setIsLoggedIn }) {
  
  function handleLogin() {
    setIsLoggedIn(true);
  }
  return (
    <main className="homepage-container">
      <div className="home-content">
        <h3>
          <span>Nu</span> Kenzie
        </h3>

        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button onClick={handleLogin}>Iniciar</button>
      </div>

      <img src={imageMobile} alt="imageMobile" className="image-mobile"></img>

      <img src={imageDesktop} alt="imageDesk" className="image-desk"></img>
    </main>
  );
}
