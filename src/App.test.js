import App, { calcularNovoSaldo } from "./App";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Componente principal", () => {
  describe("Quando eu abro o app do banco", () => {
    it("O nome é exibido", () => {
      render(<App />);
      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });

    it("O saldo é exibido", () => {
      render(<App />);
      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });

    it("O botão de realizar transação é exibido", () => {
      render(<App />);
      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });

  describe("Quando eu realizo uma transação", () => {
    it("que é um saque, o valor vai diminuir", () => {
      const valores = {
        transacao: "saldo",
        valor: 50,
      };
      const saldo = 150;

      const novoSaldo = calcularNovoSaldo(valores, saldo);
      expect(novoSaldo).toBe(100);
    });
    it("", () => {
      render(<App />);

      const saldo = screen.getByText("R$ 1000");
      const transacao = screen.getByLabelText("Saque");
      const valor = screen.getByTestId("valor");
      const botaoTransacao = screen.getByText("Realizar operação");

      expect(saldo.TextContent).toBe("RS 1000");

      fireEvent.click(transacao, { target: { value: "saque" } });
      fireEvent.change(valor, { target: { value: 10 } });
      fireEvent.click(botaoTransacao);

      //expect(saldo.TextContent).toBe("RS 990");
    });
  });
});
