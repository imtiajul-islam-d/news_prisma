import PlainLayOut from "@/components/master/PlainLayOut";
import CommentList from "@/components/news/CommentList";
import NewsDetails from "@/components/news/NewsDetails";
import PopularNewsList from "@/components/news/PopularNewsList";
async function getData(id) {
  let news = (
    await (
      await fetch(`${process.env.HOST}/api/news/details?id=${id}`, {
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
  let comment = (
    await (
      await fetch(`${process.env.HOST}/api/comments/news?postID=${id}`, {
        cache: "no-store",
      })
    ).json()
  )["data"];
  return { news: news, popular: popular, comment: comment };
}
const Page = async (props) => {
  let id = props.searchParams["id"];
  const data = await getData(id);
  return (
    <PlainLayOut>
      <div className="mt-4 max-w-screen-xl px-3 sm:px-5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="col-span-2">
            <NewsDetails data={data["news"]} />
            <CommentList comment={data["comment"]} />
          </div>
          <div className="col-span-1">
            <h5 className="mb-1 bg-gray-200 px-5 py-2">POPULAR</h5>
            <hr className="mb-5" />
            <PopularNewsList popular={data["popular"]} />
          </div>
        </div>
      </div>
    </PlainLayOut>
  );
};

export default Page;
