# 🚀 Shortify Pro — Advanced URL Shortener Platform

**Shortify Pro** is a full-stack, production-ready URL shortener application built with modern backend architecture and real-world authentication workflows.  
It goes far beyond basic URL shortening by implementing **secure authentication, OAuth login, email verification, password recovery, file uploads, and multi-database support**.

This project is designed as a **learning-to-production bridge**, showcasing how real backend systems are structured, validated, and scaled.

---

## 📌 Features

### 🔗 Core URL Features
- Shorten long URLs into clean, shareable short links
- Redirect short URLs to original destinations
- Edit and delete short links
- Pagination for managing large numbers of URLs
- IP & timestamp-ready structure for analytics

---

### 🔐 Authentication & Security
- Email & password authentication
- JWT-based authentication
- Secure cookie handling
- Password hashing with bcrypt
- Email verification flow
- Forgot password & reset password functionality
- Token expiration & validation

---

### 🌐 OAuth Authentication
- Google OAuth login
- GitHub OAuth login
- Secure callback handling
- Automatic user provisioning

---

### 📧 Email System
- Email verification emails
- Password reset emails
- Responsive HTML emails using MJML
- Integrated with Resend
- Fully customizable branding

---

### 📂 File Uploads
- Profile image upload
- Secure file handling using Multer
- Public asset management

---

### 🗄️ Database & ORM Support
- Multiple database strategies for learning & scalability
- SQL & NoSQL support
- Migration-based schema management

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Frontend
- EJS (Embedded JavaScript Templates)
- CSS

### Authentication
- JWT (JSON Web Tokens)
- OAuth 2.0 (Google & GitHub)

### Databases
- MongoDB
- MySQL

### ORMs & Database Management
- Mongoose (MongoDB)
- Prisma (MySQL)
- Drizzle ORM (SQL-first ORM)
- Drizzle Kit (migrations)

### Email
- Resend
- MJML (email templates)

### File Uploads
- Multer

### Validation & Utilities
- Zod
- bcrypt
- dotenv

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env`
PORT=3000

DATABASE_URL=mysql://username:password@localhost:3306/urlshortener

JWT_SECRET=your_secure_jwt_secret

RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx

FRONTEND_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

---

## 🔑 Authentication Flow

### Email & Password
- User registers with email and password
- Verification email is sent to the user
- Account is verified via email link
- JWT-based session is created after login

### Password Reset
- User requests a password reset
- Secure reset link is sent via email
- Token is validated on request
- Password is successfully updated

### OAuth (Google / GitHub)
- User clicks on Google or GitHub login
- Redirected to OAuth provider
- Secure callback is handled by the backend
- User is logged in automatically

---

## 📧 Email Templates
- Built using **MJML**
- Fully responsive email design
- Custom branding supported
- Used for email verification and password reset

---

## 🔐 Security Practices Used
- Password hashing using **bcrypt**
- JWT token expiration handling
- Secure HTTP-only cookies
- Environment variable validation using **Zod**
- OAuth state protection
- No hardcoded secrets

---

## 📦 Learning Outcomes

This project demonstrates:
- Production-grade backend architecture
- Real-world authentication workflows
- OAuth implementation from scratch
- Email verification and password reset systems
- ORM comparison and usage
- SQL migrations
- Environment validation
- Clean and scalable project structure

---

## 🚀 Future Enhancements
- URL analytics dashboard
- Rate limiting and abuse prevention
- Custom domains for short links
- Admin dashboard
- Production deployment support

---

## 👨‍💻 Author

**Aditya Verma**  
Built as part of a hands-on backend engineering journey.

---

## ⭐ Support

If you found this project useful:
- ⭐ Star the repository
- 🍴 Fork it
- 🧠 Use it for learning
