const initApp = async (express) => {
  const app = express();
  const port = process.env.PORT || 5000;
  app.use(`/`, res.send("Hello World"));
  app.use("*", (req, res, next) => {
    return res.json({ message: "In-valid Routing" });
  });
  app.listen(port, () => console.log(`App listening on port ${port}!`));
};
export default initApp;
