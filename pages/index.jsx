import React from "react";
import { Mail, Calendar, ArrowRight, Users, Rocket } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-dark/80 backdrop-blur">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" className="h-10 w-10" alt="Logo" />
          <h1 className="text-xl font-bold tracking-tight">The Freedom Project</h1>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#about" className="hover:text-teal transition">About Us</a>
          <a href="#services" className="hover:text-teal transition">Services</a>
          <a href="#book" className="hover:text-teal transition">Book Consultation</a>
          <a href="#contact" className="hover:text-teal transition">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative bg-[url('/bg-hero.jpg')] bg-cover bg-center text-center py-28 px-6">
        <div className="bg-dark/80 absolute inset-0 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-4">Smarter Business Starts Here</h2>
          <p className="text-lg mb-6 text-white/80">Helping local businesses automate operations, reduce costs & scale fast.</p>
          <div className="flex justify-center gap-4">
            <a href="#book" className="bg-teal px-6 py-3 rounded-full font-semibold hover:bg-teal/80 transition">Book a Free Audit</a>
            <a href="#contact" className="border border-white px-6 py-3 rounded-full hover:border-teal hover:text-teal transition">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 text-center">
        <h3 className="text-4xl font-bold mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{
            icon: <Mail className="w-8 h-8 mx-auto text-teal" />, title: "Lead Capture Automation",
            desc: "Smart forms & auto email follow-ups for 24/7 client intake."
          }, {
            icon: <Calendar className="w-8 h-8 mx-auto text-teal" />, title: "Smart Scheduling",
            desc: "AI-powered calendar booking & automated reminders."
          }, {
            icon: <ArrowRight className="w-8 h-8 mx-auto text-teal" />, title: "Follow-Up AI",
            desc: "Auto review requests, feedback loops & invoice nudging."
          }].map((item, i) => (
            <div key={i} className="bg-dark border border-white/10 rounded-xl p-6 shadow hover:shadow-lg">
              {item.icon}
              <h4 className="text-xl font-semibold mt-4 mb-2">{item.title}</h4>
              <p className="text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 text-center bg-dark/95 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">About Us</h3>
          <p className="mb-6 text-white/80">The Freedom Project, LLC, founded by a U.S. Govt & AWS systems engineer, brings 10+ years of enterprise-grade systems implementation to local SMBs.</p>
          <p className="text-white/70">Mission: Create efficient systems that save time, money & sanity.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-6">Contact Us</h3>
        <form action="https://formsubmit.co/your@email.com" method="POST" className="max-w-xl mx-auto space-y-4">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-3 bg-dark border border-white/10 rounded" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-3 bg-dark border border-white/10 rounded" required />
          <textarea name="message" placeholder="Message" rows="4" className="w-full p-3 bg-dark border border-white/10 rounded" required></textarea>
          <button type="submit" className="bg-teal text-white px-6 py-3 rounded-full hover:bg-teal/80">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 text-sm text-white/60 border-t border-white/10">
        © {new Date().getFullYear()} The Freedom Project, LLC · Built with Purpose · Powered by AI · Est. 2021
      </footer>
    </div>
  );
}
