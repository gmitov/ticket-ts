import Ticket from "./Ticket";
import styles from "./TicketWrapper.module.css";

interface TicketListProps {
  tickets: ITicket[];
}

const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  return (
    <div className={styles["ticket-wrapper"]}>
      {tickets.map((ticket) => (
        <Ticket ticket={ticket} key={ticket.id} />
      ))}
    </div>
  );
};

export default TicketList;
