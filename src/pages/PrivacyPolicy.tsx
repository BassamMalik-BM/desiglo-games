import { useEffect, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

const CONTACT_URL = "https://desiglo.com/contact";
const PUBLISHER = "[legal publisher name]"; // ← replace before publishing

function ContactLink({ children = "our contact form" }: { children?: ReactNode }) {
  return (
    <a
      href={CONTACT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-0.5 font-medium text-[var(--accent)] underline-offset-4 hover:underline"
    >
      {children}
      <ArrowUpRight size={14} />
    </a>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-[var(--line)] pt-10">
      <h2 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h2>
      <div className="mt-5 space-y-4 leading-7 text-[var(--muted)]">{children}</div>
    </section>
  );
}

function Sub({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="pt-2">
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--ink)]">{title}</h3>
      <div className="mt-3 space-y-4">{children}</div>
    </div>
  );
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-sm bg-[var(--accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const toc = [
  ["playing", "1. Information used when you play"],
  ["website", "2. Our website"],
  ["purchases", "3. Purchases"],
  ["use-sharing", "4. How information is used and shared"],
  ["ad-choices", "5. Advertising choices"],
  ["retention", "6. How long information is kept"],
  ["rights", "7. Your privacy rights"],
  ["children", "8. Children’s privacy"],
  ["security", "9. Security and international processing"],
  ["games", "10. Game-specific information"],
  ["changes", "11. Changes to this policy"],
  ["contact", "12. Contact us"],
];

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy — Desiglo Games";
  }, []);

  return (
    <article className="g-container py-16 md:py-24">
      <header className="max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-5 text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.05em]">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="mt-4 text-sm text-[var(--muted)]">Last updated: 27 November 2026</p>
        <div className="mt-6 space-y-4 text-[17px] leading-8 text-[var(--muted)]">
          <p>
            Welcome to Desiglo Games. We make games for you to enjoy, and we want you to understand what happens
            to your information while you play.
          </p>
          <p>
            This policy explains how <strong className="text-[var(--ink)]">{PUBLISHER}, operating as Desiglo Games</strong>,
            handles information through our games that link to this policy and our website,{" "}
            <strong className="text-[var(--ink)]">games.desiglo.com</strong>.
          </p>
          <p>
            Different games may offer different features. A feature described here only applies when it is
            available in the game you use. If a game handles information differently, we will explain those
            differences in the game-specific section below or provide a separate notice.
          </p>
          <p>
            For privacy questions or requests, please reach us through <ContactLink />.
          </p>
        </div>
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-[260px_1fr]">
        {/* Table of contents */}
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-28 rounded-[20px] border border-[var(--line)] bg-[var(--surface)] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">On this page</p>
            <ol className="mt-4 space-y-2.5 text-sm">
              {toc.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-[var(--muted)] transition hover:text-[var(--ink)]">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="max-w-3xl space-y-12">
          <Section id="playing" title="1. Information used when you play">
            <Sub title="Game progress and preferences">
              <p>
                Our games may save information such as your scores, progress, coins, unlocked items, selected
                themes, sound settings, and reward history on your device. This helps the game remember where
                you left off.
              </p>
              <p>
                For games that save progress locally, we do not receive that progress simply because you play.
                Your device’s backup settings may also affect whether saved information is backed up or restored.
              </p>
            </Sub>
            <Sub title="Advertising information">
              <p>
                Games supported by advertising use services such as{" "}
                <strong className="text-[var(--ink)]">Google AdMob</strong> to display ads, including optional
                rewarded ads.
              </p>
              <p>Google’s advertising software may collect and process:</p>
              <List
                items={[
                  "Your IP address, which can indicate your approximate location.",
                  "Device and advertising identifiers.",
                  "Information about interactions with the app and ads, such as launches, taps, and video views.",
                  "Diagnostic information, such as crashes and performance problems.",
                ]}
              />
              <p>
                This information helps provide and measure advertising, operate the advertising service, and
                detect fraud. The information processed can depend on your device settings, privacy choices,
                location, and the advertising configuration.
              </p>
              <p>
                You can learn more in{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  Google’s Privacy Policy
                </a>
                .
              </p>
            </Sub>
            <Sub title="Information you send us">
              <p>
                If you contact us, we receive the information you choose to share, such as your email address,
                message, and any screenshots or troubleshooting details.
              </p>
              <p>
                We use this information to respond, investigate problems, and provide support. Please avoid
                sending passwords, payment card details, or other information that is not needed for your request.
              </p>
            </Sub>
          </Section>

          <Section id="website" title="2. Our website">
            <p>
              When you visit games.desiglo.com, the hosting service may process technical information needed to
              deliver and protect the website, such as your IP address, browser information, requested pages, and
              access times.
            </p>
            <p>
              If we introduce optional analytics or other tracking tools, we will explain them in this policy and
              provide any required choices before using them.
            </p>
            <p>Links to other websites take you to services with their own privacy policies.</p>
          </Section>

          <Section id="purchases" title="3. Purchases">
            <p>
              Where a game offers purchases through an app store, that store processes your payment under its own
              terms and privacy policy.
            </p>
            <p>
              We do not receive your full payment card details. The game or our purchase service may receive
              transaction information, such as a product identifier, purchase status, or purchase token, to provide
              an item, restore a purchase, or prevent fraud.
            </p>
            <p>This section does not mean every Desiglo game offers purchases.</p>
          </Section>

          <Section id="use-sharing" title="4. How information is used and shared">
            <p>We use information relevant to the features you use to:</p>
            <List
              items={[
                "Save game progress and preferences.",
                "Provide ads and award earned in-game rewards.",
                "Process or restore supported purchases.",
                "Respond to support and privacy requests.",
                "Diagnose problems and protect our services against misuse.",
                "Meet applicable legal obligations.",
              ]}
            />
            <p>
              Information may be processed by service providers that support these functions, including
              advertising providers, app stores, website hosting providers, and email providers.
            </p>
            <p>
              Advertising software can send information directly from your device to its provider. This may happen
              even when we do not hold a copy ourselves.
            </p>
            <p>
              We may also disclose information when required by law or reasonably necessary to protect people,
              investigate fraud, or defend legal rights.
            </p>
          </Section>

          <Section id="ad-choices" title="5. Advertising choices">
            <p>Where required, we ask for your privacy choices before requesting ads.</p>
            <p>
              If available in your game, you can reopen <strong className="text-[var(--ink)]">Ad privacy choices</strong>{" "}
              in Settings to review or change those choices. You can also use your device’s privacy settings to
              manage its advertising identifier.
            </p>
            <p>
              Choosing non-personalized ads does not necessarily stop all information processing. Some information
              may still be used to deliver ads, measure performance, or prevent fraud.
            </p>
            <p>Rewarded ads are optional. The game explains the reward before you choose to watch.</p>
          </Section>

          <Section id="retention" title="6. How long information is kept">
            <p>
              Locally saved progress remains on your device until it is reset or removed. Clearing app storage or
              uninstalling the game normally removes local saves, although device backups may retain or restore them.
            </p>
            <p>
              We keep support correspondence only as long as reasonably needed to resolve requests, maintain
              necessary records, and meet legal obligations.
            </p>
            <p>
              Advertising providers, app stores, and other independent services keep information according to their
              own policies. Removing a game does not automatically delete information already held by those services.
            </p>
          </Section>

          <Section id="rights" title="7. Your privacy rights">
            <p>
              Depending on where you live, you may have rights to access, correct, delete, or receive a copy of
              personal information, restrict or object to certain uses, or withdraw consent.
            </p>
            <p>
              To make a request, contact us through <ContactLink />. Tell us which game your request concerns. We may
              ask for limited information to verify your request and protect your privacy.
            </p>
            <p>
              If information exists only on your device, we may be unable to access it remotely. We can explain how
              to remove it yourself. For information held independently by Google or your app store, you may also
              need to use that provider’s privacy controls.
            </p>
            <p>Where applicable, you can raise a concern with your local data protection authority.</p>
          </Section>

          <Section id="children" title="8. Children’s privacy">
            {/* ← Replace this paragraph before publishing: say who your games are for and what protections you use */}
            <p className="rounded-xl border border-dashed border-[var(--line)] p-4">
              [Before publishing, specify whether your games are intended for children, a general audience, or an
              older audience, and describe the protections actually implemented.]
            </p>
            <p>
              A game’s age rating describes its content; it does not by itself explain how information is handled.
            </p>
            <p>
              If a parent or guardian believes a child has provided personal information to us inappropriately,
              please contact us through <ContactLink /> so we can investigate and take appropriate action.
            </p>
            <p>
              Any game intended for children will need privacy information and advertising settings appropriate to
              its audience.
            </p>
          </Section>

          <Section id="security" title="9. Security and international processing">
            <p>
              We use reasonable safeguards appropriate to the information we handle. No method of storage or
              transmission is completely secure.
            </p>
            <p>
              Our service providers may process information in countries other than your own. Where applicable law
              requires safeguards for international transfers, those safeguards must be in place.
            </p>
          </Section>

          <Section id="games" title="10. Game-specific information">
            <Sub title="Glass Blast: Block Puzzle">
              <List
                items={[
                  "Game progress, scores, coins, customization choices, and gameplay preferences are saved locally on your device.",
                  "You do not need a Desiglo account to play.",
                  "The game uses Google AdMob for banner and optional rewarded advertising.",
                  "Advertising software may process the information described in the advertising section above.",
                  "The game does not request access to your contacts, microphone, photos, or precise GPS location.",
                ]}
              />
            </Sub>
            <p>We will add information for other games here when their features or data practices need further explanation.</p>
          </Section>

          <Section id="changes" title="11. Changes to this policy">
            <p>
              We may update this policy when our games, services, or privacy practices change. The latest version
              will remain available at{" "}
              <strong className="text-[var(--ink)]">https://games.desiglo.com/privacy</strong>.
            </p>
            <p>
              We will update the date at the top and provide additional notice or request consent when required.
              Updating this page does not replace any consent required for a new use of information.
            </p>
          </Section>

          <Section id="contact" title="12. Contact us">
            <p>For privacy questions, concerns, or requests:</p>
            <div className="rounded-[20px] border border-[var(--line)] bg-[var(--surface)] p-6">
              <dl className="space-y-3">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="w-28 shrink-0 text-sm font-semibold text-[var(--ink)]">Operator</dt>
                  <dd>{PUBLISHER}, operating as Desiglo Games</dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="w-28 shrink-0 text-sm font-semibold text-[var(--ink)]">Contact</dt>
                  <dd><ContactLink>Desiglo contact form</ContactLink></dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="w-28 shrink-0 text-sm font-semibold text-[var(--ink)]">Website</dt>
                  <dd>
                    <a href="https://games.desiglo.com" className="text-[var(--accent)] underline-offset-4 hover:underline">
                      https://games.desiglo.com
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]"
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