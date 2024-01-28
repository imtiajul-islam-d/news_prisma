import PlainLayOut from "@/components/master/PlainLayOut";
import Hero from "@/components/news/Hero";
import NewsList from "@/components/news/NewsList";
import PopularNewsList from "@/components/news/PopularNewsList";
async function getData() {
  let featured = (
    await (
      await fetch(`${process.env.HOST}/api/news/type?type=featured`, {
        cache: "no-store",
      })
    ).json()
  )["data"];
  let popular = (
    await (
      await fetch(`${process.env.HOST}/api/news/type?type=popular`, {
        cache: "no-store",
      })
    ).json()
  )["data"];
  let latest = (
    await (
      await fetch(`${process.env.HOST}/api/news/type?type=latest`, {
        cache: "no-store",
      })
    ).json()
  )["data"];
  return { featured: featured, popular: popular, latest: latest };
}
export default async function Home() {
  const data = await getData();
  return (
    <PlainLayOut>
      <main className="min-h-[80svh]">
        <Hero data={data} />
        <div className="mt-4 max-w-screen-xl px-3 sm:px-5 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="col-span-2">
              <h5 className="mb-1">LATEST</h5>
              <hr className="mb-5" />
              <NewsList latest={data["latest"]} />
            </div>
            <div className="col-span-1">
              <h5 className="mb-1">POPULAR</h5>
              <hr className="mb-5" />
              <PopularNewsList popular={data["popular"]} />
            </div>
          </div>
        </div>
      </main>
    </PlainLayOut>
  );
}
