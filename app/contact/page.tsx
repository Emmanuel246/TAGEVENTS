import FloatingDock from "@/components/FloatingDock";

export default function ContactPage() {
  return (
    <main className="min-h-screen text-white pt-32 pb-40 relative overflow-hidden">
      <FloatingDock />

      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-[10vw] leading-[0.8] font-bold tracking-tighter text-white/90 mb-12 mix-blend-difference">
          GET IN TOUCH
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10">
              <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">
                New Business
              </h3>
              <a
                href="mailto:Talktotheassistantguru@gmail.com"
                className="text-2xl md:text-3xl hover:text-white/70 transition-colors block mb-1 break-words max-w-full"
              >
                Talktotheassistantguru@gmail.com
              </a>
              <p className="text-white/40">+234 813 104 5757</p>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10">
              <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">
                Press & Careers
              </h3>
              <a
                href="mailto:Talktotheassistantguru@gmail.com"
                className="text-2xl md:text-3xl hover:text-white/70 transition-colors block break-words max-w-full"
              >
                Talktotheassistantguru@gmail.com
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-2">Lagos HQ</h4>
                <p className="text-white/60 break-words">
                  B14, Gate Lily, Royal Pine Estate
                  <br />
                  Lagos, Nigeria
                </p>
              </div>
              {/* <div>
                                <h4 className="font-bold mb-2">London Office</h4>
                                <p className="text-white/60">44 Oxford Street<br />London, UK</p>
                            </div> */}
            </div>
          </div>

          <form className="space-y-6 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-white/40 transition-colors text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-white/40 transition-colors text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/60">
                Subject
              </label>
              <select className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-white/40 transition-colors text-white/80">
                <option className="bg-black text-white">Event Inquiry</option>
                <option className="bg-black text-white">
                  Press Opportunity
                </option>
                <option className="bg-black text-white">
                  General Question
                </option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/60">
                Message
              </label>
              <textarea
                rows={6}
                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-white/40 transition-colors text-white"
              />
            </div>
            <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-white/90 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
