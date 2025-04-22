import React, { useState } from 'react';
import { Heart, Youtube, Search, ArrowRight, Star, X } from 'lucide-react';
import { Utensils, Moon, Settings as Lungs, Activity, Droplet, Apple, Leaf, Atom as Stomach, Brain, Thermometer, Smile, Pill, ChevronFirst as FirstAid, Baby, Eye, Ear } from 'lucide-react';

// Categories and their remedies
const healthCategories = [
  {
    title: "Mental Wellness",
    icon: <Brain className="w-6 h-6" />,
    remedies: [
      {
        title: "Natural Stress Relief Techniques",
        thumbnail: "https://images.moneycontrol.com/static-mcnews/2024/04/Health-benefits-of-Nadi-Shodhana-Pranayam-770x433.jpg?impolicy=website&width=770&height=431",
        videoUrl: "https://youtube.com/watch?v=grfXR6FAsI8?si=EgDDBLPNLQwOXhWs",
        duration: "10:25",
        views: "2.4k",
        rating: 4.5
      },
      {
        title: "Meditation for Anxiety",
        thumbnail: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=500",
        videoUrl: "https://www.youtube.com/watch?v=pFJL4Ne8Ruo",
        duration: "15:30",
        views: "1.8k",
        rating: 4.8
      },
      {
        title: "Breathing Exercises for Calm",
        thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=500",
        videoUrl: "https://www.youtube.com/watch?v=DbDoBzGY3vo?si=7YBji270RytchOd4",
        duration: "08:45",
        views: "3.2k",
        rating: 4.3
      }
    ]
  },
  {
    title: "Sleep & Rest",
    icon: <Moon className="w-6 h-6" />,
    remedies: [
      {
        title: "Natural Sleep Remedies",
        thumbnail: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=500",
        videoUrl: "https://www.youtube.com/watch?v=5KZcE94tOyE?si=clZTNkYBH96v7Tax",
        duration: "12:15",
        views: "4.1k",
        rating: 4.7
      },
      {
        title: "Bedtime Routine Guide",
        thumbnail: "https://masandpas.com/wp-content/uploads/2018/11/baby-routine-nap-schedule-baby-nap-schedule-baby-sleep-3.jpg",
        videoUrl: "https://www.youtube.com/watch?v=K3eS4jr2pIo?si=vtVt5WRMxn1muuql",
        duration: "09:30",
        views: "2.9k",
        rating: 4.4
      }
    ]
  },
  {
    title: "Respiratory Health",
    icon: <Lungs className="w-6 h-6" />,
    remedies: [
      {
        title: "Breathing Exercises for Better Lung Health",
        thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=500",
        videoUrl: "https://www.youtube.com/watch?v=I77hh5I69gA?si=InrkC0ETQxAZddnp",
        duration: "14:20",
        views: "3.7k",
        rating: 4.6
      }
    ]
  },
  {
    title: "Digestive Health",
    icon: <Stomach className="w-6 h-6" />,
    remedies: [
      {
        title: "Natural Remedies for Indigestion",
        thumbnail: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=500",
        videoUrl: "https://www.youtube.com/watch?v=vJX0X05j4yI?si=egTWlxxRNHkvvVuT",
        duration: "11:45",
        views: "5.2k",
        rating: 4.9
      }
    ]
  },
  {
    title: "Nutrition & Diet",
    icon: <Apple className="w-6 h-6" />,
    remedies: [
      {
        title: "Healthy Eating Basics",
        thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500",
        videoUrl: "https://www.youtube.com/watch?v=81G22t2UHxA?si=qkuDXh3VHQwJZCjB",
        duration: "13:20",
        views: "6.1k",
        rating: 4.7
      },
      {
        title: "Meal Planning Guide",
        thumbnail: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=500",
        videoUrl: "https://www.youtube.com/watch?v=SMsy_XuofMo?si=G3YnwiVNGyCo7oKp",
        duration: "16:40",
        views: "4.8k",
        rating: 4.5
      }
    ]
  },
  {
    title: "First Aid",
    icon: <FirstAid className="w-6 h-6" />,
    remedies: [
      {
        title: "Basic First Aid Skills",
        thumbnail: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=500",
        videoUrl: "https://www.youtube.com/watch?v=6XILzpwBWrg?si=mqIO_k5Jcfu9NS4T",
        duration: "18:15",
        views: "7.3k",
        rating: 4.9
      }
    ]
  },
  {
    title: "Skin Care",
    icon: <Smile className="w-6 h-6" />,
    remedies: [
      {
        title: "Natural Skin Care Routine",
        thumbnail: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=500",
        videoUrl: "https://www.youtube.com/watch?v=Un0ilRExcws?si=NMVaoMp6Tw_kBjTa",
        duration: "10:50",
        views: "5.6k",
        rating: 4.6
      }
    ]
  },
  {
    title: "Pain Management",
    icon: <Activity className="w-6 h-6" />,
    remedies: [
      {
        title: "Natural Pain Relief Methods",
        thumbnail: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=500",
        videoUrl: "https://www.youtube.com/watch?v=FkPDb8nKElU?si=Oy3ytzWJcHY3vzAf",
        duration: "15:25",
        views: "4.4k",
        rating: 4.7
      }
    ]
  },
  {
    title: "Eye Care",
    icon: <Eye className="w-6 h-6" />,
    remedies: [
      {
        title: "Digital Eye Strain Relief",
        thumbnail: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&q=80&w=500",
        videoUrl: "https://www.youtube.com/watch?v=2V1NRzki9LY?si=ppsrrYPn6RC8Qykc",
        duration: "09:15",
        views: "3.8k",
        rating: 4.5
      }
    ]
  },
  {
    title: "Herbal Remedies",
    icon: <Leaf className="w-6 h-6" />,
    remedies: [
      {
        title: "Common Medicinal Herbs Guide",
        thumbnail: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&q=80&w=500",
        videoUrl: "https://www.youtube.com/watch?v=_GqJMCEwJuQ?si=PHU_webV4-8hG0vo",
        duration: "17:30",
        views: "6.7k",
        rating: 4.8
      }
    ]
  }
];

function HealthTutorials() {
  const [selectedCategory, setSelectedCategory] = useState(healthCategories[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: string;
    views: string;
    rating: number;
  } | null>(null);

  const filteredRemedies = selectedCategory.remedies.filter(remedy =>
    remedy.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-blue-500" />
              <h1 className="text-xl font-bold text-gray-900">Health Bridge</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Categories Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-semibold mb-4">Health Categories</h2>
              <div className="space-y-2">
                {healthCategories.map((category) => (
                  <button
                    key={category.title}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-2 ${
                      selectedCategory.title === category.title
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {category.icon}
                    <span>{category.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Videos Grid */}
          <div className="col-span-9">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{selectedCategory.title}</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search in this category..."
                    className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {filteredRemedies.map((remedy) => (
                  <div key={remedy.title} className="group">
                    <div 
                      className="relative aspect-video rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => setSelectedVideo(remedy)}
                    >
                      <img
                        src={remedy.thumbnail}
                        alt={remedy.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Youtube className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                        {remedy.duration}
                      </div>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold">{remedy.title}</h3>
                    <div className="mt-1 space-y-2">
                      <StarRating rating={remedy.rating} />
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{remedy.views} views</span>
                        <button 
                          className="ml-auto flex items-center text-blue-500 hover:text-blue-600"
                          onClick={() => setSelectedVideo(remedy)}
                        >
                          Watch Now
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-200"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video">
              <iframe
                src={selectedVideo.videoUrl.replace('watch?v=', 'embed/')}
                title={selectedVideo.title}
                className="w-full h-full rounded-t-lg"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
              <div className="mt-2 flex items-center justify-between">
                <StarRating rating={selectedVideo.rating} />
                <span className="text-sm text-gray-500">{selectedVideo.views} views</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HealthTutorials;