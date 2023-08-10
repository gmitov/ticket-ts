import { useEffect } from "react";
import makeRequest from "../helpers/makeRequest";

const Tickets: React.FC = () => {
  useEffect(() => {
    const requestData = {
      nUser: 1,
      nPage: 1,
      nFilterType: 2,
    };

    const fetchTickets = () => {
      const response = makeRequest({
        method: "POST",
        url: "http://82.118.229.216:46887/returnTickets",
        body: requestData,
      });

      return response;
    };

    fetchTickets().then((result) => {
      console.log(result);
    });
  }, []);

  return <div>tickets</div>;
};

export default Tickets;
