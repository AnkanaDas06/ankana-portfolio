import React, { useState } from 'react';
import { 
  Mail, Linkedin, Github, MapPin, Send, CheckCircle2, 
  Copy, Check, Phone, MessageCircle, Twitter, Instagram 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TiltCard } from '../utils/tiltEffect';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start a <span className="text-gradient-cyan">Conversation</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl">
            Open to collaborative projects, research inquiries, hackathons, and software engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-3.5">
              <h3 className="text-xl font-bold text-white mb-4">
                Direct Contact Channels
              </h3>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Official Email</div>
                    <a 
                      href={`mailto:${portfolioData.personal.email}`} 
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors break-all"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp & Direct Call */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* WhatsApp */}
                <a
                  href={portfolioData.personal.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 backdrop-blur-md flex items-center gap-3 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">WhatsApp</div>
                    <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {portfolioData.personal.phone}
                    </div>
                  </div>
                </a>

                {/* Call */}
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-md flex items-center gap-3 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">Phone Call</div>
                    <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {portfolioData.personal.phone}
                    </div>
                  </div>
                </a>
              </div>

              {/* LinkedIn & GitHub */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* LinkedIn */}
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-md flex items-center gap-3 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">LinkedIn</div>
                    <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                      ankana-das2006
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-purple-500/40 backdrop-blur-md flex items-center gap-3 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">GitHub</div>
                    <div className="text-xs font-bold text-white group-hover:text-purple-400 transition-colors">
                      AnkanaDas06
                    </div>
                  </div>
                </a>
              </div>

              {/* X / Twitter & Instagram */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* X */}
                <a
                  href={portfolioData.personal.x}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/40 backdrop-blur-md flex items-center gap-3 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <Twitter className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">X (Twitter)</div>
                    <div className="text-xs font-bold text-white group-hover:text-sky-400 transition-colors">
                      @Ankana100406
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={portfolioData.personal.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-pink-500/40 backdrop-blur-md flex items-center gap-3 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">Instagram</div>
                    <div className="text-xs font-bold text-white group-hover:text-pink-400 transition-colors">
                      @ankana__006
                    </div>
                  </div>
                </a>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">Location</div>
                  <div className="text-xs font-semibold text-white">{portfolioData.personal.location}</div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-purple-950/30 border border-cyan-500/20 text-xs text-slate-300 leading-relaxed">
              💡 <strong>Direct Connect:</strong> Feel free to WhatsApp or Call on <strong>+91 9434987543</strong> for fast responses!
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={6} className="rounded-3xl">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  Fill out the form below to connect with Ankana directly.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center flex flex-col items-center justify-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
                    <h4 className="text-lg font-bold text-white">Thank You!</h4>
                    <p className="text-sm text-slate-300">
                      Your message has been captured. I will get back to you shortly!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Hi Ankana, I'd like to talk about..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </button>
                  </form>
                )}
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
