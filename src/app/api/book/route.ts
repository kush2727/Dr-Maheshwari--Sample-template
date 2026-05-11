import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, treatment, date, message } = body;

    // Basic Server-side Validation
    if (!name || !phone || !email || !treatment || !date) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // ------------------------------------------------------------------
    // TODO: Integration Point
    // Here is where you would connect to an Email service (like Resend)
    // or a Database (like Prisma/MongoDB). 
    //
    // Example Resend Integration:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'clinic@drmaheshwari.com',
    //   subject: `New Consultation Request: ${name}`,
    //   html: `<p>Name: ${name}</p><p>Phone: ${phone}</p>...`
    // });
    // ------------------------------------------------------------------

    // Simulate network delay for the placeholder
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("New booking received:", { name, phone, email, treatment, date, message });

    return NextResponse.json(
      { success: true, message: "Booking request received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
