import dotenv from "dotenv"
import express, { json } from 'express';


dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());


app.get("/api/users", (req, res) => {

    const response = {
        "message": "true",
        "success": "Hi from the backend!"
    }

    res.status(200).json(response)

})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
