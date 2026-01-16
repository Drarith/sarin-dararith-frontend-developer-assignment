import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../app/page";

describe("Home Page", () => {
  it("renders the heading", async () => {
    const HomeComponent = await Home();
    render(HomeComponent);
    const heading = screen.getByText(/Thank you for considering me./i);
    expect(heading).toBeInTheDocument();
  });
});
