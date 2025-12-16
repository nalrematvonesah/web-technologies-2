const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// POST
app.post("/calculate-bmi", (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
    return res.send("<h2>Invalid input. Height and weight must be positive numbers.</h2><a href='/'>Go back</a>");
  }

  const bmi = weight / (height * height);
  let category = "";
  let color = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "blue";
  } else if (bmi < 24.9) {
    category = "Normal";
    color = "green";
  } else if (bmi < 29.9) {
    category = "Overweight";
    color = "orange";
  } else {
    category = "Obese";
    color = "red";
  }

  res.send(`
    <h1>Your BMI Result</h1>
    <h2 style="color:${color}">
      BMI: ${bmi.toFixed(2)} – ${category}
    </h2>
    <a href="/">Calculate again</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
