'use client'
import Image from "next/image";

import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/signup');
  };

  return (
    <div>
      <Head>
        <title>Loop Chat - Instant Communication</title>
        <meta name="description" content="Connect instantly with Loop Chat. Seamless communication for everyone." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-32 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Connect. Chat. Collaborate.</h1>
        <p className="text-lg opacity-90 mb-6">Experience seamless communication with Loop Chat.</p>
        <button 
          onClick={handleGetStarted} 
          className="bg-white text-indigo-600 py-3 px-8 rounded-full font-semibold hover:bg-gray-200 transition-colors"
        >
          Get Started Free
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-400">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Key Features</h2>
          <p className="text-zinc-900 mt-2">Discover the features that make Loop Chat the best choice.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { title: "Group Conversations", desc: "Create and join group chats easily." },
              { title: "Instant Messaging", desc: "Send and receive messages instantly." },
              { title: "File & Media Sharing", desc: "Easily share files, photos, and videos." }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-slate-200 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-rose-400">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Pricing Plans</h2>
          <p className="text-gray-600 mb-8">Choose the plan that fits your needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Basic", price: "$0/month", features: ["Unlimited Messages", "5 Group Chats", "Basic File Sharing"] },
              { name: "Pro", price: "$9/month", features: ["Unlimited Chats", "Advanced File Sharing", "Video Calls"] },
              { name: "Enterprise", price: "Contact Us", features: ["Custom Solutions", "Dedicated Support", "API Access"] }
            ].map((plan, index) => (
              <div key={index} className="p-6 bg-green-200 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-4xl font-bold text-indigo-600 my-4">{plan.price}</p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  {plan.features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
                <button className="bg-indigo-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-indigo-700 transition">
                  {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


// export const metadata = {
//   title:'Home - LoopChat',
//   description:'LoopChat helps you connect with people of your choice',
// }
