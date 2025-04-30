import mailgun from "mailgun-js";

const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });

export async function POST(req) {
  try {
    // Parse request body
    const { firstName, lastName, email, phone, service, message } =
      await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !service || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        {
          status: 400,
        }
      );
    }

    // Prepare email data
    const data = {
      from: `${firstName} ${lastName} <${email}>`,
      to: "laabousse@gmail.com",
      subject: `New Contact Form Submission - ${service}`,
      text: `
        You have a new contact form submission:

        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}

        Message:
        ${message}
      `,
    };

    // Send email
    await mg.messages().send(data);

    return new Response(
      JSON.stringify({ message: "Email sent successfully." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Mailgun Error:", error);
    return new Response(JSON.stringify({ error: "Error sending email." }), {
      status: 500,
    });
  }
}
