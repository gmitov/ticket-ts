interface ITicket {
  EIK: string;
  cobjTicket: number;
  cobjUniqueRow: number;
  contragent: string;
  dateCreated: string;
  id: string;
  nomID: number;
  ticketBegDate: string;
  ticketEndDate: string;
  ticketHelpersAll: number;
  ticketHelpersRevision: number;
  ticketHelpersWorking: number;
  ticketPMSPlannedHours: number;
  ticketStatus: number;
  ticketTask: string;
}

interface ITicketList {
  tickets: ITicket[];
  activeTicket: ITicket;
  brTickets: number;
  message: string;
}
