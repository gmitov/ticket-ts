import { useEffect, useState } from "react";
import makeRequest from "../helpers/makeRequest";
import { useSelector } from "react-redux";
import serverUrl from "../helpers/config";
import TicketList from "../components/tickets/TicketsList";
import TicketFilter from "../components/tickets/TicketFilter";

const Tickets: React.FC = () => {
  const user = useSelector((state: any) => state.user);

  const [tickets, setTickets] = useState<ITicket[]>();

  const [filterValue, setFilterValue] = useState<number>(1);

  const filterValueHandler = (newFilterValue: number) => {
    setFilterValue(newFilterValue);
  };

  useEffect(() => {
    const requestData = {
      nUser: user.nUser,
      nPage: 1,
      nFilterType: filterValue,
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
  }, [filterValue]);

  return (
    <>
      <TicketFilter filterValueHandler={filterValueHandler}></TicketFilter>
      {tickets?.length! > 0 ? (
        <TicketList tickets={tickets!} />
      ) : (
        <p>Няма намерени тикети от този вид.</p>
      )}
    </>
  );
};

export default Tickets;
