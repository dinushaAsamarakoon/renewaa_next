import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
  const details = await req.json();
  try {
    if (!details) {
      return new Response(
        JSON.stringify({
          status: "updatedValues is missing in the request body",
        }),
        {
          status: 400,
        }
      );
    }
    const { username, email, phone, subject, message } = details;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contactrenewaa@gmail.com",
        pass: "cbmiwsibpnpmjfrd",
      },
    });

    const mailOptions = {
      from: email,
      to: "info@renewaa.com",
      // to: "romanreings22261@gmail.com",
      subject: `New message from ${username}`,
      text: `
        Name: ${username}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    return new Promise<Response>((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          reject(
            new Response(
              JSON.stringify({
                status: "Error",
              }),
              {
                status: 500,
              }
            )
          );
        } else {
          console.log("Email sent: " + info.response);
          resolve(
            new Response(
              JSON.stringify({
                status: "Success",
              }),
              {
                status: 200,
              }
            )
          );
        }
      });
    });
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({ status: "An error occurred while sending email" }),
      {
        status: 500,
      }
    );
  }
}
