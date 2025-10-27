import { NextResponse } from "next/server";

export function generateErrorResponse(
	error: unknown,
	defaultMessage = "Unknown error occurred"
) {
	if (error instanceof Error) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
	return NextResponse.json({ message: defaultMessage }, { status: 500 });
}
