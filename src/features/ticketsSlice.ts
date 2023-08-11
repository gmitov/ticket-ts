import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialTicketsState: ITicketList = {
  tickets: [],
  activeTicket: {
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
  brTickets: 0,
  message: "",
};

const ticketSlice = createSlice({
  name: "tickets",
  initialState: initialTicketsState,
  reducers: {
    setTickets: (state, action: PayloadAction<ITicketList>) => {
      // console.log(action.payload);

      action.payload.tickets.forEach((ticket: ITicket) => {
        state.tickets.push(ticket);
      });
    },
  },
});

export const { setTickets } = ticketSlice.actions;

export default ticketSlice.reducer;
