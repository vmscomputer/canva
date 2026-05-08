/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Target, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight, 
  PlayCircle, 
  Star, 
  Clock, 
  Globe,
  Plus,
  Minus,
  MessageCircle,
  Facebook,
  Instagram,
  Zap,
  Gift,
  Sparkles
} from 'lucide-react';

// --- Types ---
interface CourseFeature {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface FaqItem {
  q: string;
  a: string;
}

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 h-16 flex items-center px-4 md:px-12">
    <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200 uppercase">
          M
        </div>
        <span className="font-black text-lg md:text-xl tracking-tighter text-slate-900 uppercase">Microskill <span className="text-blue-600 hidden sm:inline">Academy</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Live Class Tomorrow</span>
        </div>
        <div className="h-4 w-px bg-slate-200"></div>
        <span className="text-slate-400">Support: +91 63815 16308</span>
      </div>
      <a href="https://rzp.io/rzp/EEUs9iJ" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 uppercase tracking-tight">
        Join Now
      </a>
    </div>
  </nav>
);

const SectionHeading = ({ children, subtitle, center = true }: { children: React.ReactNode, subtitle?: string, center?: boolean }) => (
  <div className={`mb-10 md:mb-16 ${center ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tighter leading-tight font-display">{children}</h2>
    {subtitle && <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">{subtitle}</p>}
  </div>
);

export default function App() {
  const courses: CourseFeature[] = [
    {
      title: "கேன்வா வடிவமைப்பு (Canva)",
      desc: "ப்ரொபஷனல் லோகோக்கள், போஸ்டர்கள் மற்றும் சோஷியல் மீடியா டிசைன்களை நிமிடங்களில் உருவாக்க கற்றுக்கொள்ளுங்கள்.",
      icon: <Palette className="w-8 h-8 text-blue-500" />
    },
    {
      title: "மெட்டா விளம்பரங்கள் (Meta Ads)",
      desc: "Facebook மற்றும் Instagram மூலம் உங்கள் விற்பனையை 10 மடங்கு அதிகரிக்க சரியான டார்கெட்டிங் முறைகளை அறியுங்கள்.",
      icon: <Target className="w-8 h-8 text-blue-500" />
    },
    {
      title: "டிஜிட்டல் தயாரிப்பு விற்பனை (Digital Product Selling)",
      desc: "டிஜிட்டல் தயாரிப்புகளை உருவாக்கி, அவற்றை உலகெங்கும் விற்பனை செய்து லாபம் ஈட்டும் ரகசியங்கள்.",
      icon: <ShoppingBag className="w-8 h-8 text-blue-500" />
    }
  ];

  const faqs: FaqItem[] = [
    {
      q: "இந்த கோர்ஸ் யாருக்கானது?",
      a: "மாணவர்கள், இல்லத்தரசிகள், வணிக உரிமையாளர்கள் மற்றும் ஆன்லைனில் பணம் சம்பாதிக்க விரும்பும் எவரும் இதில் சேரலாம்."
    },
    {
      q: "கோர்ஸ் காலாவதி ஆகுமா?",
      a: "இல்லை, ஒருமுறை பணம் செலுத்தினால் வாழ்நாள் முழுவதும் (Lifetime Access) இந்த கோர்ஸை நீங்கள் பார்க்கலாம்."
    },
    {
      q: "நான் மொபைலில் படிக்கலாமா?",
      a: "நிச்சயமாக! லேப்டாப் அல்லது மொபைல் இரண்டிலும் இந்த கோர்ஸை வசதியாகப் படிக்கலாம்."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-900 overflow-x-hidden pt-16">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative py-16 md:py-24 px-4 md:px-12 overflow-hidden bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-[10px] md:text-xs font-bold rounded-full mb-6 md:mb-8 uppercase tracking-widest">
              TAMIL COURSE • 2026 MASTERCLASS
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight sm:leading-[0.95] mb-6 md:mb-8 text-slate-900 tracking-tighter font-display">
              Canva & Meta Ads <br className="hidden md:block" />மூலம் <span className="text-blue-600">சம்பாதிக்கலாம்</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              டிஜிட்டல் தயாரிப்புகளை உருவாக்கி, விளம்பரங்கள் மூலம் லாபம் ஈட்டுவதற்கான முழுமையான வழிகாட்டி. எளிய தமிழில்!
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center lg:justify-start">
              <a href="https://rzp.io/rzp/EEUs9iJ" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-blue-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-2xl shadow-blue-100 hover:scale-105 active:scale-95">
                இப்போதே இணையுங்கள் <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="bg-slate-900 text-white rounded-2xl p-4 flex items-center gap-6 shadow-xl">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} alt="S" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-xs font-black uppercase tracking-widest">12,450+ Students</p>
                  <p className="text-[10px] text-slate-400 font-bold">JOINED THIS MONTH</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4 font-sans">
              {[
                { title: "Canva Graphics", sub: "Pro Designs", icon: <Palette className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />, bg: "bg-purple-100" },
                { title: "Meta Ads", sub: "Social Ads", icon: <Target className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />, bg: "bg-blue-100" },
                { title: "Digital Prods", sub: "Assets", icon: <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />, bg: "bg-amber-100" },
                { title: "Sales Funnel", sub: "Automation", icon: <Zap className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />, bg: "bg-emerald-100" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-2 md:gap-4 p-3 md:p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow group text-center sm:text-left">
                  <div className={`w-10 h-10 md:w-12 md:h-12 ${item.bg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-[11px] md:text-sm">{item.title}</h4>
                    <p className="text-[10px] text-slate-500 font-bold tracking-tight">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <iframe 
              src="https://player.vimeo.com/video/1190361542?autoplay=1&muted=1&loop=1&autopause=0&controls=1" 
              title="Microskill Video" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              className="mt-8 rounded-3xl md:rounded-[40px] shadow-3xl border border-slate-200 aspect-video w-full"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* --- Courses Section --- */}
      <section id="courses" className="py-24 px-4 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="இந்த ஒரே பயிற்சியில் நீங்கள் நிபுணத்துவம் பெறப்போகும் 3 முக்கிய பகுதிகள் இவை">
            என்ன கற்றுக்கொள்ளப்போகிறீர்கள்?
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-2xl transition-all group"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner shadow-blue-100">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tighter text-slate-900">{course.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {course.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Bonuses Section --- */}
      <section className="py-24 px-4 md:px-12 bg-blue-600 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-400">
                <Sparkles className="w-4 h-4" /> exclusive bonus bundle
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight font-display">
                இப்போதே சேர்ந்தால் <br /> <span className="text-blue-200">மெகா போனஸ்</span> உண்டு!
              </h2>
              <p className="text-blue-100 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto lg:mx-0">
                கோர்ஸ் பயிற்சியுடன் சேர்த்து ₹15,000 மதிப்பிலான இந்த போனஸ்களை நீங்கள் முற்றிலும் இலவசமாகப் பெறுவீர்கள்.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {[
                {
                  title: "2 Year Canva Pro",
                  desc: "2 வருடங்களுக்கு கேன்வா ப்ரோ அம்சங்களை இலவசமாகப் பயன்படுத்தலாம்.",
                  icon: <Palette className="w-8 h-8 text-white" />,
                  tag: "Value: ₹7,999"
                },
                {
                  title: "400+ Digital Products",
                  desc: "உடனடியாக விற்பனை செய்து லாபம் ஈட்டக்கூடிய 400+ டிஜிட்டல் தயாரிப்புகள்.",
                  icon: <ShoppingBag className="w-8 h-8 text-white" />,
                  tag: "Value: ₹6,999"
                }
              ].map((bonus, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10, rotate: i % 2 === 0 ? -1 : 1 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-[40px] relative overflow-hidden group"
                >
                  <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-xl">
                    FREE
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {bonus.icon}
                  </div>
                  <h4 className="text-2xl font-black text-white mb-3 tracking-tight">{bonus.title}</h4>
                  <p className="text-blue-100 font-bold text-sm mb-6 leading-relaxed">{bonus.desc}</p>
                  <p className="text-[10px] font-black text-blue-200 uppercase tracking-[0.2em]">{bonus.tag}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Benefits Section --- */}
      <section id="benefits" className="py-32 px-4 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="space-y-6">
                <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200" className="rounded-[40px] h-72 w-full object-cover shadow-2xl border border-slate-100" alt="Video Editing Masterclass" referrerPolicy="no-referrer" />
                <div className="bg-blue-600 p-10 rounded-[40px] text-white shadow-2xl shadow-blue-100">
                  <h4 className="text-4xl font-black mb-2 tracking-tighter">AI Video Mastery</h4>
                  <p className="text-blue-100 text-xs font-black uppercase tracking-[0.2em]">Premiere Pro & AI Tools</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-200 shadow-inner">
                  <Globe className="w-12 h-12 text-blue-600 mb-6" />
                  <p className="font-black text-slate-900 leading-[1.1] text-xl tracking-tight uppercase">எங்கிருந்தும் ஆன்லைனில் கற்கலாம்</p>
                </div>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" className="rounded-[40px] h-72 w-full object-cover shadow-2xl border border-slate-100" alt="benefit 2" referrerPolicy="no-referrer" />
              </div>
            </div>

            <div className="flex-1">
              <SectionHeading center={false}>
                ஏன் எங்களிடம் <br/>சேர வேண்டும்?
              </SectionHeading>
              
              <div className="space-y-8">
                {[
                  "எளிமையான தமிழ் வழி விளக்கம்",
                  "உடனடி சந்தேகத் தீர்வுகளுக்கு பிரத்யேக குழு",
                  "வாழ்நாள் முழுவதும் அணுகல் அனுமதி",
                  "முயற்சி செய்து வெற்றி பெற்றவர்களின் அனுபவம்",
                  "பணம் சம்பாதிக்க தேவையான ஆன்லைன் திறன்கள்"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="text-slate-700 font-bold text-lg tracking-tight leading-tight">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex items-center gap-8 p-8 bg-slate-50 rounded-[32px] border border-slate-200 shadow-sm">
                <div className="flex items-center gap-1.5 text-yellow-500">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
                </div>
                <div>
                  <p className="text-slate-900 font-black text-2xl tracking-tighter leading-none">4.9/5 ரேட்டிங்</p>
                  <p className="text-xs text-slate-400 font-black uppercase tracking-widest mt-1">TRUSTED BY THOUSANDS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Pricing Section --- */}
      <section id="pricing" className="py-32 px-4 md:px-12 bg-slate-50 overflow-hidden relative border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="கேன்வா + மெட்டா + டிஜிட்டல் சேலிங் = மெகா பண்டில்">
            கட்டண விபரம்
          </SectionHeading>

          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-white border-2 border-blue-600 rounded-[40px] p-8 md:p-16 shadow-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] px-8 py-2 font-black rounded-bl-3xl uppercase tracking-[0.2em] shadow-md">
              Limited Time Offer
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <p className="text-slate-400 text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4">Masterclass Access</p>
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <span className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter font-display">₹999</span>
                  <span className="text-xl md:text-2xl text-slate-300 line-through font-bold">₹9,999</span>
                </div>
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest mb-8">
                  90% DISCOUNT APPLIED
                </div>
                <ul className="space-y-4 text-slate-700 font-bold mb-10">
                  {[
                    "Everything in Masterclass bundle",
                    "2 Years Canva Special Access (FREE)",
                    "400+ Digital Product Assets (FREE)",
                    "Lifetime Access & Updates",
                    "Personal Mentorship Group"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <CheckCircle2 className={`w-6 h-6 shrink-0 ${i < 3 ? 'text-blue-600' : 'text-green-500'}`} />
                      <span className={`tracking-tight ${i < 3 ? 'text-blue-700 font-black' : ''}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-[320px] shrink-0">
                <a href="https://rzp.io/rzp/EEUs9iJ" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 text-white py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 group mb-4">
                  இப்போதே சேருங்கள்
                  <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
                </a>
                <p className="text-center text-[10px] text-slate-400 font-black uppercase tracking-widest mb-6">Secure Checkout • 7-Day Money Back</p>
                
                <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex -space-x-3">
                      {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700"></div>)}
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black">12,450+ Students</p>
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">SUCCESS STORIES</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="mt-12 text-center text-slate-400 text-sm font-bold tracking-tight flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-red-500 animate-pulse" /> 
              இந்தச் சலுகை மிக விரைவில் முடிவடையும்!
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section id="faq" className="py-32 px-4 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>அடிக்கடி கேட்கப்படும் கேள்விகள்</SectionHeading>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-8 px-10 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-black text-xl text-slate-800 tracking-tighter">{faq.q}</span>
                  <div className={`transition-transform duration-500 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    {openFaq === idx ? <Minus className="w-6 h-6 text-blue-600" /> : <Plus className="w-6 h-6 text-slate-300" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-slate-50/50"
                    >
                      <div className="px-10 pb-10 pt-2 text-slate-500 text-lg leading-relaxed border-t border-slate-100 font-medium">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 border-t border-slate-800 pt-32 pb-16 px-4 md:px-12 text-slate-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center text-white font-black text-xl">
                M
              </div>
              <span className="font-black text-3xl tracking-tighter text-white uppercase">Microskill</span>
            </div>
            <p className="max-w-md text-slate-500 leading-relaxed font-bold text-lg mb-10">
              நாங்கள் தமிழர்களுக்கு டிஜிட்டல் திறன்களைக் கற்பித்து, அவர்களை ஆன்லைன் மூலம் முன்னேற்ற உறுதிபூண்டுள்ளோம்.
            </p>
            <div className="flex gap-6">
              {[Facebook, Instagram, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-400 group">
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-slate-100 font-black mb-10 uppercase tracking-[0.3em] text-xs">Navigation</h5>
            <ul className="space-y-6 text-sm font-black uppercase tracking-widest">
              <li><a href="#courses" className="hover:text-blue-500 transition-colors">பயிற்சிகள்</a></li>
              <li><a href="#benefits" className="hover:text-blue-500 transition-colors">நன்மைகள்</a></li>
              <li><a href="#pricing" className="hover:text-blue-500 transition-colors">விலை விபரம்</a></li>
              <li><a href="#faq" className="hover:text-blue-500 transition-colors">கேள்வி-பதில்</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-slate-100 font-black mb-10 uppercase tracking-[0.3em] text-xs">Reach Us</h5>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <p className="text-white font-black text-lg tracking-tight mb-1">+91 63815 16308</p>
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-600 italic">WhatsApp Available</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <p className="text-white font-black text-lg tracking-tight">support@microskill.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-16 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-700">
            © 2026 MICROSKILL ACADEMY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
