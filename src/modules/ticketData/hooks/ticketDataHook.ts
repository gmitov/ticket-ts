import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import makeRequest from "../../../utils/makeRequest";

import serverUrl from "../../../utils/config";

type UserType = {
  user: IUser;
};

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

export const useTicket = () => {
  const user = useSelector((state: UserType) => state.user);

  const [ticket, setTicket] = useState<ITicketData>(ticketDefaultState);

  const { id } = useParams();

  //---------
  const updateTicketField = (
    fieldName: keyof ITicketData,
    value: ITicketData[keyof ITicketData]
  ) => {
    setTicket((prevTicket: ITicketData) => ({
      ...prevTicket,
      [fieldName]: value,
    }));
  };

  const ticketChangeHandler = (
    ticketKey: keyof ITicketData,
    value: ITicketData[keyof ITicketData]
  ) => {
    updateTicketField(ticketKey, value);
  };

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

  return { ticket, ticketChangeHandler };
};
