import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserDlg from "../../../../../components/user/UserDlg";
describe("UserDlg", (): void => {
  const defaultProps = {
    user: { userClass: "coordenador", userArea: "nutrição", userEmail: "test@test.com", userTel: "123456789" },
    setDropdown: jest.fn() as jest.Mock,
    setPropDlg: jest.fn() as jest.Mock,
    setContact: jest.fn() as jest.Mock,
    setUserDlg: jest.fn() as jest.Mock,
    shouldShowDropdown: false,
    shouldDisplayPropDlg: false,
    shouldDisplayContact: false,
    shouldDisplayUserDlg: true,
    callLogout: jest.fn() as jest.Mock,
  };
  it("renders user details", (): void => {
    render(<UserDlg {...defaultProps} />);
    expect(screen.getByText<HTMLElement>("Coordenador")).toBeInTheDocument() as void;
    expect(screen.getByText<HTMLElement>("Nutrição")).toBeInTheDocument() as void;
    expect(screen.getByText<HTMLElement>("test@test.com")).toBeInTheDocument() as void;
    expect(screen.getByText<HTMLElement>("123456789")).toBeInTheDocument() as void;
  }) as void;
  it("opens the user properties dialog on button click", (): void => {
    render(<UserDlg {...defaultProps} />);
    fireEvent.click(screen.getByRole<HTMLButtonElement>("button", { name: /alteração/i })) as boolean;
    expect(defaultProps.setPropDlg).toHaveBeenCalledWith<Parameters<typeof defaultProps.setPropDlg>>(true) as void;
  }) as void;
  it("calls Location push on logout", (): void => {
    render(<UserDlg {...defaultProps} />);
    const link = screen.getByRole<HTMLAnchorElement>("link", { name: /login/i });
    fireEvent.click(link) as boolean;
    expect(location.pathname).toEqual("/login") as void;
  }) as void;
}) as void;
