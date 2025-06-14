import AboutPage from "./AboutPage";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-gray-900 p-6 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="The Freedom Project Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold tracking-tight">The Freedom Project</h1>
          </div>
          <div className="space-x-4">
            <a href="/about" className="text-white hover:underline">About</a>
            <button onClick={() => document.getElementById('contactModal').showModal()} className="bg-teal-500 text-white font-medium px-4 py-2 rounded-lg shadow hover:bg-teal-600 transition">Contact</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <section className="text-center py-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Empowering Small Businesses with Smart Automation</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">We help SMBs save time, reduce manual tasks, and grow efficiently using AI-driven workflows tailored to their needs.</p>
          <button onClick={() => document.getElementById('contactModal').showModal()} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-700 transition">Get Started Free</button>
        </section>

        {/* Other sections remain unchanged */}
      </main>

      <dialog id="contactModal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="text-lg font-bold mb-2">Send Us a Message</h3>
          <form action="https://formsubmit.io/send/your@email.com" method="POST" className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" required className="w-full border p-3 rounded-md" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full border p-3 rounded-md" />
            <textarea name="message" placeholder="How can we help you?" required className="w-full border p-3 rounded-md h-32"></textarea>
            <button type="submit" className="bg-teal-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-teal-700 transition">Send Inquiry</button>
          </form>
          <form method="dialog" className="mt-4 text-right">
            <button className="text-sm text-gray-500 hover:underline">Close</button>
          </form>
        </form>
      </dialog>

      <footer className="bg-gray-900 text-gray-300 p-4 text-center text-sm">
        © {new Date().getFullYear()} The Freedom Project, LLC · Established 2021 · Built with purpose · Powered by AI
      </footer>
    </div>
  );
}
