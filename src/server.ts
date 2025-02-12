import "dotenv/config";
import express, { Application, Request, Response } from "express";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";

import { routes } from "./routes.js";

class Server {
  public app: Application;
  private port: number | string;

  constructor(port: number | string) {
    this.app = express();
    this.port = port;
    this.config();
    this.routes();
  }

  private config(): void {
    // Middleware to parse JSON bodies
    this.app.use(express.json());
    this.app.use(logger("combined"));
    this.app.use(helmet());
    this.app.use(cors()); // Enable CORS for all routes
  }

  private routes(): void {
    // Basic route
    this.app.use(routes);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

const server = new Server(Number(process.env.PORT) || 3333);
server.start();
