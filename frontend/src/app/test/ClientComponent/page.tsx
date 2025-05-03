"use client";

import { useQuery } from "@tanstack/react-query";

export default function ClientComponent({ token }: { token?: string }) {
  console.log(token);
  const { data, isPending, error } = useQuery({
    queryKey: ["get"],
    queryFn: async () => {
      if (!token) throw new Error("No token found");

      const res = await fetch(`${process.env.APP_BASE_URL}/verify_token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
