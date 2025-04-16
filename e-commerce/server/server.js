import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const filePath = "./cartData.json";

app.post("/add-to-cart", (req, res) => {
    console.log(req.body);

    const newCourse = req.body;

    let cart = [];

    if (fs.existsSync(filePath)) {
        try {
            const data = fs.readFileSync(filePath, "utf-8");
            cart = JSON.parse(data || "[]"); // fallback to empty array
        } catch (err) {
            console.error("Invalid JSON in cartData.json:", err.message);
            cart = []; // fallback to clean state
        }
    }


    cart.push(newCourse);
    fs.writeFileSync(filePath, JSON.stringify(cart, null, 2));

    res.send({ message: "Course added to cart" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
