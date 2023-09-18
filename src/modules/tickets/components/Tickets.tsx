import TicketFilter from "./TicketFilter";
import TicketList from "./TicketsList";
import { useTicketsData } from "../hooks/ticketHooks";

import { CircularSpinner } from "../../../components/spinners/CircularSpinner";
import { TicketPaginationWrapper } from "./TicketPaginationWrapper";

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
