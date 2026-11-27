import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const CONTACT_URL = "https://desiglo.com/contact";
const PUBLISHER = "[legal publisher name]"; // ← replace before publishing
const GOVERNING_LAW = "[country and applicable state or province]"; // ← e.g. "Pakistan"
const ADDRESS = "[business contact address]"; // ← replace before publishing

function ContactLink({ children = "our contact form" }: { children?: ReactNode }) {
  return (
    <a
      href={CONTACT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-0.5 font-medium text-(--accent) underline-offset-4 hover:underline"
    >
      {children}
      <ArrowUpRight size={14} />
    </a>
  );
}

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-(--accent) underline-offset-4 hover:underline">
      {children}
    </a>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-(--line) pt-10">
      <h2 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h2>
      <div className="mt-5 space-y-4 leading-7 text-(--muted)">{children}</div>
    </section>
  );
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-sm bg-(--accent)" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const B = ({ children }: { children: ReactNode }) => <strong className="text-(--ink)">{children}</strong>;

const toc = [
  ["who-can-play", "1. Who can play"],
  ["using", "2. Using our games"],
  ["progress", "3. Game progress and saved information"],
  ["virtual-items", "4. Coins, boosters, themes, and other virtual items"],
  ["purchases", "5. Purchases and refunds"],
  ["ads", "6. Advertising and optional rewards"],
  ["content", "7. Our content and your gameplay recordings"],
  ["updates", "8. Updates and availability"],
  ["enforcement", "9. Fair enforcement"],
  ["privacy", "10. Privacy"],
  ["responsibility", "11. Responsibility when something goes wrong"],
  ["law", "12. Applicable law and resolving concerns"],
  ["changes", "13. Changes to these terms"],
  ["contact", "14. Contact us"],
];

export default function Terms() {
  useEffect(() => {
    document.title = "Terms and Conditions — Desiglo Games";
  }, []);

  return (
    <article className="g-container py-16 md:py-24">
      <header className="max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-5 text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.05em]">
          Terms and <span className="text-gradient">Conditions</span>
        </h1>
        <p className="mt-4 text-sm text-(--muted)">Last updated: 27 November 2026</p>
        <div className="mt-6 space-y-4 text-[17px] leading-8 text-(--muted)">
          <p>
            Welcome to Desiglo Games! These terms explain the rules for using our games and website, including how
            virtual items, advertising, and purchases work.
          </p>
          <p>
            Our services are provided by <B>{PUBLISHER}, operating as Desiglo Games</B> (“Desiglo Games,” “we,” “us,”
            or “our”).
          </p>
          <p>
            These terms apply to <B>games.desiglo.com</B> and any Desiglo game that links to them, including{" "}
            <B>Glass Blast: Block Puzzle</B>. Features vary between games, so sections about purchases, online
            features, or rewards apply only where those features are available.
          </p>
          <p>
            Please read these terms before playing. If you do not agree, do not use our services. Nothing in these
            terms takes away rights you have under applicable consumer law.
          </p>
        </div>
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-[260px_1fr]">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-28 rounded-[20px] border border-(--line) bg-(--surface) p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-(--muted)">On this page</p>
            <ol className="mt-4 space-y-2.5 text-sm">
              {toc.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-(--muted) transition hover:text-(--ink)">{label}</a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="max-w-3xl space-y-12">
          <Section id="who-can-play" title="1. Who can play">
            <p>Please follow the age restrictions and eligibility requirements stated for each game.</p>
            <p>
              If you are below the age at which you can legally agree to these terms in your country, a parent or
              legal guardian must review and agree to them on your behalf.
            </p>
            <p>
              Purchases by children must be authorized by a parent or guardian. Device and app-store purchase
              controls can help prevent unauthorized spending.
            </p>
          </Section>

          <Section id="using" title="2. Using our games">
            <p>
              We give you a limited, personal, non-exclusive, non-transferable permission to use our games for your
              own entertainment, subject to these terms.
            </p>
            <p>You may not:</p>
            <List
              items={[
                "Use cheats, bots, or exploits to manipulate rewards, purchases, scores, or online features.",
                "Interfere with the operation or security of our services.",
                "Attempt to access systems or information without permission.",
                "Resell or distribute unauthorized copies of our games or assets.",
                "Use our services for unlawful activities.",
              ]}
            />
            <p>
              These restrictions do not prevent activities that applicable law expressly permits, including legally
              protected rights to examine software.
            </p>
          </Section>

          <Section id="progress" title="3. Game progress and saved information">
            <p>Some games save progress, scores, coins, items, and preferences on your device.</p>
            <p>
              Unless a game specifically offers cloud saves or account synchronization, do not assume your progress
              will transfer between devices or be recoverable after clearing storage, uninstalling the game, or losing
              your device.
            </p>
            <p>
              Device backups may restore some information, but their availability depends on your device and backup
              settings.
            </p>
            <p>
              If progress or purchased content goes missing, contact us through <ContactLink />. Our ability to restore
              locally saved progress may be limited. This does not affect your rights concerning purchases.
            </p>
          </Section>

          <Section id="virtual-items" title="4. Coins, boosters, themes, and other virtual items">
            <p>
              Our games may offer virtual coins, boosters, extra moves, themes, or other digital items. You may obtain
              them through gameplay, optional ads, promotions, or purchases where available.
            </p>
            <p>
              These items are for use within the relevant game. They are not money, bank deposits, or an investment,
              and cannot be exchanged for cash or transferred between games unless we expressly provide that feature.
            </p>
            <p>
              Purchasing a virtual item gives you permission to use it within the game, rather than ownership of the
              game’s underlying software or artwork.
            </p>
            <p>
              We may adjust gameplay balance and reward systems. If a change materially affects purchased content, we
              will provide any notice or remedy required by applicable law.
            </p>
          </Section>

          <Section id="purchases" title="5. Purchases and refunds">
            <p>
              Some games may offer optional purchases. The price and what you receive will be shown before you confirm
              payment.
            </p>
            <p>
              Purchases made through an app store are also subject to that store’s payment terms. Only make purchases
              using a payment method you are authorized to use.
            </p>
            <p>
              Refund eligibility depends on the purchase, the store’s policies, and applicable law. These terms do not
              make every purchase non-refundable or remove your rights when content is faulty, unavailable, or not as
              described.
            </p>
            <p>
              For purchases through Google Play, see{" "}
              <ExtLink href="https://support.google.com/googleplay/answer/2479637">Google Play’s refund policy</ExtLink>.
            </p>
            <p>
              If an item is not delivered or does not work, contact us through <ContactLink /> with the game name and
              relevant order information. Do not send your password or full payment card details.
            </p>
            <p>When a purchase is refunded or reversed, access to the associated item may be removed.</p>
          </Section>

          <Section id="ads" title="6. Advertising and optional rewards">
            <p>Some games display advertising from third-party providers.</p>
            <p>
              Rewarded ads are optional. Before you choose to watch, the game will explain the reward and any relevant
              conditions or limits.
            </p>
            <p>
              A reward is normally granted when the advertising service confirms the required action has been
              completed. An interrupted ad, connection problem, or technical failure may prevent confirmation. If you
              completed an ad but did not receive the promised reward, please contact us through <ContactLink />.
            </p>
            <p>
              Ad availability can vary by location, connection, and provider. We cannot guarantee that an ad will
              always be available.
            </p>
            <p>
              An advertisement is not our endorsement of the advertised product. Any purchase or interaction with an
              advertiser is subject to that provider’s terms.
            </p>
          </Section>

          <Section id="content" title="7. Our content and your gameplay recordings">
            <p>
              Our games contain software, artwork, music, branding, and other content owned by us or used under
              license. Those rights remain with their respective owners.
            </p>
            <p>
              You may share your own gameplay screenshots and recordings, including in monetized reviews or gameplay
              videos, provided you do not imply official endorsement or distribute our assets separately.
            </p>
            <p>
              This permission does not grant rights to third-party music, advertisements, or other content that we
              cannot license on someone else’s behalf.
            </p>
          </Section>

          <Section id="updates" title="8. Updates and availability">
            <p>
              We may release updates to fix problems, improve performance, adjust gameplay, or introduce features. Some
              features may require an updated version or an internet connection.
            </p>
            <p>
              We aim to keep our games working reliably, but cannot promise uninterrupted availability or
              compatibility with every device.
            </p>
            <p>
              If we discontinue a service or make a change that materially affects access to purchased content, we
              will provide reasonable notice where practicable and any remedies required by law.
            </p>
          </Section>

          <Section id="enforcement" title="9. Fair enforcement">
            <p>
              If you seriously or repeatedly breach these terms, we may restrict access to affected online services or
              features where technically possible.
            </p>
            <p>
              Any action will be proportionate to the circumstances. Where practical, we will explain the reason and
              give you a way to contact us about a mistake. Immediate action may be necessary to address fraud,
              security risks, or unlawful conduct.
            </p>
            <p>
              You may stop using our services at any time. Uninstalling a game does not automatically request a refund
              or delete information held by independent service providers.
            </p>
          </Section>

          <Section id="privacy" title="10. Privacy">
            <p>
              Our{" "}
              <Link to="/privacy" className="font-medium text-(--accent) underline-offset-4 hover:underline">
                Privacy Policy
              </Link>{" "}
              explains how information is handled when you use our games and website.
            </p>
            <p>
              Privacy choices and any consent required for data processing are handled separately. Agreeing to these
              terms does not replace those choices.
            </p>
          </Section>

          <Section id="responsibility" title="11. Responsibility when something goes wrong">
            <p>We will exercise reasonable care and skill in providing our services.</p>
            <p>
              To the extent permitted by law, we are not responsible for losses caused by circumstances outside our
              reasonable control or by your breach of these terms. Our games are provided for personal entertainment,
              and we do not accept responsibility for business losses arising from their use where the law permits
              that exclusion.
            </p>
            <p>
              Nothing in these terms excludes or limits liability for fraud, death or personal injury caused by
              negligence, or any other liability that cannot legally be excluded or limited. Your mandatory consumer
              rights remain unaffected.
            </p>
          </Section>

          <Section id="law" title="12. Applicable law and resolving concerns">
            <p>
              These terms are governed by the laws of <B>{GOVERNING_LAW}</B>, subject to any mandatory protections that
              apply where you live.
            </p>
            <p>
              Please contact us first through <ContactLink /> if you have a concern so we can try to resolve it. This
              does not prevent you from contacting a consumer protection authority or bringing a claim before a court
              that has jurisdiction.
            </p>
            <p>Nothing here requires you to give up mandatory rights to bring a claim in your home jurisdiction.</p>
          </Section>

          <Section id="changes" title="13. Changes to these terms">
            <p>
              We may update these terms as our services develop or legal requirements change. The latest version will
              be available at <B>https://games.desiglo.com/terms</B>.
            </p>
            <p>
              We will update the date at the top. For material changes, we will provide appropriate notice and seek
              agreement where required by law.
            </p>
            <p>Changes will not retrospectively remove rights you already have in relation to an earlier purchase.</p>
          </Section>

          <Section id="contact" title="14. Contact us">
            <p>For support or questions about these terms:</p>
            <div className="rounded-[20px] border border-(--line) bg-(--surface) p-6">
              <dl className="space-y-3">
                {[
                  ["Operator", <>{PUBLISHER}, operating as Desiglo Games</>],
                  ["Contact", <ContactLink>Desiglo contact form</ContactLink>],
                  ["Address", ADDRESS],
                  [
                    "Website",
                    <a href="https://games.desiglo.com" className="text-(--accent) underline-offset-4 hover:underline">
                      https://games.desiglo.com
                    </a>,
                  ],
                ].map(([label, value]) => (
                  <div key={label as string} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                    <dt className="w-28 shrink-0 text-sm font-semibold text-(--ink)">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-(--accent) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--accent-hover)"
              >
                Open the contact form <ArrowUpRight size={16} />
              </a>
            </div>
          </Section>
        </div>
      </div>
    </article>
  );
}