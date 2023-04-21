import { useState } from "react";
import { Dashboard } from "./pages/dashboard";
import { HomePage } from "./pages/home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className="app-container">
      {isLoggedIn ? (
        <Dashboard setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <HomePage setIsLoggedIn={setIsLoggedIn} />
      )}
    </main>
  );
}

export default App;