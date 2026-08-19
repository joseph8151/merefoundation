"use client";

import { useState, type FormEvent } from "react";

/**
 * Client-side only contact form. No backend is wired up yet.
 *
 * TODO (backend): wire this up to a real endpoint before launch -- e.g. an
 * app/api/contact/route.ts that sends an email via a transactional email
 * service (Resend, SendGrid, AWS SES, ...) or forwards to a CRM/Slack
 * webhook. Right now submitting only shows a local confirmation message;
 * nothing is sent anywhere.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: replace with a real fetch("/api/contact", { method: "POST", ... })
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-forest/30 bg-warm-ivory p-8 text-center">
        <p className="font-display text-xl text-forest">문의가 접수되었습니다.</p>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
          현재 문의 접수 시스템은 준비 중입니다. 빠른 시일 내 담당자가 회신
          드릴 수 있도록 시스템을 정비하고 있으며, 남겨주신 내용은 저장되지
          않았습니다. 급한 문의는 이메일로 직접 연락해주세요.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
        이름
        <input
          required
          type="text"
          name="name"
          autoComplete="name"
          placeholder="홍길동"
          className="border border-sand-beige bg-pure-white px-4 py-3 text-sm font-normal text-charcoal placeholder:text-charcoal/30 focus:border-forest"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
        이메일
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="border border-sand-beige bg-pure-white px-4 py-3 text-sm font-normal text-charcoal placeholder:text-charcoal/30 focus:border-forest"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
        문의유형
        <select
          name="type"
          defaultValue="general"
          className="border border-sand-beige bg-pure-white px-4 py-3 text-sm font-normal text-charcoal focus:border-forest"
        >
          <option value="general">일반 문의</option>
          <option value="partnership">파트너십 문의</option>
          <option value="donation">후원 문의</option>
          <option value="volunteer">자원봉사 문의</option>
          <option value="press">언론 문의</option>
          <option value="etc">기타</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
        내용
        <textarea
          required
          name="message"
          rows={6}
          placeholder="문의하실 내용을 남겨주세요."
          className="resize-none border border-sand-beige bg-pure-white px-4 py-3 text-sm font-normal text-charcoal placeholder:text-charcoal/30 focus:border-forest"
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 bg-forest px-6 py-4 text-sm font-semibold tracking-wide text-pure-white hover:bg-forest-dark"
      >
        문의 보내기 <span aria-hidden>→</span>
      </button>
      <p className="text-xs leading-relaxed text-charcoal/45">
        ※ 현재는 백엔드 연동 전 단계로, 실제로 문의가 전송되지 않습니다.
      </p>
    </form>
  );
}
