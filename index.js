import express from "express"
const router = express.Router();
import { connection } from "../db.js"

router.get('/', (req, res) => {
    res.send("Welcome to Alpine JS");
})

router.get('/courses', (req, res) => {
    connection.then(async db => {
        const courses = await db.query(`SELECT * FROM course; SELECT * FROM department`);
        console.log(courses)
        res.status(200).json(courses.recordsets)
    })
    
});



export default router