import { useState } from "react";
import Head from "next/head";
import FeaturedPost from "@components/FeaturedPost";
import CardPost from "@components/CardPost";
import Container from "@components/Container";
import Layout from "@components/Layout";
import dataPost from "../utils/post.json";

export default function Home() {
  const [posts, setPosts] = useState(dataPost);
  return (
      <>
    
        <Head>
          <title>Epictetus</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Container>
            <FeaturedPost />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-4">
              {posts.map((post) => (
                <div key={post.id} className="px-4 py-8">
                  <CardPost {...post} />
                </div>
              ))}
            </div>
          </Container>
        </Layout>
      </>
  );
}
