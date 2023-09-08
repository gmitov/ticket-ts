import Ticket from "./Ticket";
import styles from "./TicketWrapper.module.css";

interface TicketListProps {
  tickets: ITicket[];
}

const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  return (
    <>
      {tickets ? (
        tickets.length > 0 ? (
          <div className={styles["ticket-wrapper"]}>
            {tickets.map((ticket) => (
              <Ticket ticket={ticket} key={ticket.id} />
            ))}
          </div>
        ) : (
          <>Няма намерени тикети от този вид.</>
        )
      ) : (
        <>Грешка при свързване със сървъра.</>
      )}
    </>
  );
};

export default TicketList;
