import AboutPage from "./AboutPage";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const modal = document.getElementById("contactModal") as HTMLDialogElement;
    if (modal && !modal.showModal) {
      (modal as any).showModal = () => modal.setAttribute("open", "true");
    }
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gradient-to-br from-white via-slate-100 to-slate-200">
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="The Freedom Project Logo" className="h-10 w-10 rounded-full shadow-md" />
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">The Freedom Project</h1>
          </div>
          <nav className="flex items-center gap-4">
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">About</a>
            <button
              onClick={() => document.getElementById('contactModal')?.showModal()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-200"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 leading-tight">
          Empowering Small Businesses with Smart Automation
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We help SMBs save time, reduce manual tasks, and grow efficiently using AI-driven workflows tailored to their needs.
        </p>
        <button
          onClick={() => document.getElementById('contactModal')?.showModal()}
          className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition duration-200"
        >
          Get Started Free
        </button>
      </main>

      <dialog id="contactModal" className="rounded-xl bg-white/80 backdrop-blur-md p-6 shadow-2xl border border-slate-200 max-w-lg w-full mx-auto open:animate-fade-in">
        <h3 className="text-xl font-bold mb-4 text-slate-900">📬 Send Us a Message</h3>
        <form action="https://formsubmit.io/send/your@email.com" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
          <textarea name="message" placeholder="How can we help you?" required className="w-full p-3 rounded-md border border-gray-300 h-32 resize-none focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
          <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-medium transition">
            Send Inquiry
          </button>
        </form>
        <form method="dialog" className="mt-4 text-right">
          <button className="text-sm text-gray-500 hover:underline">Close</button>
        </form>
      </dialog>

      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm mt-20">
        © {new Date().getFullYear()} The Freedom Project, LLC · Established 2021 · Built with Purpose · Powered by AI
      </footer>
    </div>
  );
}
