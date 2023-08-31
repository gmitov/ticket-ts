import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialTicketFilterState = {
  filterValue: 1,
  activePage: 1,
};

const ticketSlice = createSlice({
  name: "ticketFilter",
  initialState: initialTicketFilterState,
  reducers: {
    setTicketFilter: (state, action: PayloadAction<number>) => {
      state.filterValue = action.payload;
    },
    setActivePage: (state, action: PayloadAction<number>) => {
      state.activePage = action.payload;
    },
  },
});

export const { setTicketFilter, setActivePage } = ticketSlice.actions;

export default ticketSlice.reducer;
