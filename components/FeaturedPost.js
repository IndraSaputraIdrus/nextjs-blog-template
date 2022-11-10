import InfoPost from "@components/InfoPost";

export default function FeaturedPost() {
  const post = {
    category: "UI Design",
    date: "July 2, 2021",
    title: "Understanding color theory: the color wheel and finding complementary colors",
    shortDescription:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    authorAvatar: "/assets/author-1.png",
    authorName: "Leslie Alexander",
    authorJob: "UI Designer",
  };

  return (
    <article>
      <div className="flex -mx-4 flex-wrap">
        <div className="px-4 w-full mb-4 lg:mb-0  lg:w-8/12">
          <img
            src="/assets/featured-thumbnail.png"
            alt="FeaturedPost"
            className="rounded-xl w-full"
          />
        </div>
        <div className="px-4 w-full lg:w-4/12">
          <InfoPost {...post} />
        </div>
      </div>
        <hr className="border-white/10 mt-10 mb-3 lg:hidden lg:m-0"/>
    </article>
  );
}
