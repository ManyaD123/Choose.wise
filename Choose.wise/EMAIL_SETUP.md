# Email Setup Guide

## Gmail Configuration

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Copy the 16-character password

## Environment Variables

Add these to your `.env` file:

```
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_16_character_app_password
WEBSITE_URL=http://localhost:5000
```

## Install Dependencies

```bash
npm install nodemailer
```

## Features Added

- ✅ Welcome email sent automatically on user registration
- ✅ Professional HTML email template
- ✅ Links to assessment and website features
- ✅ Error handling for email failures

## Testing

Register a new user through your website to test the email functionality.