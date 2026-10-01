import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, AlertCircle, Sparkles } from 'lucide-react';
import { siteContent } from '../data/content';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    format: 'In-person in Pune',
    topic: 'Individual Therapy',
    message: '',
  });

  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const formatOptions = [
    'In-person in Pune',
    'Online video call',
    'Either works for me',
  ];

  const topicOptions = [
    'Individual Therapy',
    'Stress, Burnout & Anxiety',
    'Relationships & Family',
    'Big Life Changes',
    'General question',
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
      format: 'In-person in Pune',
      topic: 'Individual Therapy',
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
            I've received your note with care. I personally read every inquiry and will reply to <span className="font-medium text-[#1A2421]">{formData.email}</span> within one or two days.
          </p>
        </div>

        <div className="pt-4 border-t border-[#E3ECE6]">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-sans font-medium text-[#194B4E] hover:text-[#527965] underline underline-offset-4 transition-colors min-h-[44px] inline-flex items-center"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E3ECE6] rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-card">
      <div className="mb-5 sm:mb-6 space-y-1.5 sm:space-y-2">
        <h3 className="font-serif text-xl sm:text-3xl text-[#1A2421]">
          Send a Gentle Note
        </h3>
        <p className="text-xs sm:text-sm text-[#5B6D64] leading-relaxed">
          Tell me a little about what you're seeking. There is no right or wrong way to write this.
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
              placeholder="e.g. Radhika Sharma"
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

        {/* Phone & Topic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div className="space-y-1.5">
            <label htmlFor="phone" className="block text-xs font-medium text-[#1A2421]">
              Phone Number <span className="text-[#889B92] font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className="w-full bg-[#FAF8F5] border border-[#E3ECE6] rounded-xl px-3.5 sm:px-4 py-3 text-base sm:text-sm text-[#1A2421] placeholder-[#A0B0A8] focus:bg-white focus:border-[#527965] transition-all min-h-[46px]"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="topic" className="block text-xs font-medium text-[#1A2421]">
              Area of Focus
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
        </div>

        {/* Preferred Format */}
        <div className="space-y-1.5">
          <label className="block text-xs font-medium text-[#1A2421]">
            Preferred Format
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {formatOptions.map((opt) => (
              <label
                key={opt}
                className={`flex items-center space-x-2.5 p-3 rounded-xl border text-xs cursor-pointer transition-all min-h-[44px] ${
                  formData.format === opt
                    ? 'bg-[#E8EFEA] border-[#527965] text-[#194B4E] font-medium shadow-subtle'
                    : 'bg-[#FAF8F5] border-[#E3ECE6] text-[#5B6D64] hover:bg-white hover:border-[#D8E4DC]'
                }`}
              >
                <input
                  type="radio"
                  name="format"
                  value={opt}
                  checked={formData.format === opt}
                  onChange={handleChange}
                  className="accent-[#527965] w-4 h-4"
                />
                <span className="truncate">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="block text-xs font-medium text-[#1A2421]">
            How can I help? <span className="text-[#C67D63]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share whatever feels comfortable — e.g. what you're feeling, what you hope therapy might bring, or any questions about sessions."
            className="w-full bg-[#FAF8F5] border border-[#E3ECE6] rounded-xl px-3.5 sm:px-4 py-3 text-base sm:text-sm text-[#1A2421] placeholder-[#A0B0A8] focus:bg-white focus:border-[#527965] transition-all resize-none"
          />
        </div>

        {/* Submit (Full width on mobile) */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3.5">
          <div className="flex items-center space-x-2 text-xs text-[#697A72] self-start sm:self-auto">
            <Shield className="w-4 h-4 text-[#527965] shrink-0" />
            <span>Strictly confidential communication</span>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-[#194B4E] hover:bg-[#133A3C] active:bg-[#0E282A] text-white text-xs font-medium tracking-wide rounded-full shadow-subtle hover:shadow transition-all min-h-[48px]"
          >
            <Send className="w-4 h-4 text-[#BDDBE7]" />
            <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
