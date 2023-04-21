import "../../styles/dashboard.css";
import { Card } from "../../components/Card";
import imgNocard from '../../img/NoCardDesk.png'
import imgNocardMobile from '../../img/NoCard.png'

export function List({ listTransactions, setListTransactions }) {


  return (
    <section className="section-transactions">
      <div>
      <h1>Resumo Financeiro</h1>
      </div>
      {listTransactions.length < 1 && (
        <>
        <p>Você ainda não possui nenhum lançamento</p>
        <img src={imgNocard} alt='img NoCard' className="noCard-Desk"></img>
        <img src={imgNocardMobile} alt='img noCard-Mobile' className="noCard-mobile"></img>
      
        </>
      )}

      <ul className="list-cards">
        {listTransactions.map((transaction) => (
          <Card
            transaction={transaction}
            key={transaction.id}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        ))}
      </ul>
    </section>
  );
}
