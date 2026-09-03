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
      <div className="bg-[#FFFEF7] border border-[#1F1B0E] p-8 sm:p-12 text-[#1F1B0E] space-y-6 shadow-sm rounded-lg">
        <div className="flex items-center space-x-3 text-[#FF8A3D]">
          <CheckCircle2 className="w-6 h-6" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider">Message Sent</span>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-3xl text-[#1F1B0E]">
            Thanks for reaching out, {formData.name.split(' ')[0] || 'friend'}.
          </h3>
          <p className="font-sans text-[#3D3820] text-base leading-relaxed max-w-lg">
            I've received your note with care. I'll read through it and reply personally to <span className="font-semibold text-[#1F1B0E]">{formData.email}</span> within one or two days.
          </p>
        </div>

        <div className="pt-4 border-t border-[#FFE28A]">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-mono uppercase tracking-wider text-[#1F1B0E] hover:text-[#FF8A3D] font-bold underline underline-offset-4"
          >
            Send another note
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#FFFEF7] border border-[#1F1B0E] p-6 sm:p-10 space-y-8 text-[#1F1B0E] shadow-sm rounded-lg" noValidate>
      
      {/* Friendly Header */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#FFE28A] font-mono text-xs text-[#3D3820] gap-2">
        <span className="font-bold text-[#1F1B0E]">SEND A NOTE</span>
        <div className="flex items-center space-x-1.5 text-[#3D3820]">
          <Shield className="w-3.5 h-3.5 text-[#FF8A3D]" />
          <span>Everything you share is completely confidential</span>
        </div>
      </div>

      {errorMsg && (
        <div className="p-3.5 bg-[#FF8A3D]/15 border border-[#FF8A3D] text-[#1F1B0E] text-xs font-mono flex items-center space-x-2 rounded">
          <AlertCircle className="w-4 h-4 shrink-0 text-[#FF8A3D]" />
          <span className="font-medium">{errorMsg}</span>
        </div>
      )}

      {/* Form Fields */}
      <div className="space-y-6">
        
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-[#1F1B0E] block font-sans">
              What's your name? <span className="text-[#FF8A3D]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Maya Patel"
              className="w-full px-4 py-3 bg-[#FFFEF7] border border-[#1F1B0E]/25 text-[#1F1B0E] placeholder:text-[#3D3820]/40 text-sm font-sans rounded focus:border-[#1F1B0E] focus:ring-1 focus:ring-[#FF8A3D]"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-[#1F1B0E] block font-sans">
              Where should I reply? (Email) <span className="text-[#FF8A3D]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. maya@example.com"
              className="w-full px-4 py-3 bg-[#FFFEF7] border border-[#1F1B0E]/25 text-[#1F1B0E] placeholder:text-[#3D3820]/40 text-sm font-sans rounded focus:border-[#1F1B0E] focus:ring-1 focus:ring-[#FF8A3D]"
              required
            />
          </div>
        </div>

        {/* Phone & Topic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-[#1F1B0E] block font-sans">
              Phone number <span className="text-xs text-[#3D3820]/60">(optional, if you prefer a call)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 bg-[#FFFEF7] border border-[#1F1B0E]/25 text-[#1F1B0E] placeholder:text-[#3D3820]/40 text-sm font-sans rounded focus:border-[#1F1B0E] focus:ring-1 focus:ring-[#FF8A3D]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="topic" className="text-sm font-medium text-[#1F1B0E] block font-sans">
              What would you like support with?
            </label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#FFFEF7] border border-[#1F1B0E]/25 text-[#1F1B0E] text-sm font-sans rounded focus:border-[#1F1B0E] focus:ring-1 focus:ring-[#FF8A3D] cursor-pointer"
            >
              {topicOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#FFFEF7] text-[#1F1B0E]">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* In Person or Online */}
        <div className="space-y-2.5 pt-1">
          <label className="text-sm font-medium text-[#1F1B0E] block font-sans">
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
                    ? 'border-[#1F1B0E] bg-[#FFC72C] text-[#1F1B0E] font-bold shadow-sm'
                    : 'border-[#FFE28A] text-[#3D3820] hover:border-[#1F1B0E] hover:text-[#1F1B0E] bg-[#FFFEF7]'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2 pt-1">
          <label htmlFor="message" className="text-sm font-medium text-[#1F1B0E] block font-sans">
            What's been going on? <span className="text-[#FF8A3D]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Feel free to share a few lines about what's bringing you to therapy..."
            className="w-full px-4 py-3 bg-[#FFFEF7] border border-[#1F1B0E]/25 text-[#1F1B0E] placeholder:text-[#3D3820]/40 text-sm font-sans rounded focus:border-[#1F1B0E] focus:ring-1 focus:ring-[#FF8A3D] resize-y"
            required
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#FFC72C] hover:bg-[#F5A300] text-[#1F1B0E] font-mono text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center space-x-2 border border-[#1F1B0E] shadow-sm rounded"
          >
            {status === 'submitting' ? (
              <span>Sending your note...</span>
            ) : (
              <>
                <span>Send note</span>
                <Send className="w-3.5 h-3.5 text-[#FF8A3D]" />
              </>
            )}
          </button>
        </div>

      </div>
    </form>
  );
}
