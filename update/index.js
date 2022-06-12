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

app.post("/update", (req, res) => {
  new Mahasiswa(req.body).save();

  res.json({
    status: "OK",
  });
});

app.listen(80, () => {
  console.log("Update Service listening on port 80");
});
