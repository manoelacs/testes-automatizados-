import React from "react";
import { render } from "@testing-library/react";
import Transacao from "./Transacao";

describe("Coponente de transação do extrato", () => {
  it(" O snapshot do component deve permacer sempre o mesmo", () => {
    const { container } = render(
      <Transacao data="03/12/2021" tipo="saque" valor="20.00" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("Quando eu realizo uma nova transação");
});
