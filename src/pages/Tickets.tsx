import { useEffect } from "react";
import makeRequest from "../helpers/makeRequest";
import { setTickets } from "../features/ticketsSlice";
import { useDispatch, useSelector } from "react-redux";
import serverUrl from "../helpers/config";

const Tickets: React.FC = () => {
  const tickets = useSelector((state: ITicketList) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    const requestData = {
      nUser: 1,
      nPage: 1,
      nFilterType: 2,
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
      dispatch(setTickets(result));
    });
  }, []);

  const showNum = () => {
    console.log(tickets);
  };

  return <div onClick={showNum}>tickets</div>;
};

export default Tickets;
