import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import serverUrl from "../helpers/config";
import makeRequest from "../helpers/makeRequest";

import { useSelector } from "react-redux";
import TicketDataHeader from "../components/tickets/TicketDataHeader";
import TicketDataWorkers from "../components/tickets/TicketDataWorkers";
import TicketDataInputs from "../components/tickets/TicketDataInputs";
import TicketDataControls from "../components/tickets/TicketDataControls";

import styles from "../components/tickets/TicketWrapper.module.css";

type UserType = {
  user: IUser;
};

type TicketType = {
  ticket: ITicketData;
};

const TicketData: React.FC = () => {
  const user = useSelector((state: UserType) => state.user);

  const [ticket, setTicket] = useState<ITicketData>();

  const { id } = useParams();

  //---------
  const updateTicketField = (
    fieldName: keyof ITicketData,
    value: ITicketData[keyof ITicketData]
  ) => {
    setTicket((prevTicket: any) => {
      if (fieldName === "otcheti") {
        const clonedOtcheti = [...prevTicket.otcheti]; // Clone the array
        clonedOtcheti.push(value); // Modify the cloned array
        return { ...prevTicket, [fieldName]: clonedOtcheti }; // Update the state with the new array
      }

      return {
        ...(prevTicket as ITicketData),
        [fieldName]: value,
      };
    });
  };

  const ticketChangeHandler = (
    ticketKey: keyof ITicketData,
    value: string | number
  ) => {
    updateTicketField(ticketKey, value);
  };

  //--------

  useEffect(() => {
    const requestData = {
      nUser: user.nUser,
      cobjTicket: id,
    };

    const fetchTickets = () => {
      const response = makeRequest<TicketType>({
        method: "POST",
        url: serverUrl + "/ticket/getData",
        body: requestData,
      });

      return response;
    };

    fetchTickets().then((result) => {
      setTicket(result.ticket);
      console.log(result.ticket);
    });
  }, []);

  return (
    <div className={styles["ticket-wrapper"]}>
      <TicketDataHeader
        ticket={ticket as ITicketData}
        ticketChangeHandler={ticketChangeHandler}
      />
      {ticket?.ticketStatus! === 2 ? (
        <>
          <TicketDataWorkers ticket={ticket?.helpers as IWorkerReport[]} />
          <TicketDataInputs ticket={ticket as ITicketData} />
          <TicketDataControls
            ticket={ticket as ITicketData}
            ticketChangeHandler={ticketChangeHandler}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TicketData;
