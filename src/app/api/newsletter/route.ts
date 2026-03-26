import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || typeof email !== "string") {
            return NextResponse.json(
                { error: "Email is required." },
                { status: 400 },
            );
        }

        const trimmed = email.trim().toLowerCase();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
            return NextResponse.json(
                { error: "Please enter a valid email address." },
                { status: 400 },
            );
        }

        const apiKey = process.env.RESEND_API_KEY;
        const audienceId = process.env.RESEND_AUDIENCE_ID;

        if (!apiKey || !audienceId) {
            return NextResponse.json(
                { error: "Newsletter is not configured yet." },
                { status: 500 },
            );
        }

        const resend = new Resend(apiKey);

        const { error } = await resend.contacts.create({
            email: trimmed,
            audienceId,
        });

        if (error) {
            if (error.message?.includes("already exists")) {
                return NextResponse.json({ message: "You're already subscribed!" });
            }
            return NextResponse.json(
                { error: "Could not subscribe. Please try again." },
                { status: 500 },
            );
        }

        return NextResponse.json({ message: "Thanks for subscribing!" });
    } catch {
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 },
        );
    }
}
