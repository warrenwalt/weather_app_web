import Image from "next/image";
import React from "react";

const Page = async ({ params }) => {
  const response = await fetch(
    `https://api.unsplash.com/photos/${params.id}?client_id=mW58lcHw43G-HZXp_J2iKVQbqK4lxYQq_1agi2LHiw8`
  );
  const anImage = await response.json();
  return (
    <div>
      <h1 className="font-bold text-2xl text-green-300">the original page!</h1>
      <div className="flex flex-col">
        <Image
          src={anImage.urls.regular}
          alt={anImage.alt_description}
          width={300}
          height={300}
        />
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">{anImage.alt_description}</h3>
          <p>Like: {anImage.likes}</p>
          <p>Downloads: {anImage.downloads}</p>
          <p>Views: {anImage.views}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
