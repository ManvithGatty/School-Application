import express from "express";
import multer from "multer";
import db from "./db.js";

const router = express.Router();

// Image upload
const storage = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

// Add School
router.post("/", upload.single("image"), (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;
  const image = req.file ? req.file.filename : null;

  const sql = `INSERT INTO schools (name, address, city, state, contact, email_id, image) 
               VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(sql, [name, address, city, state, contact, email_id, image], (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(201).json({ message: "School added successfully" });
  });
});

// Get Schools
router.get("/", (req, res) => {
  const sql = "SELECT * FROM schools";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(results);
  });
});

export default router;
