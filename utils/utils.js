const fs = require("fs");

const importProduct = () => {
  const fichier =
    "/media/cly/Disque1T/GIT-WORDPRESS/hmongcholetApi/data/test1.csv";
  //const fichier = "/home/kzsm4017/transfert/entree/test1.csv";
  const data = fs.readFileSync(fichier, "utf8");
  console.log("===> testcly :: data=", data);
};

module.exports = {
  importProduct,
};
