import "../../styles/dashboard.css";
import { MdAttachMoney } from "react-icons/md";

export function TotalMoney({ listTransactions }) {
  
  const amount = listTransactions.reduce((accumador, currentValue) => {
    return(
      currentValue.type === 'Entrada' ? Number(accumador) + Number(currentValue.value):
      Number(accumador) - Number(currentValue.value)
    )
  }, 0);

  return (
    <div className="card-amount">
      <div>
        <h3>Valor Total:</h3>
        
        
        <p>
          <MdAttachMoney className="image-money" />
          {amount}
        </p>
      </div>
      <span>o valor se refere ao saldo</span>
    </div>
  );
}
