import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PostCard,PostWidget,Categories  } from "../components/";
import { getPosts  } from "../services/index"
import { GetStaticProps } from 'next'
import { Key } from 'react';

interface props{
  posts : [{title:String,excerpt:String,featuredImage:string, node:any}]
}

export const getStaticProps : GetStaticProps = async (context) =>
{
  const posts = await (getPosts()) || [];

  return {
    props:{posts}
  }
}

const Home: NextPage<props> = ( {posts} ) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-8 col-span-1">
        {posts.map((post) => (
          <PostCard post={post.node} key={post.title as Key}/>
        ))}
        </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget></PostWidget>
              <Categories></Categories>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home

