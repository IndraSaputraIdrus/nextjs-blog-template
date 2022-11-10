import {useState} from "react";
import CardPost from "@components/CardPost";
import Container from "@components/Container";
import Layout from "@components/Layout";
import SectionHeader from "@components/SectionHeader";
import dataPost from "../utils/post.json";

export default function Posts(){
  const [posts, setPosts] = useState(dataPost);
  return (
  <Layout>
    <Container>
      <SectionHeader>UI Design</SectionHeader>
      {posts.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-4">
          {posts.map((post) => (
            <div key={post.id} className="px-4 py-8">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-6xl">No result :(</h2>
          <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
        </div>
      )}
    </Container>
  </Layout>
 )
}

