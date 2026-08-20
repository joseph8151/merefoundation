"use client";

import { useState, type FormEvent } from "react";

/**
 * Donation *intent* form only. There is no payment gateway wired up yet --
 * this simply captures the visitor's intent locally so the layout/UX is
 * ready for a real integration later.
 *
 * TODO (backend/payments): replace the onSubmit handler below with a real
 * call to a payment gateway (e.g. an app/api/donate route that talks to a
 * PG such as Toss Payments / KG이니시스 / 카카오페이, or an email/CRM
 * webhook if MERE prefers manual processing at launch). Never store card
 * details on this client-side form.
 *
 * IMPORTANT: this form intentionally does NOT collect a resident
 * registration number (주민등록번호), even though the printed 정기후원
 * 신청서 has a field for it. Any information needed for donation-receipt
 * issuance is collected later through a separate, secure process -- see
 * the notice shown on the confirmation screen below.
 */
const MONTHLY_AMOUNT_PRESETS = [30000, 50000, 100000];

const PURPOSE_OPTIONS = [
  { value: "general", label: "일반 후원 (용도 지정 안함)" },
  { value: "mission", label: "해외선교 지정후원" },
  { value: "education", label: "교육지원" },
  { value: "emergency", label: "긴급구호" },
  { value: "corporate", label: "기업·기관 후원" },
  { value: "goods", label: "물품후원" },
];

const CMS_DAYS = [5, 15, 25];

const FREQUENCY_OPTIONS = [
  { value: "regular", label: "정기후원 (매월)" },
  { value: "quarterly", label: "분기후원 (분기별)" },
  { value: "onetime", label: "일시후원 (1회)" },
] as const;

type Frequency = (typeof FREQUENCY_OPTIONS)[number]["value"];

const inputClass =
  "border border-sand-beige bg-pure-white px-4 py-3 text-sm font-normal text-charcoal placeholder:text-charcoal/30 focus:border-forest";

export default function DonationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [frequency, setFrequency] = useState<Frequency>("regular");
  const [amount, setAmount] = useState<number | "">("");
  const [cmsDay, setCmsDay] = useState<number>(25);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send to a real backend / payment gateway. For now we only
    // acknowledge the intent locally -- nothing is transmitted anywhere.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-forest/30 bg-warm-ivory p-8 text-center">
        <p className="font-display text-xl text-forest">
          후원 의사를 남겨주셔서 감사합니다.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
          현재 온라인 결제 시스템은 준비 중입니다. 실제 후원 절차는 결제
          시스템 연동 완료 후 안내드릴 예정이며, 남겨주신 정보는 저장되지
          않았습니다.
        </p>
        <p className="mt-5 border-t border-forest/15 pt-5 text-xs leading-relaxed text-charcoal/50">
          기부금영수증 발급을 위한 추가정보는 별도의 안전한 절차를 통해
          안내드립니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-1 text-sm font-semibold text-charcoal">
          후원 방식
        </legend>
        <div className="flex flex-wrap gap-3">
          {FREQUENCY_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className={`min-w-[8.5rem] flex-1 cursor-pointer border px-4 py-3 text-center text-sm font-medium transition-colors ${
                frequency === opt.value
                  ? "border-forest bg-forest text-pure-white"
                  : "border-sand-beige text-charcoal/70"
              }`}
            >
              <input
                type="radio"
                name="frequency"
                value={opt.value}
                checked={frequency === opt.value}
                onChange={() => setFrequency(opt.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
        성명
        <input
          required
          type="text"
          name="name"
          autoComplete="name"
          placeholder="홍길동"
          className={inputClass}
        />
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
          휴대전화
          <input
            required
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="010-0000-0000"
            className={inputClass}
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
            className={inputClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
        주소
        <input
          type="text"
          name="address"
          autoComplete="street-address"
          placeholder="주소를 입력해주세요"
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
        후원 목적 (선택)
        <select name="purpose" defaultValue="general" className={inputClass}>
          {PURPOSE_OPTIONS.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </label>

      <div className="flex flex-col gap-3">
        <span className="text-sm font-semibold text-charcoal">
          후원 금액 (원)
        </span>

        {frequency === "regular" && (
          <div className="flex flex-wrap gap-3" role="group" aria-label="월 정기후원 금액 선택">
            {MONTHLY_AMOUNT_PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmount(preset)}
                aria-pressed={amount === preset}
                className={`flex-1 min-w-[6.5rem] border px-4 py-3 text-center text-sm font-medium transition-colors ${
                  amount === preset
                    ? "border-forest bg-forest text-pure-white"
                    : "border-sand-beige text-charcoal/70 hover:border-forest/50"
                }`}
              >
                월 {(preset / 10000).toLocaleString()}만원
              </button>
            ))}
          </div>
        )}

        <input
          required
          type="number"
          min={1000}
          step={1000}
          name="amount"
          placeholder="직접 입력 (원)"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value === "" ? "" : Number(e.target.value))
          }
          className={inputClass}
        />
      </div>

      {frequency !== "onetime" && (
        <fieldset className="flex flex-col gap-3">
          <legend className="mb-1 text-sm font-semibold text-charcoal">
            CMS 희망 납부일
          </legend>
          <div className="flex gap-3">
            {CMS_DAYS.map((day) => (
              <label
                key={day}
                className={`flex-1 cursor-pointer border px-4 py-3 text-center text-sm font-medium transition-colors ${
                  cmsDay === day
                    ? "border-forest bg-forest text-pure-white"
                    : "border-sand-beige text-charcoal/70"
                }`}
              >
                <input
                  type="radio"
                  name="cmsDay"
                  value={day}
                  checked={cmsDay === day}
                  onChange={() => setCmsDay(day)}
                  className="sr-only"
                />
                매월 {day}일
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/70">
        <input
          required
          type="checkbox"
          name="privacyAgree"
          className="mt-0.5 h-4 w-4 shrink-0 accent-forest"
        />
        <span>
          개인정보 수집 및 이용에 동의합니다.{" "}
          <span className="text-charcoal/45">
            (후원 의사 확인 및 연락 목적, 필수)
          </span>
        </span>
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 bg-forest px-6 py-4 text-sm font-semibold tracking-wide text-pure-white hover:bg-forest-dark"
      >
        후원 의사 남기기 <span aria-hidden>→</span>
      </button>
      <p className="text-xs leading-relaxed text-charcoal/45">
        ※ 현재는 결제 시스템 연동 전 단계로, 실제 결제가 진행되지 않습니다.
        본 폼은 향후 결제 시스템(PG) 연동을 위한 레이아웃입니다.
      </p>
    </form>
  );
}
