const nodemailer = require('nodemailer');
<<<<<<< HEAD
require('dotenv').config();

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com',
            port: process.env.EMAIL_PORT || 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    }

    async sendProgressNotification(userEmail, step, data = {}) {
        const templates = {
            'registration': {
                subject: 'Welcome to ChooseWise!',
                html: `<h2>Welcome ${data.name}!</h2><p>Your account has been created successfully. Start your tech career journey now!</p>`
            },
            'assessment_started': {
                subject: 'Assessment Started - ChooseWise',
                html: `<h2>Assessment in Progress</h2><p>You've started your skill assessment. Complete it to get personalized recommendations.</p>`
            },
            'assessment_completed': {
                subject: 'Assessment Complete - Your Results Are Ready!',
                html: `<h2>Assessment Complete!</h2><p>Your skill assessment is done. Score: ${data.score || 'N/A'}. Check your personalized career recommendations.</p>`
            },
            'roadmap_generated': {
                subject: 'Your Personalized Roadmap is Ready!',
                html: `<h2>Roadmap Generated</h2><p>Your personalized learning roadmap for ${data.career || 'your chosen career'} is ready. Start learning today!</p>`
            },
            'course_enrolled': {
                subject: 'Course Enrollment Confirmed',
                html: `<h2>Course Enrolled</h2><p>You've successfully enrolled in: ${data.courseName || 'a course'}. Happy learning!</p>`
            },
            'job_applied': {
                subject: 'Job Application Submitted',
                html: `<h2>Application Sent</h2><p>Your application for ${data.jobTitle || 'the position'} has been submitted successfully.</p>`
            }
        };

        const template = templates[step];
        if (!template) return;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: template.subject,
            html: template.html
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log(`✅ Email sent for step: ${step} to ${userEmail}`);
        } catch (error) {
            console.error(`❌ Email failed for step: ${step}`, error.message);
        }
    }
=======

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  async sendWelcomeEmail(userEmail, userName) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: 'Welcome to ChooseWise - Your Tech Career Journey Begins!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb; text-align: center;">Welcome to ChooseWise!</h1>
          
          <p>Hi ${userName},</p>
          
          <p>Thank you for joining ChooseWise! We're excited to help you navigate your tech career journey with AI-powered guidance.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">What's Next?</h3>
            <ul style="color: #374151;">
              <li>🤖 Take our AI-powered skill assessment</li>
              <li>📊 Get personalized career recommendations</li>
              <li>🛣️ Access your custom learning roadmap</li>
              <li>💼 Discover matching job opportunities</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.WEBSITE_URL}/assessment.html" 
               style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Start Your Assessment
            </a>
          </div>
          
          <p>Need help? Our AI assistant is available 24/7 on the website, or you can reply to this email.</p>
          
          <p>Best regards,<br>The ChooseWise Team</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="font-size: 12px; color: #6b7280; text-align: center;">
            © 2024 ChooseWise. All rights reserved.
          </p>
        </div>
      `
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Welcome email sent successfully to:', userEmail);
      return { success: true };
    } catch (error) {
      console.error('Error sending welcome email:', error);
      return { success: false, error: error.message };
    }
  }
>>>>>>> 2a82523799225c0142dc889304a2b01974f04381
}

module.exports = new EmailService();