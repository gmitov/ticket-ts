import TicketDataHeader from "./components/TicketDataHeader";
import TicketDataWorkers from "./components/TicketDataWorkers";
import TicketDataInputs from "./components/TicketDataInputs";
import TicketDataControls from "./components/TicketDataControls";

import { useTicket } from "./hooks/ticketDataHook";

import styles from "../ticketData/components/TicketWrapper.module.css";

export const TicketDataPage: React.FC = () => {
  const { ticket, ticketChangeHandler } = useTicket();

  return (
    <div className={styles["ticket-wrapper"]}>
      <TicketDataHeader
        ticket={ticket}
        ticketChangeHandler={ticketChangeHandler}
      />
      {ticket?.ticketStatus! === 2 && ticket?.helpers ? (
        <>
          <TicketDataWorkers ticket={ticket.helpers} />
          <TicketDataInputs ticket={ticket} />
          <TicketDataControls
            ticket={ticket}
            ticketChangeHandler={ticketChangeHandler}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
