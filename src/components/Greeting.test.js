import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders 'Hello World!' as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //No action required for this test

    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test(`renders "good to see" if the button WAS NOT clicked`, () => {
    render(<Greeting />);
    const paraElement = screen.getByText("good to see", {exact: false});
    expect(paraElement).toBeInTheDocument();
  });

  test(`does not render "good to see" if the button WAS clicked`, () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const paraElement = screen.queryByText("good to see", {exact: false});
    expect(paraElement).toBeNull();
  });

  test(`renders "Changed!" if the button WAS clicked`, () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //Assert
    const paraElement = screen.getByText("Changed!");
    expect(paraElement).toBeInTheDocument();
  })
});
