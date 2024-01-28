import PlainLayOut from "@/components/master/PlainLayOut";
import Hero from "@/components/news/Hero";
async function getData() {
  let featured = (
    await (
      await fetch(`${process.env.HOST}/api/news/type?type=featured`, {
        cache: "no-store",
      })
    ).json()
  )["data"];
  return { featured: featured };
}
export default async function Home() {
  const data = await getData();
  return (
    <PlainLayOut>
      <main className="min-h-[80svh]">
        <Hero data={data} />
      </main>
    </PlainLayOut>
  );
}
