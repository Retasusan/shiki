// src/app/page.tsx
import { auth0 } from "@/app/lib/auth0";
import ClientComponent from "./ClientComponent/page"; // あとで作るよ

export default async function Page() {
  const session = await auth0.getSession();
  const token = session?.tokenSet.accessToken; // ←accessToken小文字ね

  return <ClientComponent token={token} />;
}
