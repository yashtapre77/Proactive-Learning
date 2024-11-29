import React from 'react';
import landingImage from "../assets/landing-image.svg"
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Empowering Students to Succeed
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Our platform provides personalized dashboards for students to track their progress and receive tailored performance improvement suggestions.
          </p>
          
          <Link to="loginSignUp"><button className="bg-[#582E5E] text-white px-5 py-3 rounded hover:bg-[#471B4A] transition duration-200">
            Get Started
          </button></Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src= {landingImage}
            alt="Student Success"
            className="w-full h-auto rounded"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Features That Help You Thrive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Personalized Dashboards</h3>
              <p className="text-gray-600 mb-4">
                Get a tailored view of your academic journey, including grades, assignments, and deadlines.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
              <p className="text-gray-600 mb-4">
                Monitor your progress over semesters and receive insights to help improve your performance.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Customized Recommendations</h3>
              <p className="text-gray-600 mb-4">
                Get suggestions on resources and study techniques based on your learning style and performance.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Goal Setting & Tracking</h3>
              <p className="text-gray-600 mb-4">
                Set academic goals and track your achievements to stay motivated and focused.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600 mb-4">
                Connect with peers and mentors to share knowledge and foster a supportive learning environment.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Interactive Learning Resources</h3>
              <p className="text-gray-600 mb-4">
                Access a variety of interactive tools and resources to enhance your learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Call to Action Section */}
      <section className="py-16 bg-white text-black text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
        <p className="mb-6">
          Sign up to create your personalized dashboard and start tracking your academic success.
        </p>
        <a
          href="/loginSignUp"
          className="bg-gray-200 text-blue-600 px-5 py-3 rounded  transition duration-200"
        >
          Sign Up Now
        </a>
      </section>
    </div>
  );
};

export default LandingPage;
