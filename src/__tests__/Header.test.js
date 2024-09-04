import { render,screen } from "@testing-library/react";
import Netflix from "../Pages/Netflix/Netflix";

test ("Should load header component",()=>{
  render(<Netflix />)

//  const footer = screen.getByRole("footer");
//  expect(footer).toBeInTheDocument();
})