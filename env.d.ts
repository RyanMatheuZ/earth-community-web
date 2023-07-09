/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_ENV: 'dev' | 'prod';
    NEXT_PUBLIC_COOKIE_NAME: string;
    NEXT_PUBLIC_API_BASE_URL: string;
    NEXT_PUBLIC_GA_MEASUREMENT_ID: string;
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
    NEXT_PUBLIC_FIREBASE_API_KEY: string;
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
    NEXT_PUBLIC_FIREBASE_APP_ID: string;
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string;
    NEXT_PUBLIC_NOTION_SECRET_KEY: string;
    NEXT_PUBLIC_NOTION_DATABASE_ID: string;
  }
}
