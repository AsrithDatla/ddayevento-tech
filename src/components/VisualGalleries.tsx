import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Play, ExternalLink } from 'lucide-react';

const VisualGalleries: React.FC = () => {
  const instagramPosts = [
    {
      id: '1',
      image: 'https://images.pexels.com/photos/1616343/pexels-photo-1616343.jpeg?w=300&h=300&fit=crop',
      likes: 247,
      caption: 'Beautiful wedding setup at Hyderabad Club ✨'
    },
    {
      id: '2',
      image: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?w=300&h=300&fit=crop',
      likes: 189,
      caption: 'Corporate event excellence 🎯'
    },
    {
      id: '3',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?w=300&h=300&fit=crop',
      likes: 156,
      caption: 'Birthday celebration magic 🎉'
    },
    {
      id: '4',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?w=300&h=300&fit=crop',
      likes: 203,
      caption: 'Elegant anniversary dinner 💕'
    },
    {
      id: '5',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=300&h=300&fit=crop',
      likes: 178,
      caption: 'Baby shower bliss 👶'
    },
    {
      id: '6',
      image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?w=300&h=300&fit=crop',
      likes: 234,
      caption: 'Festival celebration vibes 🎊'
    }
  ];

  const youtubeVideos = [
    {
      id: '1',
      thumbnail: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?w=400&h=225&fit=crop',
      title: 'Dream Wedding at Banjara Hills Club',
      duration: '5:32',
      views: '12K'
    },
    {
      id: '2',
      thumbnail: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?w=400&h=225&fit=crop',
      title: 'Corporate Event Highlights',
      duration: '3:45',
      views: '8.5K'
    },
    {
      id: '3',
      thumbnail: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?w=400&h=225&fit=crop',
      title: 'Birthday Party Extravaganza',
      duration: '4:20',
      views: '6.2K'
    },
    {
      id: '4',
      thumbnail: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=400&h=225&fit=crop',
      title: 'Baby Shower Ceremony',
      duration: '6:15',
      views: '9.1K'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-heading">
            Visual Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio through stunning imagery and captivating videos from recent events
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Instagram Feed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-3 rounded-full">
                <Instagram size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 font-heading">Instagram Feed</h3>
                <p className="text-gray-600">Follow us @ddayevento</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {instagramPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <ExternalLink size={24} className="mx-auto mb-2" />
                      <p className="text-sm font-semibold">{post.likes} likes</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-6"
            >
              <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-300">
                Follow on Instagram
              </button>
            </motion.div>
          </motion.div>

          {/* YouTube Videos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-600 p-3 rounded-full">
                <Youtube size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 font-heading">Video Portfolio</h3>
                <p className="text-gray-600">Watch our event highlights</p>
              </div>
            </div>

            <div className="space-y-4">
              {youtubeVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative flex-shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-32 h-20 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg group-hover:bg-black/70 transition-colors">
                      <Play size={20} className="text-white fill-current" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 group-hover:text-brand-primary transition-colors line-clamp-2">
                      {video.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{video.views} views</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-6"
            >
              <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300">
                Visit YouTube Channel
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisualGalleries;