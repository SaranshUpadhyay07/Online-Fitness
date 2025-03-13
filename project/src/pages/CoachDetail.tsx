import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Instagram, Medal, Trophy, Users, Clock } from 'lucide-react';

const coachDetails = {
  Kalyan: {
    name: "Kalyan Kumar",
    role: "Head Fitness Coach",
    image: "https://images.unsplash.com/photo-1609899537878-39f7cebfac62?auto=format&fit=crop&q=80",
    instagram: "coach_sarah",
    bio: "With over 10 years of experience in fitness training, Sarah specializes in strength training and HIIT workouts. She has helped hundreds of clients achieve their fitness goals through personalized training programs.",
    specialties: ["Strength Training", "HIIT Workouts", "Weight Loss", "Muscle Building"],
    certifications: ["NASM Certified Personal Trainer", "CrossFit Level 2 Trainer", "Precision Nutrition Coach"],
    experience: "10+ years",
    clientsTransformed: "500+",
    successRate: "95%",
    testimonials: [
      {
        name: "Emily R.",
        text: "Sarah's program completely transformed my approach to fitness. I've lost 30 pounds and feel stronger than ever!",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
      },
      {
        name: "John D.",
        text: "The personalized attention and detailed workout plans made all the difference. Sarah is truly exceptional!",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
      }
    ]
  },
  Padmini: {
    name: "Padmini",
    role: "Nutrition Specialist",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80",
    instagram: "mike_nutrition",
    bio: "Mike is a certified nutritionist with a passion for helping clients achieve their health goals through proper nutrition. His approach combines scientific research with practical, sustainable eating habits.",
    specialties: ["Meal Planning", "Macro Tracking", "Sports Nutrition", "Weight Management"],
    certifications: ["Certified Nutrition Coach", "Sports Nutrition Specialist", "Precision Nutrition Level 2"],
    experience: "8+ years",
    clientsTransformed: "300+",
    successRate: "92%",
    testimonials: [
      {
        name: "Sarah M.",
        text: "Mike's nutrition plan was exactly what I needed. His approach is practical and the results speak for themselves!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
      },
      {
        name: "David K.",
        text: "The meal plans are fantastic and Mike's support throughout the journey has been invaluable.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
      }
    ]
  }
};

function CoachDetail() {
  const { id } = useParams();
  const coach = coachDetails[id as keyof typeof coachDetails];

  if (!coach) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Coach not found</h1>
          <Link to="/" className="text-emerald-600 hover:text-emerald-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img 
                src={coach.image} 
                alt={coach.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold mb-2">{coach.name}</h1>
              <p className="text-emerald-600 font-medium mb-4">{coach.role}</p>
              <p className="text-gray-600 mb-6">{coach.bio}</p>
              <a 
                href={`https://instagram.com/${coach.instagram}`}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600"
              >
                <Instagram size={20} />
                <span>@{coach.instagram}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
            <p className="text-2xl font-bold mb-2">{coach.experience}</p>
            <p className="text-gray-600">Experience</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Users className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
            <p className="text-2xl font-bold mb-2">{coach.clientsTransformed}</p>
            <p className="text-gray-600">Clients Transformed</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Trophy className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
            <p className="text-2xl font-bold mb-2">{coach.successRate}</p>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>

        {/* Specialties & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Specialties</h2>
            <ul className="space-y-4">
              {coach.specialties.map((specialty, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Medal className="text-emerald-600" size={20} />
                  <span>{specialty}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Certifications</h2>
            <ul className="space-y-4">
              {coach.certifications.map((certification, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Medal className="text-emerald-600" size={20} />
                  <span>{certification}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-8">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {coach.testimonials.map((testimonial, index) => (
              <div key={index} className="flex gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-600 mb-2">{testimonial.text}</p>
                  <p className="font-medium">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachDetail;