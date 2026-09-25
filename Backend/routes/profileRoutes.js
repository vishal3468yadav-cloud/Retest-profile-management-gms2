import express from "express";
import pool from "../config/db.js";

const router = express.Router();

router.post("/profiles", async (req, res) => {
    const { name, email, phone, address, age } = req.body;

    const result = await pool.query(
        `INSERT INTO profiles
        (name, email, phone, address, age)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`,
        [name, email, phone, address, age]
    );

    res.status(201).json({
        message: "Profile created successfully",
        data: result.rows[0]
    });
});

router.get("/profiles", async (req, res) => {
    const result = await pool.query(
        "SELECT * FROM profiles ORDER BY id"
    );

    res.status(200).json(result.rows);
});

router.get("/profiles/:id", async (req, res) => {
    const profileId = req.params.id;

    const result = await pool.query(
        `SELECT * FROM profiles
        WHERE id = $1`,
        [profileId]
    );

    if (result.rows.length === 0) {
        return res.status(404).json({
            message: "Profile not found"
        });
    }

    res.status(200).json({
        data: result.rows[0]
    });
});

router.put("/profiles/:id", async (req, res) => {
    const profileId = req.params.id;

    const { name, email, phone, address, age } = req.body;

    const result = await pool.query(
        `UPDATE profiles
        SET name = $1,
            email = $2,
            phone = $3,
            address = $4,
            age = $5,
            "updatedAt" = NOW()
        WHERE id = $6
        RETURNING *`,
        [name, email, phone, address, age, profileId]
    );

    if (result.rows.length === 0) {
        return res.status(404).json({
            message: "Profile not found"
        });
    }

    res.status(200).json({
        message: "Profile updated successfully",
        data: result.rows[0]
    });
});

router.delete("/profiles/:id", async (req, res) => {
    const profileId = req.params.id;

    const result = await pool.query(
        `DELETE FROM profiles
        WHERE id = $1
        RETURNING *`,
        [profileId]
    );

    if (result.rows.length === 0) {
        return res.status(404).json({
            message: "Profile not found"
        });
    }

    res.status(200).json({
        message: "Profile deleted successfully"
    });
});

export default router;