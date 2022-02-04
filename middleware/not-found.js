const notFoundMiddleware = (req, res) => {
  res.status(404).send("Page not found");
};

export default notFoundMiddleware;
