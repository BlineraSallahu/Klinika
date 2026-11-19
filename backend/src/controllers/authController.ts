
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../config/db";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // 1. Kontrollimi i te dhenave
    if (!email || !password) {
      return res.status(400).json({
        message: "Email dhe password jane te detyrueshem!"
      });
    }

    // 2. Kerkimi i perdoruesit ne databaze
    const result = await pool.query(
      `SELECT
         u.id,
         u.first_name,
         u.last_name,
         u.email,
         u.password_hash,
         r.name AS role
       FROM users u
       JOIN roles r ON u.role_id = r.id
       WHERE LOWER(u.email) = LOWER($1)
       LIMIT 1`,
      [email.trim()]
    );

    // 3. Kontrollimi nese ekziston perdoruesi
    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "Email ose password i pasakte!"
      });
    }

    const user = result.rows[0];

    // 4. Verifikimi i password-it me bcrypt
    const isPasswordValid = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Email ose password i pasakte!"
      });
    }

    // 5. Kontrollimi i JWT_SECRET
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error("JWT_SECRET nuk eshte konfiguruar!");
    }

    // 6. Krijimi i JWT Token
    const token = jwt.sign(
      {
        userId: user.id,
        role: user.role
      },
      jwtSecret,
      {
        expiresIn: "1h"
      }
    );

    // 7. Pergjigjja pas Login-it
    return res.status(200).json({
      message: "Kyçja u realizua me sukses!",
      token,
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error("Gabim gjate Login-it:", error);

    return res.status(500).json({
      message: "Gabim ne server!"
    });
  }
};
