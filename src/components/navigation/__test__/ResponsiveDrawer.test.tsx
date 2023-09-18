import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import { BrowserRouter } from "react-router-dom";

import ResponsiveDrawer from "../../../components/navigation/ResponsiveDrawer";

const MockResponsiveDrawer = () => (
  <BrowserRouter>
    <ResponsiveDrawer />
  </BrowserRouter>
);

describe("BrowserRouter", () => {
  it("should render the browser router component", () => {
    render(<MockResponsiveDrawer />);

    const element = screen.getByText(/тикет система/i);

    expect(element).toBeInTheDocument();
  });
});
