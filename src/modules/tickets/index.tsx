import TicketFilter from "./components/TicketFilter";
import TicketList from "./components/TicketsList";
import { useTicketsData } from "./hooks/ticketHooks";

import { CircularSpinner } from "../../components/spinners/CircularSpinner";
import { TicketPaginationWrapper } from "./components/TicketPaginationWrapper";

export const TicketsPage: React.FC = () => {
  const { tickets, ticketsCount, loading } = useTicketsData();

  if (loading) {
    return <CircularSpinner />;
  }

  return (
    <>
      <TicketFilter />
      <TicketList tickets={tickets} />
      <TicketPaginationWrapper ticketsCount={ticketsCount} />
    </>
  );
};
