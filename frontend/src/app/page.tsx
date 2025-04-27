import { auth0 } from "@/app/lib/auth0";
import Link from "next/link";

export default async function Home() {
  const session = await auth0.getSession();

  if (!session) {
    return (
      <main>
        <Link href="/auth/login?screen_hint=signup">Sign up</Link>
        <Link href="/auth/login">Log in</Link>
      </main>
    );
  }

  return (
    <>
      <h1>Welcome, {session.user.name}!</h1>
      <Link href="auth/logout">logout</Link>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
      <p>fdsjiao</p>
    </>
  );
}
