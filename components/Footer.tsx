import Link from "next/link";
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
            <div className="mt-6 flex gap-4">
              <a
                href={orgInfo.sns.instagram}
                aria-label="Instagram (준비 중)"
                className="flex h-9 w-9 items-center justify-center border border-pure-white/25 text-xs text-pure-white/80 hover:border-gold hover:text-gold"
              >
                IG
              </a>
              <a
                href={orgInfo.sns.youtube}
                aria-label="YouTube (준비 중)"
                className="flex h-9 w-9 items-center justify-center border border-pure-white/25 text-xs text-pure-white/80 hover:border-gold hover:text-gold"
              >
                YT
              </a>
              <a
                href={orgInfo.sns.blog}
                aria-label="블로그 (준비 중)"
                className="flex h-9 w-9 items-center justify-center border border-pure-white/25 text-xs text-pure-white/80 hover:border-gold hover:text-gold"
              >
                BL
              </a>
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
              label="사업자등록번호"
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
