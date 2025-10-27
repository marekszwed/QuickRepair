import "server-only";

import jwt from "jsonwebtoken";

import { NextResponse } from "next/server";

const SECRET = process.env.JWT_SECRET;

export function createToken(payload: object) {
	return jwt.sign(payload, SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
	return jwt.verify(token, SECRET);
}

export function setAuthToken(res: NextResponse, token: string) {
	res.cookies.set({
		name: "authToken",
		value: token,
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		path: "/",
		maxAge: 7 * 24 * 60 * 60,
		sameSite: "lax",
	});
}

export function deleteToken(res: NextResponse, token: string) {
	res.cookies.delete({ name: "authToken", path: "/" });
}
