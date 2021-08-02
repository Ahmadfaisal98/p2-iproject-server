class ApiController {
  static grammerCheck(req, res, next) {
    res.send(req.grammerCheck);
  }
}

module.exports = ApiController;
