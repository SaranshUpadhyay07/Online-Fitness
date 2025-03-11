import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Salad, Mail, Apple as WhatsApp, CheckCircle2, Instagram, MapPin, Clock, Wifi, ShowerHead } from 'lucide-react';

function Home() {
  const coaches = [
    {
      id: "sarah",
      name: "Sarah Johnson",
      role: "Head Fitness Coach",
      expertise: "Strength Training & HIIT",
      image: "https://images.unsplash.com/photo-1609899537878-39f7cebfac62?auto=format&fit=crop&q=80",
      instagram: "coach_sarah"
    },
    {
      id: "mike",
      name: "Mike Rodriguez",
      role: "Nutrition Specialist",
      expertise: "Diet Planning & Macros",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80",
      instagram: "mike_nutrition"
    }
  ];

  const gyms = [
    {
      name: "Downtown Elite Fitness",
      address: "123 Main Street, Downtown",
      hours: "24/7",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
      features: ["State-of-the-art Equipment", "Cardio Theater", "Free Weights Area", "Group Classes"],
      amenities: ["Wifi", "Showers", "Lockers", "Towel Service"]
    },
    {
      name: "Westside Performance Center",
      address: "456 West Avenue, Westside",
      hours: "5:00 AM - 11:00 PM",
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80",
      features: ["Olympic Training Area", "CrossFit Zone", "Recovery Room", "Nutrition Bar"],
      amenities: ["Wifi", "Showers", "Personal Training", "Parking"]
    },
    {
      name: "Eastside Wellness Hub",
      address: "789 East Boulevard, Eastside",
      hours: "6:00 AM - 10:00 PM",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80",
      features: ["Yoga Studio", "Functional Training", "Spinning Room", "Boxing Area"],
      amenities: ["Wifi", "Showers", "Childcare", "Cafe"]
    }
  ];

  const instagramPosts = [
    {
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80",
      caption: "Morning yoga session with @coach_sarah 🧘‍♀️ #FitnessJourney"
    },
    {
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80",
      caption: "Transform your body, transform your life 💪 #FitnessGoals"
    },
    {
      image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&q=80",
      caption: "Healthy meal prep ideas with Coach Mike 🥗 #HealthyLiving"
    },
    {
      image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&q=80",
      caption: "Client transformation! 12 weeks of dedication 🎯 #TransformationTuesday"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80')"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6">Transform Your Life Through Fitness</h1>
            <p className="text-xl">Personalized online fitness coaching and nutrition plans tailored to your goals</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">What You'll Get</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Dumbbell className="text-emerald-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Customized Workout Plans</h3>
            <ul className="space-y-3">
              {['Personalized exercise routines', 'Progress tracking', 'Video demonstrations', 'Weekly adjustments'].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Salad className="text-emerald-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Nutrition Guidance</h3>
            <ul className="space-y-3">
              {['Custom meal plans', 'Calorie calculations', 'Supplement advice', 'Shopping lists'].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gyms Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our World-Class Facilities</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Experience fitness excellence at our state-of-the-art locations, each equipped with premium equipment and amenities
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {gyms.map((gym, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={gym.image} 
                    alt={gym.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{gym.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin size={18} />
                    <span className="text-sm">{gym.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Clock size={18} />
                    <span className="text-sm">{gym.hours}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {gym.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-1">
                          <CheckCircle2 size={14} className="text-emerald-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Amenities:</h4>
                    <div className="flex gap-3">
                      {gym.amenities.includes('Wifi') && <Wifi size={18} className="text-emerald-500" />}
                      {gym.amenities.includes('Showers') && <ShowerHead size={18} className="text-emerald-500" />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coaches Section */}
      <div className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Meet Our Expert Coaches</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Our certified fitness professionals are here to guide you through your transformation journey with expertise and dedication
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {coaches.map((coach) => (
              <div key={coach.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{coach.name}</h3>
                  <p className="text-emerald-600 font-medium mb-2">{coach.role}</p>
                  <p className="text-gray-600 mb-4">{coach.expertise}</p>
                  <div className="flex items-center justify-between">
                    <a 
                      href={`https://instagram.com/${coach.instagram}`}
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600"
                    >
                      <Instagram size={20} />
                      <span>@{coach.instagram}</span>
                    </a>
                    <Link 
                      to={`/coach/${coach.id}`}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Fitness Journey?</h2>
          <p className="text-gray-300 mb-12">Contact us through WhatsApp or email to get started with your personalized fitness plan</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://wa.me/1234567890" className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 py-4 px-6 rounded-lg">
              <WhatsApp size={24} />
              <span>WhatsApp: +1 (234) 567-890</span>
            </a>
            <a href="mailto:fitness@example.com" className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 py-4 px-6 rounded-lg">
              <Mail size={24} />
              <span>fitness@example.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Instagram Feed Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Follow Our Journey</h2>
            <a 
              href="https://instagram.com/fitness_solutions"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-lg"
            >
              <Instagram size={24} />
              <span>@fitness_solutions</span>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {instagramPosts.map((post, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={post.image} 
                  alt="Instagram post"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-sm text-center">{post.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Fitness Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;