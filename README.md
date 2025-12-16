# Web Technologies 2 – BMI Calculator

## 📘 Description

This project is a **BMI (Body Mass Index) Calculator web application** developed using **Node.js and Express.js**.
The application allows users to input their height and weight, calculates their BMI, and displays the result along with the corresponding health category.

The project is created as part of the **Web Technologies 2** course and demonstrates basic backend routing and HTTP request handling in Node.js.

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* HTML
* CSS

---

## 📁 Project Structure

```
web-technologies-2/
├── app.js
├── package.json
├── public/
│   └── style.css
└── views/
    └── index.html
```

---

## ⚙️ Installation and Running

1. Clone the repository:

```bash
git clone <repository-link>
cd web-technologies-2
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node app.js
```

4. Open your browser and go to:

```
http://localhost:3000
```

---

## 📐 BMI Calculation Logic

BMI is calculated using the following formula:

```
BMI = weight (kg) / height² (m)
```

### BMI Categories:

* **Underweight:** BMI < 18.5
* **Normal weight:** 18.5 ≤ BMI < 24.9
* **Overweight:** 25 ≤ BMI < 29.9
* **Obese:** BMI ≥ 30

---

## 🌐 Application Routes

* **GET /** – Displays the BMI input form
* **POST /calculate-bmi** – Calculates BMI and displays the result

---

## 🎨 User Interface Features

* Clean and responsive design
* Input validation for height and weight
* Color-coded BMI result display
* Simple and user-friendly layout

---

## 🎯 Learning Objectives

* Create and run a Node.js server
* Use Express routing
* Handle GET and POST requests
* Process form data
* Apply basic front-end styling

---

## 👤 Author

Tamerlan Khassenov SE-2416


