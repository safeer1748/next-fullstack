"use server";

import { Resend } from "resend";

export interface SendEmailProps {
    email: string;
    subject: string;
    message: string;
}
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ email, subject, message }: SendEmailProps) {
    try {
        console.log(email,subject,message)
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['safeerkhan1748@gmail.com'],
            replyTo:email,
            subject: subject,
            text: message,
        });

        return { success: true };
    } catch (error) {
        return { success: false, error: (error as Error).message };
    }
}
