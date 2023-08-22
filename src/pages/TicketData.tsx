import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import serverUrl from "../helpers/config";
import makeRequest from "../helpers/makeRequest";

// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";
import TicketDataHeader from "../components/tickets/TicketDataHeader";
import TicketDataWorkers from "../components/tickets/TicketDataWorkers";
import TicketDataInputs from "../components/tickets/TicketDataInputs";
import TicketDataControls from "../components/tickets/TicketDataControls";

import styles from "../components/tickets/TicketWrapper.module.css";

const TicketData: React.FC = () => {
  const user = useSelector((state: any) => state.user);

  const [ticket, setTicket] = useState<ITicketData>();

  const { id } = useParams();

  useEffect(() => {
    const requestData = {
      nUser: user.nUser,
      cobjTicket: id,
    };

    const fetchTickets = () => {
      const response = makeRequest<any>({
        method: "POST",
        url: serverUrl + "/ticket/getData",
        body: requestData,
      });

      return response;
    };

    fetchTickets().then((result) => {
      setTicket(result.ticket);
    });
  }, []);

  return (
    <div className={styles["ticket-wrapper"]}>
      <TicketDataHeader ticket={ticket} />
      {ticket?.ticketStatus! === 2 ? (
        <>
          <TicketDataWorkers ticket={ticket} />
          <TicketDataInputs ticket={ticket} />
          <TicketDataControls />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TicketData;
