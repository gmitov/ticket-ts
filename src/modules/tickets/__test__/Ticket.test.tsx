import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { BrowserRouter } from "react-router-dom";

import Ticket from "../components/Ticket";

const mockedTicketData = {
  EIK: "123123123",
  cobjTicket: 1,
  cobjUniqueRow: 2,
  contragent: "Pesho",
  dateCreated: "12.12.2023",
  id: "1",
  nomID: 1,
  ticketBegDate: "12.12.2023",
  ticketEndDate: "13.12.2023",
  ticketHelpersAll: 5,
  ticketHelpersRevision: 1,
  ticketHelpersWorking: 3,
  ticketPMSPlannedHours: 23,
  ticketStatus: 1,
  ticketTask: "Да се направи басейн",
};

const MockTicket = () => (
  <BrowserRouter>
    <Ticket ticket={mockedTicketData} />
  </BrowserRouter>
);

describe("Ticket", () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers()
  })

  it("should render the browser router component", () => {
    render(<MockTicket />);

    const element = screen.getByText(/Да се направи басейн/i);

    expect(element).toBeInTheDocument();
  });
});
