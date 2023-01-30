var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET users listing. */
router.get("/", function (req, res, next) {
  //const fichier = "/media/cly/Disque1T/GIT-WORDPRESS/hmongcholetApi/data/test1.csv";
  const fichier = "/home/kzsm4017/transfert/entree/test1.csv";
  const data = fs.readFileSync(fichier, "utf8");
  console.log("===> testcly :: data=", data);
  res.send(data);
});

module.exports = router;
