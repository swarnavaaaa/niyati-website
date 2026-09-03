import React, { useState } from 'react';
import { Send, CheckCircle2, Shield, AlertCircle } from 'lucide-react';
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
    'Just a general question',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg('Please share your name so I know who I am talking with.');
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
      <div className="bg-[#FFFFFF] border border-[#1A180E]/15 p-8 sm:p-12 text-[#1A180E] space-y-6 shadow-sm rounded-lg">
        <div className="flex items-center space-x-3 text-[#FF7F3F]">
          <CheckCircle2 className="w-6 h-6" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider">Message Sent</span>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-3xl text-[#1A180E]">
            Thanks for reaching out, {formData.name.split(' ')[0] || 'friend'}.
          </h3>
          <p className="font-sans text-[#2D2913] text-base leading-relaxed max-w-lg">
            I've received your note with care. I'll read through it and reply personally to <span className="font-semibold text-[#1A180E]">{formData.email}</span> within one or two days.
          </p>
        </div>

        <div className="pt-4 border-t border-[#1A180E]/10">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-mono uppercase tracking-wider text-[#1A180E] hover:text-[#FF7F3F] font-bold underline underline-offset-4"
          >
            Send another note
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#FFFFFF] border border-[#1A180E]/15 p-6 sm:p-10 space-y-8 text-[#1A180E] shadow-sm rounded-lg" noValidate>
      
      {/* Friendly Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#1A180E]/10 font-mono text-xs text-[#2D2913] gap-2">
        <span className="font-bold text-[#1A180E]">SEND A NOTE</span>
        <div className="flex items-center space-x-1.5 text-[#2D2913]">
          <Shield className="w-3.5 h-3.5 text-[#FF7F3F]" />
          <span>Everything you share is completely confidential</span>
        </div>
      </div>

      {errorMsg && (
        <div className="p-3.5 bg-[#FF7F3F]/15 border border-[#FF7F3F] text-[#1A180E] text-xs font-mono flex items-center space-x-2 rounded">
          <AlertCircle className="w-4 h-4 shrink-0 text-[#FF7F3F]" />
          <span className="font-medium">{errorMsg}</span>
        </div>
      )}

      {/* Form Fields */}
      <div className="space-y-6">
        
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-[#1A180E] block font-sans">
              What's your name? <span className="text-[#FF7F3F]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Maya Patel"
              className="w-full px-4 py-3 bg-[#FFFDE0] border border-[#1A180E]/20 text-[#1A180E] placeholder:text-[#2D2913]/40 text-sm font-sans rounded focus:border-[#1A180E] focus:ring-1 focus:ring-[#FF7F3F]"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-[#1A180E] block font-sans">
              Where should I reply? (Email) <span className="text-[#FF7F3F]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. maya@example.com"
              className="w-full px-4 py-3 bg-[#FFFDE0] border border-[#1A180E]/20 text-[#1A180E] placeholder:text-[#2D2913]/40 text-sm font-sans rounded focus:border-[#1A180E] focus:ring-1 focus:ring-[#FF7F3F]"
              required
            />
          </div>
        </div>

        {/* Phone & Topic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-[#1A180E] block font-sans">
              Phone number <span className="text-xs text-[#2D2913]/60">(optional, if you prefer a call)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 bg-[#FFFDE0] border border-[#1A180E]/20 text-[#1A180E] placeholder:text-[#2D2913]/40 text-sm font-sans rounded focus:border-[#1A180E] focus:ring-1 focus:ring-[#FF7F3F]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="topic" className="text-sm font-medium text-[#1A180E] block font-sans">
              What would you like support with?
            </label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#FFFDE0] border border-[#1A180E]/20 text-[#1A180E] text-sm font-sans rounded focus:border-[#1A180E] focus:ring-1 focus:ring-[#FF7F3F] cursor-pointer"
            >
              {topicOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#FFFFFF] text-[#1A180E]">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* In Person or Online */}
        <div className="space-y-2.5 pt-1">
          <label className="text-sm font-medium text-[#1A180E] block font-sans">
            Do you prefer in-person in Pune or online video?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {formatOptions.map((fmt) => (
              <button
                type="button"
                key={fmt}
                onClick={() => setFormData((prev) => ({ ...prev, format: fmt }))}
                className={`px-3.5 py-2.5 text-xs font-mono border text-left transition-colors rounded ${
                  formData.format === fmt
                    ? 'border-[#1A180E] bg-[#FDFF6D] text-[#1A180E] font-bold shadow-sm'
                    : 'border-[#1A180E]/20 text-[#2D2913] hover:border-[#1A180E] hover:text-[#1A180E] bg-[#FFFDE0]'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2 pt-1">
          <label htmlFor="message" className="text-sm font-medium text-[#1A180E] block font-sans">
            What's been going on? <span className="text-[#FF7F3F]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Feel free to share a few lines about what's bringing you to therapy..."
            className="w-full px-4 py-3 bg-[#FFFDE0] border border-[#1A180E]/20 text-[#1A180E] placeholder:text-[#2D2913]/40 text-sm font-sans rounded focus:border-[#1A180E] focus:ring-1 focus:ring-[#FF7F3F] resize-y"
            required
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#FDFF6D] hover:bg-[#E5E84A] text-[#1A180E] font-mono text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center space-x-2 border border-[#1A180E] shadow-sm rounded"
          >
            {status === 'submitting' ? (
              <span>Sending your note...</span>
            ) : (
              <>
                <span>Send note</span>
                <Send className="w-3.5 h-3.5 text-[#1A180E]" />
              </>
            )}
          </button>
        </div>

      </div>
    </form>
  );
}
