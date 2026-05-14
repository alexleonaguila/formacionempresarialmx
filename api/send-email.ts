import { Resend } from 'resend';
import { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, company, email, phone, message } = req.body;

    // Validación básica
    if (!name || !email || !company) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    // Enviar correo a info@formacionempresarialmx.com
    const result = await resend.emails.send({
      from: 'noreply@formacionempresarialmx.com',
      to: 'info@formacionempresarialmx.com',
      subject: `Nueva solicitud de información de ${name}`,
      html: `
        <h2>Nueva Solicitud de Información</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message || 'Sin mensaje adicional'}</p>
      `,
    });

    // Enviar correo de confirmación al usuario
    await resend.emails.send({
      from: 'noreply@formacionempresarialmx.com',
      to: email,
      subject: 'Hemos recibido tu solicitud',
      html: `
        <h2>¡Gracias por contactarnos!</h2>
        <p>Hola ${name},</p>
        <p>Hemos recibido tu solicitud de información. Un asesor especializado en tu industria te contactará en menos de 24 horas.</p>
        <p>Si tienes cualquier pregunta, no dudes en responder a este correo.</p>
        <p>Saludos cordiales,<br/>Equipo de Formación Empresarial</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Correos enviados exitosamente' });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    res.status(500).json({ error: 'Error al enviar el correo' });
  }
};
