import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialTicketFilterState = {
  filterValue: 1,
};

const ticketSlice = createSlice({
  name: "ticketFilter",
  initialState: initialTicketFilterState,
  reducers: {
    setTicketFilter: (state, action: PayloadAction<number>) => {
      state.filterValue = action.payload;
    },
  },
});

export const { setTicketFilter } = ticketSlice.actions;

export default ticketSlice.reducer;
