const express = require("express");
const router = express.Router();

const {
  wellnames,
  prod,
  welltest,
  inj,
  revpr,
} = require("../controller/controller");
router.get("/", wellnames);
router.get("/prod", prod);
router.get("/welltest", welltest);
router.get("/inj", inj);
router.get("/revpr", revpr);

module.exports = router;
