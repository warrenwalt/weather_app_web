import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"; //default is fotce-static
var count = 0;
export const GET = async (request) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/", {
    next: {
      rivalidate: 5,
    },
  });
  const data = await res.json();
  count++;

  //   return Response.json({
  //     data,
  //     metadata: {
  //       author: "warren",
  //       title: "Grit & Grid",
  //       url: request.url,
  //       count: count,
  //     },
  //   });
  return redirect("https://nextjs.org/");
};
