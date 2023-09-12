import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import makeRequest from "../../../utils/makeRequest";

import serverUrl from "../../../utils/config";

const ticketsInitialValue = [
  {
    EIK: "",
    cobjTicket: 0,
    cobjUniqueRow: 0,
    contragent: "",
    dateCreated: "",
    id: "",
    nomID: 0,
    ticketBegDate: "",
    ticketEndDate: "",
    ticketHelpersAll: 0,
    ticketHelpersRevision: 0,
    ticketHelpersWorking: 0,
    ticketPMSPlannedHours: 0,
    ticketStatus: 0,
    ticketTask: "",
  },
];

export const useTicketsData = () => {
  //: [ITicket[], number, boolean, string] -- this should be added if we want to use array destructuring / instead we are using object destructuring
  const [tickets, setTickets] = useState<ITicket[]>(ticketsInitialValue);
  const [ticketsCount, setTicketsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = useSelector((state: UserType) => state.user);

  const ticketFilterValue = useSelector(
    (state: FilterType) => state.ticketFilter
  );

  const activaPage = useSelector(
    (state: ActivePageType) => state.ticketFilter.activePage
  );

  useEffect(() => {
    const requestData = {
      nUser: user.nUser,
      nPage: activaPage,
      nFilterType: ticketFilterValue.filterValue,
    };

    const fetchTickets = () => {
      setLoading(true);

      const response = makeRequest<ITicketList>({
        method: "POST",
        url: serverUrl + "/returnTickets",
        body: requestData,
      });

      return response;
    };

    fetchTickets()
      .then((result) => {
        setTimeout(() => {
          console.log(result);
          setTickets(result.tickets);
          setTicketsCount(result.brTickets);

          setLoading(false);
        }, 700);
      })
      .catch((error) => {
        setError(error);
      });
  }, [ticketFilterValue, activaPage]);

  return { tickets, ticketsCount, loading, error };
};
