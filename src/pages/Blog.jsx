import React from 'react';
import img1 from '../assets/blog/img1.png';
import img2 from '../assets/blog/img2.png';

const blogPosts = [
  {
    id: 1,
    image: img1,
    title: 'Why UX changing the world?',
    description: 'Lorem ipsum dolor sit amet consectetur. Posuere sit amet fermentum elit senectus facilisis neque. Etiam elit eget amet eget convallis sed interdum amet purus.',
    link: '#'
  },
  {
    id: 2,
    image: img2,
    title: 'How to get started as UX Designer?',
    description: 'Lorem ipsum dolor sit amet consectetur. Posuere sit amet fermentum elit senectus facilisis neque. Etiam elit eget amet eget convallis sed interdum amet purus.',
    link: '#'
  }
];

const Blog = () => {
  return (
    <section className="mt-10 py-20 px-8 lg:px-20">
      <div className="container mx-auto">
        <div className="relative">
          {/* Vertical 'blog' text */}
          {/* <div className="absolute -left-12 top-12 transform -rotate-90">
            <h2 className="text-4xl font-bold text-gray-900">blog</h2>
          </div> */}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {blogPosts.map((post) => (
              <div key={post.id} className="space-y-4">
                <div className=" rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt="Blog Post"
                    className="w-full h-auto"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{post.title}</h3>
                  <p className="text-lg text-gray-500">
                    {post.description} <a href={post.link} className="text-black font-bold underline">
                         Read More
                     </a>
                </p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
