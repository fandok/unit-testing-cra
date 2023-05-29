import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders and get edit text", () => {
  render(<App />);
  const editText = screen.getByText(/save to reload/);
  expect(editText).toBeInTheDocument();
});

test("renders and can click button", () => {
  console.log = jest.fn();
  render(<App />);
  const buttonComponent = screen.getByText("Bisa diklik");
  expect(buttonComponent).toBeInTheDocument();
  fireEvent.click(buttonComponent);
  expect(console.log).toHaveBeenCalledWith("test");
});
