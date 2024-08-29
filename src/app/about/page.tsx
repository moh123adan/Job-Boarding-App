import { Users, Target, ThumbsUp } from "lucide-react";

export default function About() {
  return (
    <section className="container mx-auto my-16 px-6 md:px-44">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      {/* Company Mission */}
      <div className="flex flex-col md:flex-row items-center justify-around mb-12">
        <div className="flex items-center">
          <Target className="text-red-600 mr-4" size={48} />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to connect job seekers with their dream jobs
              through a user-friendly platform that empowers them to explore
              opportunities worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="flex flex-col md:flex-row items-center justify-around mb-12">
        <div className="flex items-center">
          <ThumbsUp className="text-blue-600 mr-4" size={48} />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
            <p className="text-gray-600">
              We believe in transparency, integrity, and the power of
              collaboration. Our values guide us in everything we do.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="flex flex-col md:flex-row items-center justify-around mb-12">
        <div className="flex items-center">
          <Users className="text-purple-600 mr-4" size={48} />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
            <p className="text-gray-600">
              We are a team of dedicated professionals passionate about helping
              others succeed in their careers. Meet the people behind the
              platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
