import TicketDataHeader from "./TicketDataHeader";
import TicketDataWorkers from "./TicketDataWorkers";
import TicketDataInputs from "./TicketDataInputs";
import TicketDataControls from "./TicketDataControls";

import { useTicket } from "../hooks/ticketDataHook";

import styles from "../../ticketData/components/TicketWrapper.module.css";

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
