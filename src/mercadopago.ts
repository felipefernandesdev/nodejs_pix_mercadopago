import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: String(process.env.ACCESS_TOKEN_MP),
  options: { timeout: 5000 },
});

export const payment = new Payment(client);
