import bodyParser from "body-parser";
import cors from "cors";

import { corsOptions } from "./utils/constants.js";
import userRouter from "./modules/user/user.router.js";
import connectDB from "../DB/connection.js";

const initApp = async (express) => {
  const app = express();
  const port = process.env.PORT || 5000;

  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors(corsOptions));

  await connectDB();
  app.use(`/user`, userRouter);
  app.use("*", (req, res, next) => {
    return res.json({ message: "In-valid Routing" });
  });
  app.listen(port, () => console.log(`App listening on port ${port}!`));
};
export default initApp;
