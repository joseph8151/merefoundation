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
 */
const MONTHLY_AMOUNT_PRESETS = [30000, 50000, 100000];

export default function DonationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [frequency, setFrequency] = useState<"regular" | "onetime">("regular");
  const [amount, setAmount] = useState<number | "">("");

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
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-1 text-sm font-semibold text-charcoal">
          후원 방식
        </legend>
        <div className="flex gap-3">
          <label
            className={`flex-1 cursor-pointer border px-4 py-3 text-center text-sm font-medium transition-colors ${
              frequency === "regular"
                ? "border-forest bg-forest text-pure-white"
                : "border-sand-beige text-charcoal/70"
            }`}
          >
            <input
              type="radio"
              name="frequency"
              value="regular"
              checked={frequency === "regular"}
              onChange={() => setFrequency("regular")}
              className="sr-only"
            />
            정기후원 (매월)
          </label>
          <label
            className={`flex-1 cursor-pointer border px-4 py-3 text-center text-sm font-medium transition-colors ${
              frequency === "onetime"
                ? "border-forest bg-forest text-pure-white"
                : "border-sand-beige text-charcoal/70"
            }`}
          >
            <input
              type="radio"
              name="frequency"
              value="onetime"
              checked={frequency === "onetime"}
              onChange={() => setFrequency("onetime")}
              className="sr-only"
            />
            일시후원 (1회)
          </label>
        </div>
      </fieldset>

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
          className="border border-sand-beige bg-pure-white px-4 py-3 text-sm font-normal text-charcoal placeholder:text-charcoal/30 focus:border-forest"
        />
      </div>

      <label className="flex flex-col gap-2 text-sm font-semibold text-charcoal">
        연락처 (선택)
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="010-0000-0000"
          className="border border-sand-beige bg-pure-white px-4 py-3 text-sm font-normal text-charcoal placeholder:text-charcoal/30 focus:border-forest"
        />
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
