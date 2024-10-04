import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserProfilePanel from "../../../../../components/user/UserProfilePanel";
describe("UserProfilePanel", (): void => {
  it("renders the user profile panel", (): void => {
    render(<UserProfilePanel />);
    (
      expect(screen.getByRole<HTMLImageElement>("img", { name: /user img/i })) as jest.JestMatchers<jest.SpyInstance>
    ).toBeInTheDocument() as void;
  }) as void;
  it("toggles the user profile dropdown on image click", (): void => {
    render(<UserProfilePanel />);
    fireEvent.click(screen.getByRole<HTMLImageElement>("img", { name: /user img/i })) as boolean;
    (
      expect(screen.getByText<HTMLElement>("Informações de Usuário")) as jest.JestMatchers<jest.SpyInstance>
    ).toBeInTheDocument() as void;
  }) as void;
}) as void;
