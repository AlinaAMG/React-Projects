// server.js
import express from "express";
import cors from "cors";
const app = express();
app.use(cors()); 
app.use(express.json());

app.post("/newsletter", (req, res) => {
  const { email, name, lastName } = req.body;
  
  if (!email || !name || !lastName) return res.status(400).json({ msg: "Please provide all values" });
  
  if (!email.includes("@")) {
    return res.status(400).json({ msg: "Please enter a valid email address" });
  }
  res.json("Data successfully send!");
});

app.listen(5000, () => console.log("Server running on port 5000"));