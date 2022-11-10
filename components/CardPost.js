import InfoPost from "@components/InfoPost";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <img src={thumbnail} alt="article" className="w-full rounded mb-4" />
      <InfoPost {...infoPost} />
    </article>
  );
}
