<<<<<<< HEAD
# Email Notification Setup

## Overview
The email notification system tracks user progress and sends appropriate emails after each step:
- Registration welcome email
- Assessment started notification
- Assessment completion with score
- Roadmap generation confirmation
- Course enrollment confirmation
- Job application confirmation

## Quick Setup

1. **Install Dependencies**
   ```bash
   npm install nodemailer dotenv
   ```
   Or run: `install-email.bat`

2. **Configure Environment**
   - Copy `.env.example` to `.env`
   - Update email settings:
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

3. **Gmail Setup** (if using Gmail)
   - Enable 2-factor authentication
   - Generate app password: https://myaccount.google.com/apppasswords
   - Use app password in EMAIL_PASS

## Usage

The system automatically tracks:
- `ProgressTracker.trackAssessmentStart()` - When user starts assessment
- `ProgressTracker.trackAssessmentComplete(score)` - When assessment is finished
- `ProgressTracker.trackRoadmapGenerated(career)` - When roadmap is viewed
- `ProgressTracker.trackCourseEnrolled(courseName)` - When course is enrolled
- `ProgressTracker.trackJobApplied(jobTitle)` - When job application is submitted

## Files Modified
- `backend.js` - Added email service and progress endpoints
- `services/emailService.js` - Email templates and sending logic
- `js/progressTracker.js` - Client-side progress tracking
- `assessment.js` - Added tracking calls
- `index.html` & `assessment.html` - Added progress tracker script

## Testing
1. Start server: `npm start`
2. Register a new account (check email)
3. Take assessment (check email after completion)
4. View roadmap (check email)
=======
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
>>>>>>> 2a82523799225c0142dc889304a2b01974f04381
