import { useState } from 'react';
import { BookOpen, Palette, Music, FlaskConical, Calculator, Globe, Star, Sparkles, Heart, Users, Trophy, Rocket } from 'lucide-react';

const ViviKidsPage = () => {
  const [activeGrade, setActiveGrade] = useState<string | null>(null);

  const grades = [
    {
      id: 'preschool',
      name: 'Pre-School',
      age: '3-4 years',
      color: 'from-pink-400 to-rose-400',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-300',
      icon: '🎈',
      tagline: 'Where Learning Begins with Play!',
      description: 'Our Pre-School program creates a nurturing environment where tiny tots explore the world through play-based learning, developing social skills, creativity, and a love for discovery.',
      highlights: [
        { icon: <Palette className="w-5 h-5" />, title: 'Creative Arts', text: 'Painting, crafts, and imaginative play' },
        { icon: <Music className="w-5 h-5" />, title: 'Music & Movement', text: 'Songs, dance, and rhythm activities' },
        { icon: <BookOpen className="w-5 h-5" />, title: 'Story Time', text: 'Building vocabulary through fun stories' },
        { icon: <Users className="w-5 h-5" />, title: 'Social Skills', text: 'Learning to share, cooperate, and make friends' }
      ],
      activities: ['Circle Time', 'Sensory Play', 'Outdoor Adventures', 'Building Blocks', 'Pretend Play']
    },
    {
      id: 'kindergarten',
      name: 'Kindergarten',
      age: '5-6 years',
      color: 'from-purple-400 to-violet-400',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      icon: '🌈',
      tagline: 'Foundation for Lifelong Learning!',
      description: 'Kindergarten bridges play and formal education, introducing foundational reading, writing, and math skills while fostering curiosity and independence through hands-on exploration.',
      highlights: [
        { icon: <BookOpen className="w-5 h-5" />, title: 'Phonics & Reading', text: 'Letter recognition and early reading skills' },
        { icon: <Calculator className="w-5 h-5" />, title: 'Number Fun', text: 'Counting, patterns, and basic math concepts' },
        { icon: <FlaskConical className="w-5 h-5" />, title: 'Science Exploration', text: 'Discovering nature and simple experiments' },
        { icon: <Palette className="w-5 h-5" />, title: 'Creative Expression', text: 'Art projects and dramatic play' }
      ],
      activities: ['Letter Games', 'Math Manipulatives', 'Science Center', 'Art Studio', 'Playground Time']
    },
    {
      id: 'grade1',
      name: '1st Class',
      age: '6-7 years',
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      icon: '📚',
      tagline: 'Reading, Writing, and Exploring!',
      description: 'First Class students dive deeper into reading and writing, developing strong literacy skills while exploring math concepts, science wonders, and creative expression in a supportive environment.',
      highlights: [
        { icon: <BookOpen className="w-5 h-5" />, title: 'Reading Mastery', text: 'Developing fluent reading and comprehension' },
        { icon: <BookOpen className="w-5 h-5" />, title: 'Writing Skills', text: 'Sentence formation and creative writing' },
        { icon: <Calculator className="w-5 h-5" />, title: 'Math Adventures', text: 'Addition, subtraction, and problem solving' },
        { icon: <Globe className="w-5 h-5" />, title: 'World Around Us', text: 'Social studies and basic geography' }
      ],
      activities: ['Reading Groups', 'Writing Workshop', 'Math Games', 'Science Projects', 'PE & Sports']
    },
    {
      id: 'grade2',
      name: '2nd Class',
      age: '7-8 years',
      color: 'from-green-400 to-emerald-400',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      icon: '🚀',
      tagline: 'Building Confidence & Skills!',
      description: 'Second Class expands academic skills with more complex reading, multiplication basics, and deeper exploration of science and social studies, building confident, independent learners.',
      highlights: [
        { icon: <BookOpen className="w-5 h-5" />, title: 'Advanced Reading', text: 'Chapter books and reading comprehension' },
        { icon: <Calculator className="w-5 h-5" />, title: 'Times Tables', text: 'Multiplication, division, and mental math' },
        { icon: <FlaskConical className="w-5 h-5" />, title: 'Science Inquiry', text: 'Experiments and scientific thinking' },
        { icon: <Music className="w-5 h-5" />, title: 'Arts Integration', text: 'Music, drama, and visual arts' }
      ],
      activities: ['Literature Circles', 'Math Challenges', 'Lab Experiments', 'Creative Writing', 'Team Sports']
    },
    {
      id: 'grade3',
      name: '3rd Class',
      age: '8-9 years',
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
      icon: '⭐',
      tagline: 'Critical Thinking & Creativity!',
      description: 'Third Class students tackle more challenging academics, developing critical thinking, research skills, and creative problem-solving across all subjects while building strong character and teamwork.',
      highlights: [
        { icon: <BookOpen className="w-5 h-5" />, title: 'Literary Analysis', text: 'Understanding themes and making inferences' },
        { icon: <Calculator className="w-5 h-5" />, title: 'Math Reasoning', text: 'Fractions, decimals, and word problems' },
        { icon: <Globe className="w-5 h-5" />, title: 'Geography & History', text: 'Exploring cultures and historical events' },
        { icon: <FlaskConical className="w-5 h-5" />, title: 'STEM Projects', text: 'Engineering challenges and coding basics' }
      ],
      activities: ['Book Reports', 'Math Olympiad', 'Research Projects', 'Drama Club', 'Field Trips']
    },
    {
      id: 'grade4',
      name: '4th Class',
      age: '9-10 years',
      color: 'from-red-400 to-pink-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      icon: '🎯',
      tagline: 'Leadership & Academic Excellence!',
      description: 'Fourth Class prepares students for upper grades with advanced academics, leadership opportunities, and project-based learning that encourages independence, collaboration, and real-world application.',
      highlights: [
        { icon: <BookOpen className="w-5 h-5" />, title: 'Essay Writing', text: 'Persuasive and informative writing' },
        { icon: <Calculator className="w-5 h-5" />, title: 'Advanced Math', text: 'Long division, geometry, and data analysis' },
        { icon: <FlaskConical className="w-5 h-5" />, title: 'Scientific Method', text: 'Designing and conducting experiments' },
        { icon: <Trophy className="w-5 h-5" />, title: 'Leadership Skills', text: 'Student council and peer mentoring' }
      ],
      activities: ['Debate Club', 'Science Fair', 'Math Competitions', 'Community Service', 'Sports Teams']
    },
    {
      id: 'grade5',
      name: '5th Class',
      age: '10-11 years',
      color: 'from-indigo-400 to-purple-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-300',
      icon: '🏆',
      tagline: 'Preparing for Middle School Success!',
      description: 'Fifth Class serves as the bridge to middle school, offering rigorous academics, advanced projects, and opportunities for students to showcase their learning while developing maturity and responsibility.',
      highlights: [
        { icon: <BookOpen className="w-5 h-5" />, title: 'Literary Genres', text: 'Analysis of poetry, fiction, and non-fiction' },
        { icon: <Calculator className="w-5 h-5" />, title: 'Pre-Algebra', text: 'Variables, equations, and ratios' },
        { icon: <Globe className="w-5 h-5" />, title: 'World Studies', text: 'Ancient civilizations and geography' },
        { icon: <Rocket className="w-5 h-5" />, title: 'Innovation Projects', text: 'Robotics, coding, and entrepreneurship' }
      ],
      activities: ['Research Papers', 'Math League', 'Model UN', 'Tech Club', 'Graduation Project']
    }
  ];

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Nurturing Environment',
      description: 'Every child feels valued, safe, and excited to learn',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Creative Learning',
      description: 'Hands-on activities that spark imagination and curiosity',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Small Class Sizes',
      description: 'Individual attention for personalized learning experiences',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Character Building',
      description: 'Developing kindness, resilience, and leadership skills',
      color: 'bg-green-100 text-green-600'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-sky-100 via-purple-50 to-pink-100 font-sans overflow-hidden">
      {/* Decorative floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>🎨</div>
        <div className="absolute top-20 right-20 text-6xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>✨</div>
        <div className="absolute bottom-20 left-20 text-6xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>🌟</div>
        <div className="absolute bottom-10 right-32 text-6xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}>🚀</div>
        <div className="absolute top-1/2 left-1/4 text-5xl animate-pulse" style={{ animationDelay: '1.5s' }}>🎈</div>
        <div className="absolute top-1/3 right-1/4 text-5xl animate-pulse" style={{ animationDelay: '2.5s' }}>🌈</div>
      </div>

      {/* Header Section */}
      <header className="relative pt-12 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 transform hover:scale-110 transition-transform duration-300">
            <h1 className="text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent drop-shadow-lg" 
                style={{ fontFamily: '"Fredoka", "Comic Sans MS", cursive' }}>
              ViviKids
            </h1>
          </div>
          <p className="text-3xl font-bold text-purple-800 mb-4" style={{ fontFamily: '"Bubblegum Sans", cursive' }}>
            Where Every Child Shines! ✨
          </p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Join us on an amazing adventure from Pre-School to 5th Class, where learning is fun, 
            friendships bloom, and dreams take flight!
          </p>
          
          {/* Animated stars */}
          <div className="flex justify-center gap-3 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-8 h-8 fill-yellow-400 text-yellow-400 animate-pulse" 
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-purple-800" style={{ fontFamily: '"Fredoka", cursive' }}>
            Why Families Love ViviKids 💕
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-purple-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto transform hover:rotate-12 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center" style={{ fontFamily: '"Fredoka", cursive' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grades Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-purple-800" style={{ fontFamily: '"Fredoka", cursive' }}>
            Our Learning Journey 🌈
          </h2>
          <p className="text-center text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Click on any class to discover the magical learning adventures waiting for your child!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grades.map((grade) => (
              <div
                key={grade.id}
                className={`relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 cursor-pointer border-4 ${grade.borderColor}`}
                onClick={() => setActiveGrade(activeGrade === grade.id ? null : grade.id)}
              >
                {/* Grade Header */}
                <div className={`bg-gradient-to-r ${grade.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-8xl opacity-20">{grade.icon}</div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-2">{grade.icon}</div>
                    <h3 className="text-3xl font-black mb-1" style={{ fontFamily: '"Fredoka", cursive' }}>
                      {grade.name}
                    </h3>
                    <p className="text-white/90 font-semibold">Ages {grade.age}</p>
                  </div>
                </div>

                {/* Grade Content */}
                <div className={`p-6 ${grade.bgColor}`}>
                  <p className="text-lg font-bold text-purple-700 mb-3" style={{ fontFamily: '"Bubblegum Sans", cursive' }}>
                    {grade.tagline}
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {grade.description}
                  </p>

                  {/* Expandable Details */}
                  {activeGrade === grade.id && (
                    <div className="mt-6 space-y-6 animate-fadeIn">
                      {/* Highlights */}
                      <div>
                        <h4 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2" style={{ fontFamily: '"Fredoka", cursive' }}>
                          <Sparkles className="w-5 h-5" /> Learning Highlights
                        </h4>
                        <div className="space-y-3">
                          {grade.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-2xl shadow-sm">
                              <div className={`bg-gradient-to-r ${grade.color} text-white p-2 rounded-xl flex-shrink-0`}>
                                {highlight.icon}
                              </div>
                              <div>
                                <p className="font-bold text-gray-800">{highlight.title}</p>
                                <p className="text-sm text-gray-600">{highlight.text}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Activities */}
                      <div>
                        <h4 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2" style={{ fontFamily: '"Fredoka", cursive' }}>
                          <Star className="w-5 h-5" /> Fun Activities
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {grade.activities.map((activity, idx) => (
                            <span 
                              key={idx}
                              className={`bg-gradient-to-r ${grade.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md`}
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Click indicator */}
                  <button className={`mt-4 w-full bg-gradient-to-r ${grade.color} text-white font-bold py-3 px-6 rounded-2xl hover:shadow-lg transition-all transform hover:scale-105`}>
                    {activeGrade === grade.id ? 'Show Less ▲' : 'Learn More ▼'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-4 border-purple-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-4 left-4 text-6xl">🎨</div>
              <div className="absolute top-4 right-4 text-6xl">📚</div>
              <div className="absolute bottom-4 left-4 text-6xl">🚀</div>
              <div className="absolute bottom-4 right-4 text-6xl">⭐</div>
            </div>
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative z-10" style={{ fontFamily: '"Fredoka", cursive' }}>
              Ready to Join the ViviKids Family?
            </h2>
            <p className="text-xl text-gray-700 mb-8 relative z-10">
              Give your child the gift of joyful learning, lasting friendships, and endless possibilities!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all">
                Schedule a Visit 🎈
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all">
                Download Brochure 📖
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="relative py-8 text-center text-gray-600">
        <div className="flex justify-center gap-4 mb-4">
          {['🎨', '📚', '🎵', '🚀', '⭐', '🌈', '💝'].map((emoji, i) => (
            <span key={i} className="text-4xl animate-bounce" style={{ animationDelay: `${i * 0.2}s`, animationDuration: '2s' }}>
              {emoji}
            </span>
          ))}
        </div>
        <p className="font-semibold text-lg">Where Every Day is a New Adventure! ✨</p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Bubblegum+Sans&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        body {
          font-family: 'Fredoka', 'Comic Sans MS', cursive;
        }
      `}</style>
    </div>
  );
};

export default ViviKidsPage;