import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';

const Blogs: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Wedding Trends in Hyderabad for 2024',
      excerpt: 'Discover the latest wedding trends that are taking Hyderabad by storm this year.',
      author: 'D-Day Evento Team',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?w=400&h=250&fit=crop',
      category: 'Weddings'
    },
    {
      id: 2,
      title: 'Planning the Perfect Corporate Event: A Complete Guide',
      excerpt: 'Everything you need to know about organizing successful corporate events.',
      author: 'Event Planning Expert',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?w=400&h=250&fit=crop',
      category: 'Corporate'
    },
    {
      id: 3,
      title: 'Birthday Party Ideas That Will Wow Your Guests',
      excerpt: 'Creative and unique birthday party themes and decoration ideas.',
      author: 'Creative Team',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?w=400&h=250&fit=crop',
      category: 'Birthdays'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors"
            >
              <ArrowLeft size={20} />
              Back
            </button>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-dancing">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, tips, and insights from the world of event planning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 font-dancing line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors font-semibold">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              More exciting content coming soon!
            </p>
            <button className="bg-brand-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors">
              Subscribe for Updates
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;