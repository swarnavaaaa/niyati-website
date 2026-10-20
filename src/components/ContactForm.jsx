import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, Video } from 'lucide-react';
import { siteContent } from '../data/content';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'India',
    topic: 'Stress and burnout',
    slidingScaleInterest: 'No',
    message: '',
  });

  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const topicOptions = [
    'Stress and burnout',
    'Anxiety, OCD and overthinking',
    'Fears, doubts and chronic worry',
    'Self-doubt and self-confidence',
    'Attachment and relationship conflicts',
    'Life transitions, change and adjustment',
    'General question / 15-minute consultation',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg('Please share your name so I know who I am speaking with.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please provide a valid email so I can write back to you.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please share a short note about what brings you here.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: 'India',
      topic: 'Stress and burnout',
      slidingScaleInterest: 'No',
      message: '',
    });
    setStatus('idle');
    setErrorMsg('');
  };

  if (status === 'success') {
    return (
      <div className="bg-white border border-[#E3ECE6] p-6 sm:p-12 text-[#1A2421] space-y-5 sm:space-y-6 shadow-card rounded-2xl sm:rounded-3xl">
        <div className="w-12 h-12 rounded-full bg-[#EBF7F0] text-[#527965] flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1A2421]">
            Thank you for reaching out, {formData.name.split(' ')[0] || 'friend'}.
          </h3>
          <p className="font-sans text-[#5B6D64] text-xs sm:text-base leading-relaxed max-w-lg">
            I’ve received your enquiry note with care. I personally read every enquiry and will reach out to you at <span className="font-medium text-[#1A2421]">{formData.email}</span> to schedule our 15-minute consultation call.
          </p>
        </div>

        <div className="pt-4 border-t border-[#E3ECE6]">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-sans font-medium text-[#194B4E] hover:text-[#527965] underline underline-offset-4 transition-colors min-h-[44px] inline-flex items-center"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="enquiry-form" className="bg-white border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-card">
      <div className="mb-5 sm:mb-6 space-y-1.5 sm:space-y-2">
        <div className="inline-flex items-center space-x-1.5 text-xs text-[#527965] font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Option 2 · Reach Out First</span>
        </div>
        <h3 className="font-serif text-xl sm:text-3xl text-[#1A2421]">
          Fill the Enquiry Form
        </h3>
        <p className="text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
          If you’d rather share a little about yourself or ask a question before booking, fill out the short form and I’ll reach out to you to schedule a 15-minute consultation call.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {errorMsg && (
          <div className="p-3 sm:p-3.5 bg-[#FAF3F0] border border-[#ECCDC0] rounded-xl flex items-center space-x-2 text-xs text-[#8A4834]">
            <AlertCircle className="w-4 h-4 shrink-0 text-[#C67D63]" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div className="space-y-1.5">
            <label htmlFor="name" className="block text-xs font-medium text-[#1A2421]">
              Your Name <span className="text-[#C67D63]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Radhika"
              className="w-full bg-[#FAF8F5] border border-[#E3ECE6] rounded-xl px-3.5 sm:px-4 py-3 text-base sm:text-sm text-[#1A2421] placeholder-[#A0B0A8] focus:bg-white focus:border-[#527965] transition-all min-h-[46px]"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs font-medium text-[#1A2421]">
              Your Email <span className="text-[#C67D63]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. radhika@example.com"
              className="w-full bg-[#FAF8F5] border border-[#E3ECE6] rounded-xl px-3.5 sm:px-4 py-3 text-base sm:text-sm text-[#1A2421] placeholder-[#A0B0A8] focus:bg-white focus:border-[#527965] transition-all min-h-[46px]"
            />
          </div>
        </div>

        {/* Phone & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div className="space-y-1.5">
            <label htmlFor="phone" className="block text-xs font-medium text-[#1A2421]">
              Phone / WhatsApp <span className="text-[#889B92] font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98..."
              className="w-full bg-[#FAF8F5] border border-[#E3ECE6] rounded-xl px-3.5 sm:px-4 py-3 text-base sm:text-sm text-[#1A2421] placeholder-[#A0B0A8] focus:bg-white focus:border-[#527965] transition-all min-h-[46px]"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="location" className="block text-xs font-medium text-[#1A2421]">
              Where are you based?
            </label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full bg-[#FAF8F5] border border-[#E3ECE6] rounded-xl px-3.5 sm:px-4 py-3 text-base sm:text-sm text-[#1A2421] focus:bg-white focus:border-[#527965] transition-all min-h-[46px]"
            >
              <option value="India">Client based in India (₹1,750 / session)</option>
              <option value="International">Client based outside India (₹4,750 / session)</option>
            </select>
          </div>
        </div>

        {/* Focus Area / Topic */}
        <div className="space-y-1.5">
          <label htmlFor="topic" className="block text-xs font-medium text-[#1A2421]">
            What is currently on your mind?
          </label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="w-full bg-[#FAF8F5] border border-[#E3ECE6] rounded-xl px-3.5 sm:px-4 py-3 text-base sm:text-sm text-[#1A2421] focus:bg-white focus:border-[#527965] transition-all min-h-[46px]"
          >
            {topicOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="block text-xs font-medium text-[#1A2421]">
            Share a little about yourself or what brings you here <span className="text-[#C67D63]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="You don't need the perfect words or a neat explanation. Start wherever you are..."
            className="w-full bg-[#FAF8F5] border border-[#E3ECE6] rounded-xl px-3.5 sm:px-4 py-3 text-base sm:text-sm text-[#1A2421] placeholder-[#A0B0A8] focus:bg-white focus:border-[#527965] transition-all resize-y min-h-[100px]"
          />
        </div>

        {/* Sliding Scale Checkbox note */}
        <div className="p-3 bg-[#FAF8F5] border border-[#E3ECE6] rounded-xl text-xs text-[#5B6D64] flex items-start space-x-2.5">
          <input
            type="checkbox"
            id="slidingScaleInterest"
            name="slidingScaleInterest"
            checked={formData.slidingScaleInterest === 'Yes'}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                slidingScaleInterest: e.target.checked ? 'Yes' : 'No',
              }))
            }
            className="mt-0.5 rounded border-[#D8E4DC] text-[#194B4E] focus:ring-[#527965]"
          />
          <label htmlFor="slidingScaleInterest" className="cursor-pointer leading-relaxed">
            I am a student or experiencing financial constraints and would like to inquire about sliding-scale space.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 bg-[#194B4E] hover:bg-[#133A3C] active:bg-[#0E282A] text-white text-xs sm:text-sm font-medium tracking-wide rounded-full shadow-subtle hover:shadow transition-all min-h-[50px] disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <span>Sending your enquiry...</span>
          ) : (
            <>
              <Send className="w-4 h-4 mr-1 text-[#BDDBE7]" />
              <span>Submit enquiry for 15-min consultation</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-[#788B81]">
          Sessions are conducted online via Google Meet or Zoom. 100% confidential.
        </p>
      </form>
    </div>
  );
}
