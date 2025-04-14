# SHOPCARD

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To get started with the project, follow the steps below:

### 1. Clone the repository

First, clone the project to your local machine:

```bash
git clone https://github.com/yourusername/project-name.git
cd project-name
```

### 2. Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root of the project directory and add the following environment variables. These are required for the project to run correctly:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=urkey
CLERK_SECRET_KEY=urkey
NEXT_PUBLIC_SANITY_PROJECT_ID=urid
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-09
SANITY_API_READ_TOKEN=urtoken
```

Make sure to replace the placeholders (`urkey`, `urid`, `urtoken`) with your actual API keys and project IDs.

### 4. Run the development server

Now, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page will automatically update as you make changes.

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and APIs.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can also visit the [Next.js GitHub repository](https://github.com/vercel/next.js) to contribute or leave feedback.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
