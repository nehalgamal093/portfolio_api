const express = require("express");
const mongoose = require("mongoose");
const Project = require("./models/project");
const Certificate = require("./models/certificates");
const Download = require('./models/download')
const cors = require("cors");

const PORT = 2000;
const Db =
  "mongodb+srv://nehal:DIkDlhDiSCSMBLso@cluster0.evxec8w.mongodb.net/?retryWrites=true&w=majority";
const app = express();

app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", false);
mongoose
  .connect(Db)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/projects/get-project", async (req, res) => {
  try {
    const project = await Project.find({});
    res.json(project);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/projects/post-project", async (req, res) => {
  const newProject = new Project({ ...req.body });
  const insertProject = await newProject.save();
  return res.status(201).json(insertProject);
});
//Certificate
app.get("/projects/get-cert", async (req, res) => {
  try {
    const certificate = await Certificate.find({});
    res.json(certificate);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/projects/post-cert", async (req, res) => {
  const newCertificate = new Certificate({ ...req.body });
  const insertCertificate = await newCertificate.save();
  return res.status(201).json(insertCertificate);
});
//Download
app.get("/projects/get-download", async (req, res) => {
  try {
    const download = await Download.find({});
    res.json(download);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/projects/post-download", async (req, res) => {
  const newDownload = new Download({ ...req.body });
  const insertDownload = await newDownload.save();
  return res.status(201).json(insertDownload);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
