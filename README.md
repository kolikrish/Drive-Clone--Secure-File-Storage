# 📁 Drive Clone – Secure File Storage & Sharing Platform

**Drive Clone** is a full-stack application inspired by Google Drive, built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**. It allows users to **securely upload, manage ** with JWT-based authentication and access control.

🔐 Built with a focus on privacy, access roles, and organized file management.

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Templating**: EJS
- **Authentication**: JWT (JSON Web Tokens)
- **File Handling**: Multer / GridFS (or other upload solution)
- **Environment Config**: dotenv

---

## ✨ Features

- 🔐 JWT-based login/signup authentication
- 🗂️ Upload, view, delete, and download files
- 👤 User-specific file access (only owner can manage)
- 🌐 Clean UI using EJS templating
- 🛡️ Middleware-protected routes (private/public access)

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/drive-clone.git
cd drive-clone
