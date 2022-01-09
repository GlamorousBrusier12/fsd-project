module.exports = (req, res, next) => {
  // console.log("Hello middleware");
  // res.header("Content-Range", "products 0-10/10");
  next();
};
