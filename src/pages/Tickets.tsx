import { useEffect, useState } from "react";
import makeRequest from "../helpers/makeRequest";
import { useSelector } from "react-redux";
import serverUrl from "../helpers/config";
import TicketList from "../components/tickets/TicketsList";
import TicketFilter from "../components/tickets/TicketFilter";
import { Grid } from "@mui/material";

const Tickets: React.FC = () => {
  const [tickets, setTickets] = useState<ITicket[]>();
  const user = useSelector((state: any) => state.user);
  const ticketFilterValue = useSelector((state: any) => state.tickets);

  useEffect(() => {
    const requestData = {
      nUser: user.nUser,
      nPage: 1,
      nFilterType: ticketFilterValue.filterValue,
    };

    const fetchTickets = () => {
      const response = makeRequest<ITicketList>({
        method: "POST",
        url: serverUrl + "/returnTickets",
        body: requestData,
      });

      return response;
    };

    fetchTickets().then((result) => {
      setTickets(result.tickets);
    });
  }, [ticketFilterValue]);

  return (
    <>
      <TicketFilter></TicketFilter>

      <Grid container>
        {tickets?.length! > 0 ? (
          <TicketList tickets={tickets!} />
        ) : (
          <p>Няма намерени тикети от този вид.</p>
        )}
      </Grid>
    </>
  );
};

export default Tickets;
