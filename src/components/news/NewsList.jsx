import dateString from "@/utility/DateToString";
import Link from "next/link";
const NewsList = ({ latest }) => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto text-gray-100">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-2">
          {latest?.map((item, idx) => (
            <Link
              href={`/details?id=${item?.id}`}
              key={idx}
              className="cursor-pointer relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
              style={{
                "background-image": `url(${item?.img1})`,
              }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <Link
                  rel="noopener noreferrer"
                  href={`/category?id=${item?.catID}`}
                  className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined"
                >
                  {item?.keywords}
                </Link>
                <div className="flex flex-col justify-start text-center text-gray-100">
                  <span className="text-3xl font-semibold leadi tracki">
                    {dateString(item?.updatedAt)}
                  </span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <Link
                  rel="noopener noreferrer"
                  href={`/details?id=${item?.id}`}
                  className="font-medium text-md hover:underline text-gray-100"
                >
                  {item?.short_des}
                </Link>
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
