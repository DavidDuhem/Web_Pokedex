// Load environment variables
import "dotenv/config";

// Import dependencies
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
import { router } from "./src/router.js";
import { bodySanitizerMiddleware } from "./src/middlewares/body-sanitizer.js";

const app = express();

app.use(cors(process.env.ALLOWED_DOMAINS || "*"));

app.disable("x-powered-by");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(bodySanitizerMiddleware);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
  console.log(`Docs Swagger sur http://localhost:${port}/api-docs`);
});
