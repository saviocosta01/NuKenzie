import "../../styles/dashboard.css";
import { MdDelete } from "react-icons/md";

export function Card({ transaction, listTransactions, setListTransactions }) {
  
  function removeItem(id) {
    const removeCard = listTransactions.filter((element) => {
      return element.id !== id;
    });
    setListTransactions(removeCard);
  }

  return (
    <li className={transaction.type === "Entrada" ? "card" : "card-saida"}>
      <div className="card-content">
        <h2>{transaction.description}</h2>
        <p>{transaction.type}</p>
      </div>

      <div className="div-delete-card">
        <span>{transaction.value},00</span>

        <MdDelete
          className="img-delete"
          id={transaction.id}
          onClick={() => removeItem(transaction.id)}
        />
      </div>
    </li>
  );
}