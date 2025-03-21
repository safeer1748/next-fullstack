# NextStack

This is a full-stack Next.js project utilizing modern technologies such as Clerk authentication, Drizzle ORM with Neon Serverless Postgres, and Shadcn UI components.

## Features

- **Next.js 14** with App Router
- **Clerk Authentication** for secure user management
- **Drizzle ORM** for database operations
- **Neon Serverless Postgres** as the database
- **Shadcn UI** for accessible UI components
- **React Hook Form** for form validation
- **Tailwind CSS** for styling
- **Resend API** for email handling

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/safeer1748/next-fullstack.git
   ```
2. Navigate into the project directory:
   ```sh
   cd next-fullstack
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Configuration

- Create a `.env` file and add the required environment variables:
  ```sh
  RESEND_API_KEY=your_resend_api_key
  RECEIVER_EMAIL=your_receiver_email
  NEON_DATABASE_URL=your_neon_database_url
  ```

- Create a `.env.local` file and add the following environment variables:
  ```sh
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
  CLERK_SECRET_KEY=your_clerk_secret_key
  WEBHOOK_SECRET=your_webhook_secret
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
  NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
  ```

## Running the Project

- Start the development server:
  ```sh
  npm run dev
  ```
- Build the project for production:
  ```sh
  npm run build
  ```
- Start the production server:
  ```sh
  npm start
  ```

## Folder Structure

```
next-fullstack/
├── app/
│   ├── layout.tsx  # Main layout
│   ├── page.tsx    # Homepage
│   ├── api/        # API routes
├── drizzle/        # Database schema and migrations
├── public/         # Static assets
├── components/     # UI components
├── styles/         # Styling files
├── package.json    # Dependencies and scripts
```

