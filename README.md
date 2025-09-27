This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## const session = await account.createEmailToken(ID.unique(), email);

Email OTP authentication is done using a two-step authentication process. The authentication request is initiated from the client application and an email message is sent to the user's email inbox. The email will contain a 6-digit number the user can use to log in.

Send an an email to initiate the authentication process. A new account will be created for this email if it has never been used before.

Retuen type -
// Return value structure
{
"$id": "64f8a9b2c1e5d7f9a2b3c4e5",           // Token ID
"$createdAt": "2023-09-07T10:30:00.000Z",     // Creation timestamp
"userId": "64f8a9b2c1e5d7f9a2b3c4e5",         // User ID (same as first parameter)
"secret": "",                                  // Empty (secret sent via email)
"expire": "2023-09-07T11:30:00.000Z",         // Expiration time
"phrase": "Golden Eagle flies at dawn"        // Human-readable phrase for verification
}