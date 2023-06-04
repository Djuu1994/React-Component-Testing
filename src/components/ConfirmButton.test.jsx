import ConfirmButton from "./ConfirmButton";
import { describe, it, expect } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByImage,
} from "@testing-library/react";


describe("Check if button defined", () => {
  it("see if everything is defined", () => {
    const confirmButton = render(<ConfirmButton />);
    expect(confirmButton).toBeDefined();

    screen.debug()
  });
});