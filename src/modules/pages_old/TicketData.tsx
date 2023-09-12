import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import serverUrl from "../../utils/config";
import makeRequest from "../../utils/makeRequest";

import { useSelector } from "react-redux";
// import TicketDataHeader from "../modules/statistics/components/TicketDataHeader";
// import TicketDataWorkers from "../modules/statistics/components/TicketDataWorkers";
// import TicketDataInputs from "../modules/statistics/components/TicketDataInputs";
// import TicketDataControls from "../modules/statistics/components/TicketDataControls";

import styles from "../components/tickets/TicketWrapper.module.css";

type TicketType = {
  ticket: ITicketData;
};

const ticketDefaultState = {
  cobjTicket: 0,
  cobjUniqueRow: 0,
  contragent: "",
  dateCreated: "",
  eik: "",
  helpers: [],
  nomID: 0,
  otcheti: [],
  ticketBegDate: "",
  ticketEndDate: "",
  ticketLevel: 0,
  ticketPMSContactPerson: "",
  ticketPMSContactPhone: "",
  ticketPMSDeinostManager: "",
  ticketPMSDogName: "",
  ticketPMSObject: "",
  ticketPMSPlaceLocation: "",
  ticketPMSPlannedHours: 0,
  ticketPMSPriority: 0,
  ticketPMSProjName: "",
  ticketPMSTOName: "",
  ticketPMSTaskName: "",
  ticketPMSTrader: "",
  ticketStartWorkDate: "",
  ticketStatus: 0,
  ticketStatusFinishedDate: 0,
  ticketStatusFinishedFrom: "",
  ticketTask: "",
  ticketTaskLeader: "",
  ticketTeam: "",
};

const TicketData: React.FC = () => {
  const user = useSelector((state: UserType) => state.user);

  const [ticket, setTicket] = useState<ITicketData>(ticketDefaultState);

  const { id } = useParams();

  //---------
  const updateTicketField = (
    fieldName: keyof ITicketData,
    value: ITicketData[keyof ITicketData]
  ) => {
    setTicket(
      (prevTicket: ITicketData) => ({ ...prevTicket, [fieldName]: value })

      // {
      //   // if (fieldName === "otcheti") {
      //   //   const clonedOtcheti = [...prevTicket.otcheti]; // Clone the array
      //   //   clonedOtcheti.push(value); // Modify the cloned array
      //   //   return { ...prevTicket, [fieldName]: clonedOtcheti }; // Update the state with the new array
      //   // }

      //   return {
      //     ...prevTicket,
      //     [fieldName]: value,
      //   };
      // }
    );
  };

  const ticketChangeHandler = (
    ticketKey: keyof ITicketData,
    value: ITicketData[keyof ITicketData]
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
    <></>
    // <div className={styles["ticket-wrapper"]}>
    //   <TicketDataHeader
    //     ticket={ticket}
    //     ticketChangeHandler={ticketChangeHandler}
    //   />
    //   {ticket?.ticketStatus! === 2 && ticket?.helpers ? (
    //     <>
    //       <TicketDataWorkers ticket={ticket.helpers} />
    //       <TicketDataInputs ticket={ticket} />
    //       <TicketDataControls
    //         ticket={ticket}
    //         ticketChangeHandler={ticketChangeHandler}
    //       />
    //     </>
    //   ) : (
    //     <></>
    //   )}
    // </div>
  );
};

export default TicketData;
