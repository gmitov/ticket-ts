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

interface IReport {
  otchetCharacter: number;
  otchetDate: string;
  otchetID: string;
  otchetText: string;
  otchetTime: string;
}

interface ITicketData {
  cobjTicket: number;
  cobjUniqueRow: number;
  contragent: string;
  dateCreated: string;
  eik: string;
  helpers: IWorkerReport[];
  nomID: number;
  otcheti: IReport[];
  ticketBegDate: string;
  ticketEndDate: string;
  ticketLevel: number;
  ticketPMSContactPerson: string;
  ticketPMSContactPhone: string;
  ticketPMSDeinostManager: string;
  ticketPMSDogName: string;
  ticketPMSObject: string;
  ticketPMSPlaceLocation: string;
  ticketPMSPlannedHours: number;
  ticketPMSPriority: number;
  ticketPMSProjName: string;
  ticketPMSTOName: string;
  ticketPMSTaskName: string;
  ticketPMSTrader: string;
  ticketStartWorkDate: string;
  ticketStatus: number;
  ticketStatusFinishedDate: number;
  ticketStatusFinishedFrom: string;
  ticketTask: string;
  ticketTaskLeader: string;
  ticketTeam: string;
}

interface IReport {
  otchetCharacter: number;
  otchetDate: string;
  otchetID: string;
  otchetText: string;
  otchetTime: string;
}

interface IWorkerReport {
  helperTask: string;
  helperTaskEndDate: string;
  helperTaskStatus: number;
  helperTaskSumTime: string;
  nHelperName: string;
  nHelperRow: number;
}
