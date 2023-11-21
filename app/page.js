import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    const response = await fetch('https://api.unsplash.com/photos?client_id=mW58lcHw43G-HZXp_J2iKVQbqK4lxYQq_1agi2LHiw8', {
      cache: 'no-store',
    });
  const data = await response.json();
    return (
      <main className="container mx-auto">
        <h1 className="text-center font-bold text-4xl">Some random photos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
          {data.map(image => (
            <Link href={`/photos/${image.id}`} key={image.id}>
              <Image
                src={image.urls.regular}
                alt=""
                height={300}
                width={300}
                className="w-full object-cover aspect-square"
              />
              <p>{image.alt_description}</p>
          </Link>
          ))}
        </div>
    </main>
  )
}
