import Link from "next/link";
import type { ReactNode } from "react";
import { orgInfo, footerLinks, mainNav } from "@/data/site";
import { PlaceholderBadge } from "@/components/PlaceholderNote";

function InfoRow({
  label,
  value,
  isPlaceholder,
}: {
  label: string;
  value: string;
  isPlaceholder: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-pure-white/70">
      <span className="text-pure-white/40">{label}</span>
      <span className={isPlaceholder ? "text-pure-white/50 italic" : "text-pure-white/85"}>
        {value}
      </span>
      {isPlaceholder ? <PlaceholderBadge className="border-gold/40 bg-transparent text-gold" /> : null}
    </div>
  );
}

/**
 * SNS 링크가 아직 확정되지 않은 경우("#") 클릭해도 아무 일도 일어나지 않는
 * 죽은 링크로 보이지 않도록, 실제 URL이 채워지기 전까지는 비활성 상태의
 * <span>으로 렌더링한다.
 */
function SnsIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const isReady = href !== "#";
  const className =
    "flex h-9 w-9 items-center justify-center border border-pure-white/25 text-xs text-pure-white/80";

  if (!isReady) {
    return (
      <span
        aria-label={`${label} (준비 중)`}
        aria-disabled="true"
        className={`${className} cursor-default opacity-50`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} hover:border-gold hover:text-gold`}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-forest-dark pb-28 pt-16 text-pure-white lg:pb-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 border-b border-pure-white/10 pb-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-4xl font-semibold tracking-tight">
              {orgInfo.mark}
            </p>
            <p className="mt-2 text-sm tracking-[0.14em] text-pure-white/70">
              {orgInfo.nameKo} · {orgInfo.nameEn}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-pure-white/60">
              {orgInfo.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-pure-white/45">
              <Link href="/donate" className="hover:text-gold">GIVE</Link>
              <span aria-hidden>·</span>
              <Link href="/together#volunteer" className="hover:text-gold">SERVE</Link>
              <span aria-hidden>·</span>
              <Link href="/contact?type=prayer" className="hover:text-gold">PRAY</Link>
              <span aria-hidden>·</span>
              <Link href="/what-we-do" className="hover:text-gold">GO</Link>
            </div>
            <div className="mt-6 flex gap-4">
              <SnsIcon href={orgInfo.sns.instagram} label="Instagram">
                IG
              </SnsIcon>
              <SnsIcon href={orgInfo.sns.youtube} label="YouTube">
                YT
              </SnsIcon>
              <SnsIcon href={orgInfo.sns.blog} label="블로그">
                BL
              </SnsIcon>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow text-xs text-gold">CONTACT</p>
            <InfoRow label="주소" value={orgInfo.address.value} isPlaceholder={orgInfo.address.isPlaceholder} />
            <InfoRow label="대표전화" value={orgInfo.phone.value} isPlaceholder={orgInfo.phone.isPlaceholder} />
            <InfoRow label="이메일" value={orgInfo.email.value} isPlaceholder={orgInfo.email.isPlaceholder} />
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow text-xs text-gold">ORGANIZATION</p>
            <InfoRow
              label="고유번호"
              value={orgInfo.businessRegistrationNumber.value}
              isPlaceholder={orgInfo.businessRegistrationNumber.isPlaceholder}
            />
            <InfoRow
              label="후원계좌"
              value={`${orgInfo.bankAccount.value.bank} ${orgInfo.bankAccount.value.number} (예금주: ${orgInfo.bankAccount.value.holder})`}
              isPlaceholder={orgInfo.bankAccount.isPlaceholder}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 text-xs text-pure-white/50 md:flex-row md:items-center md:justify-between">
          <nav aria-label="주요 메뉴 (푸터)" className="flex flex-wrap gap-x-6 gap-y-2">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-pure-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="법적 고지" className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-pure-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-8 text-[11px] text-pure-white/35">
          © {new Date().getFullYear()} {orgInfo.nameKo} {orgInfo.nameEn}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
