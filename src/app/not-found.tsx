// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">404 - Page Not Found</h1>
      <p className="mb-6 text-gray-500">Sorry, the page you’re looking for doesn’t exist.</p>
      <Link href="/" className="text-blue-500 underline">
        Go back home
      </Link>
    </div>
  );
}
