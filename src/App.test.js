import App, { calcularNovoSaldo } from "./App";
import React from "react";
import { render, screen } from "@testing-library/react";

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
    const valores = {
      transacao: "saldo",
      valor: 50,
    };
    const saldo = 150;

    const novoSaldo = calcularNovoSaldo(valores, saldo);
    expect(novoSaldo).toBe(100);
  });
});
