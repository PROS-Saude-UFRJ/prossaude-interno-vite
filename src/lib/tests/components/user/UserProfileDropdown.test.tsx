import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserProfileDropdown from "../../../../../components/user/UserProfileDropdown";
describe("UserProfileDropdown", (): void => {
  const user = {
      loadedData: {
        name: "John Doe",
        privilege: "coordenador",
        area: "nutrição",
        email: "test@test.com",
        telephone: "123456789",
      },
    },
    setDropdown: jest.Mock<any, any, any> = jest.fn() as jest.Mock,
    shouldShowDropdown = true;
  it("renders user profile details", (): void => {
    render(<UserProfileDropdown user={user} setDropdown={setDropdown} shouldShowDropdown={shouldShowDropdown} />);
    (
      expect(screen.getByText<HTMLElement>("Coordenador")) as jest.JestMatchers<jest.SpyInstance>
    ).toBeInTheDocument() as void;
    (
      expect(screen.getByText<HTMLElement>("Nutrição")) as jest.JestMatchers<jest.SpyInstance>
    ).toBeInTheDocument() as void;
    (
      expect(screen.getByText<HTMLElement>("test@test.com")) as jest.JestMatchers<jest.SpyInstance>
    ).toBeInTheDocument() as void;
    (
      expect(screen.getByText<HTMLElement>("123456789")) as jest.JestMatchers<jest.SpyInstance>
    ).toBeInTheDocument() as void;
  }) as void;
  it("toggles the contact dialog on button click", (): void => {
    render(<UserProfileDropdown user={user} setDropdown={setDropdown} shouldShowDropdown={shouldShowDropdown} />);
    fireEvent.click(screen.getByRole<HTMLButtonElement>("button", { name: /contato/i })) as boolean;
    (
      expect(screen.getByText<HTMLFormElement>("Formulário de Contato")) as jest.JestMatchers<jest.SpyInstance>
    ).toBeInTheDocument() as void;
  }) as void;
}) as void;
