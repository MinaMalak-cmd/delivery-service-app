import bodyParser from "body-parser";
import cors from "cors";

import { corsOptions } from "./utils/constants.js";
import connectDB from "../DB/connection.js";
import userRouter from "./modules/user/user.router.js";
import parcelRouter from "./modules/parcel/parcel.router.js";
import { globalErrorHandling } from "./utils/handlers.js";

const initApp = async (express) => {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors(corsOptions));

  await connectDB();

  app.use(`/user`, userRouter);
  app.use(`/parcel`, parcelRouter);
  app.use("*", (req, res, next) => {
    return res.json({ message: "In-valid Routing" });
  });

  app.use(globalErrorHandling);

  app.listen(port, () => console.log(`App listening on port ${port}!`));
};
export default initApp;
