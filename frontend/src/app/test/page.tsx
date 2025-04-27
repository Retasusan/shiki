// import { useQuery } from "@tanstack/react-query";
import { auth0 } from "@/app/lib/auth0";

export default async function Page() {
  const session = await auth0.getSession();
  console.log(session?.tokenSet.accessToken);

  // const { data, isPending, error } = useQuery({
  //   queryKey: ["get"],
  //   queryFn: () => {
  //     return fetch("http://localhost:8000/verify_token", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }).then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();
  //     });
  //   },
  // });

  // if (isPending) return <div>Loading...</div>;
  // if (error) return <div>Error: {(error as Error).message}</div>;

  // return (
  //   <div>
  //     <h1>Posts</h1>
  //     <pre>{JSON.stringify(data, null, 2)}</pre>
  //   </div>
  // );
}
