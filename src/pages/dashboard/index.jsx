import "../../styles/globalStyle.css";
import "../../styles/header.css";
import "../../styles/dashboard.css";
import { useState } from "react";
import { Form } from "../../components/Form";
import { List } from "../../components/List";
import { TotalMoney } from "../../components/totalMoney";

export function Dashboard({ setIsLoggedIn }) {

  function handleLogout() {
    setIsLoggedIn(false);
  }

  const [listTransactions, setListTransactions] = useState([]);



  return (
    <div>
      <header className="header-container">
        <h2>
          <span>Nu</span> Kenzie
        </h2>
        <button onClick={handleLogout}>Inicio</button>
      </header>

      <main className="main-container">
        <section className="form-container">
          <Form
            setListTransactions={setListTransactions}
            listTransactions={listTransactions}
            
          />
          {listTransactions.length > 0 && (
            <TotalMoney listTransactions={listTransactions} />
          )}
        </section>

        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </main>
    </div>
  );
}
