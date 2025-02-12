import { Router, Request, Response } from "express";
import { payment } from "./mercadopago.js";

export const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  response.json({ msg: "Success@!" });
});

routes.post("/pix", (request: Request, response: Response) => {
  const { value, description, email } = request.body;
  const payload = {
    body: {
      transaction_amount: value,
      description,
      payment_method_id: "pix",
      payer: {
        email,
      },
    },
  };

  payment
    .create(payload)
    .then((res: any) => {
      console.log(res);
      response.status(200).json(res.point_of_interaction.transaction_data);
    })
    .catch((error) => {
      response.status(400).json(error.message);
    });
});
