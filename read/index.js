const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(logger("dev"));

mongoose.connect(
  "mongodb+srv://doan:akucintalaw@payment-service.fkm0zwa.mongodb.net/?retryWrites=true&w=majority"
);
const Mahasiswa = mongoose.model("Mahasiswa", {
  npm: String,
  nama: String,
});

app.get("/read/:npm", (req, res) => {
  Mahasiswa.findOne({ npm: req.params.npm }, (err, mahasiswa) => {
    if (!err && mahasiswa)
      res.json({ status: "OK", npm: mahasiswa.npm, nama: mahasiswa.nama });
    else res.sendStatus(404);
  });
});

app.listen(80, () => {
  console.log("Read Service listening on port 80");
});
