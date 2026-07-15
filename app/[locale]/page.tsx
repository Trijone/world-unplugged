import Image from "next/image";
import ApplicationForm from "./ApplicationForm";
import enMessages from "../../messages/en.json";
import nlMessages from "../../messages/nl.json";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({params}: Props) {
  const {locale} = await params;

  const messages = locale === "nl" ? nlMessages : enMessages;

  const navigation = messages.Navigation;
  const home = messages.Home;
  const liveCode = messages.LiveCode;
  const concept = messages.Concept;
  const apply = messages.Apply;
  const applicationForm = messages.ApplicationForm;

  return (
    <main className="min-h-screen bg-[#11100d] text-white">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
      <Image
  src="/images/hero-final.png"
  alt="World Unplugged acoustic busking festival"
  fill
  priority
  sizes="100vw"
  className="object-cover object-[58%_center] md:object-center"
/>

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />

        <Image
          src="/images/logo.png"
          alt="World Unplugged logo"
          width={190}
          height={190}
          className="absolute bottom-6 right-6 z-20 h-auto w-24 drop-shadow-xl md:bottom-8 md:right-10 md:w-32 lg:w-36"
        />

        <div className="relative z-10 flex min-h-screen flex-col px-6 py-6 md:px-12 md:py-8 lg:px-16">
          <header className="flex items-start justify-between gap-4">
            <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex">
              <a
                href={`/${locale}`}
                className="transition hover:text-[#e8b65f]"
              >
                {navigation.home}
              </a>

              <a
                href="#concept"
                className="transition hover:text-[#e8b65f]"
              >
                {navigation.about}
              </a>

              <a
                href="#artists"
                className="transition hover:text-[#e8b65f]"
              >
                {navigation.artists}
              </a>

              <a
                href="#apply"
                className="transition hover:text-[#e8b65f]"
              >
                {navigation.apply}
              </a>

              <a
                href="#locations"
                className="transition hover:text-[#e8b65f]"
              >
                {navigation.locations}
              </a>

              <a
                href="#programme"
                className="transition hover:text-[#e8b65f]"
              >
                {navigation.programme}
              </a>

              <a
                href="#contact"
                className="transition hover:text-[#e8b65f]"
              >
                {navigation.contact}
              </a>
            </nav>

            <details className="relative lg:hidden">
              <summary className="cursor-pointer list-none rounded-full border border-white/60 bg-black/30 px-4 py-2 text-sm font-bold backdrop-blur-sm">
                MENU
              </summary>

              <nav className="absolute left-0 top-12 z-30 flex min-w-56 flex-col gap-1 rounded-2xl bg-[#17130f]/95 p-3 text-sm font-semibold shadow-2xl backdrop-blur-md">
                <a
                  href={`/${locale}`}
                  className="rounded-lg px-4 py-3 hover:bg-white/10"
                >
                  {navigation.home}
                </a>

                <a
                  href="#concept"
                  className="rounded-lg px-4 py-3 hover:bg-white/10"
                >
                  {navigation.about}
                </a>

                <a
                  href="#artists"
                  className="rounded-lg px-4 py-3 hover:bg-white/10"
                >
                  {navigation.artists}
                </a>

                <a
                  href="#apply"
                  className="rounded-lg px-4 py-3 hover:bg-white/10"
                >
                  {navigation.apply}
                </a>

                <a
                  href="#locations"
                  className="rounded-lg px-4 py-3 hover:bg-white/10"
                >
                  {navigation.locations}
                </a>

                <a
                  href="#programme"
                  className="rounded-lg px-4 py-3 hover:bg-white/10"
                >
                  {navigation.programme}
                </a>

                <a
                  href="#contact"
                  className="rounded-lg px-4 py-3 hover:bg-white/10"
                >
                  {navigation.contact}
                </a>
              </nav>
            </details>

            <nav className="ml-auto flex items-center gap-4 text-sm font-bold tracking-wide">
              <a
                href="/en"
                className={
                  locale === "en"
                    ? "border-b-2 border-white pb-1"
                    : "pb-1 text-white/55 transition hover:text-white"
                }
              >
                EN
              </a>

              <a
                href="/nl"
                className={
                  locale === "nl"
                    ? "border-b-2 border-white pb-1"
                    : "pb-1 text-white/55 transition hover:text-white"
                }
              >
                NL
              </a>
            </nav>
          </header>

          <div className="mt-auto max-w-2xl pb-10 md:pb-14">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.34em] text-white/85 md:text-xs">
              {home.festivalType}
            </p>

            <h1 className="max-w-2xl text-3xl font-black uppercase leading-[0.98] tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl">
              {home.headlineLine1}
              <br />
              {home.headlineLine2}
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90 md:text-xl">
              {home.description}
            </p>

            <a
              href="#live-code"
              className="mt-6 flex w-fit items-center gap-3 transition hover:opacity-80"
            >
              <span className="h-px w-10 bg-[#d59b43]" />

              <span className="text-sm font-black uppercase tracking-[0.32em] text-[#e8b65f] md:text-base">
                {home.liveCode}
              </span>
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-[#e8b65f]"
              >
                {home.apply}
              </a>

              <a
                href="#concept"
                className="rounded-full border border-white/70 bg-black/15 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
              >
                {home.discover}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE CODE */}
      <section
        id="live-code"
        className="bg-[#f2eadf] px-6 py-20 text-[#17130f] md:px-12 md:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#9a6b2f]">
            {liveCode.label}
          </p>

          <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
            {liveCode.title}
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed md:text-xl">
            <p>{liveCode.paragraph1}</p>
            <p>{liveCode.paragraph2}</p>
            <p>{liveCode.paragraph3}</p>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section
        id="concept"
        className="bg-[#17130f] px-6 py-20 text-white md:px-12 md:py-28 lg:px-16"
      >
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-2xl lg:mt-10">
            <Image
              src="/images/concept.jpg"
              alt="Acoustic ensemble performing in Amsterdam"
              fill
              className="object-cover object-center"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#e8b65f]">
              {concept.label}
            </p>

            <h2 className="max-w-xl text-3xl font-black uppercase leading-[1.05] md:text-4xl lg:text-5xl">
              {concept.title}
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/85">
              <p>{concept.paragraph1}</p>
              <p>{concept.paragraph2}</p>
              <p>{concept.paragraph3}</p>

              <p className="border-l-2 border-[#e8b65f] pl-5 font-semibold text-white">
                {concept.paragraph4}
              </p>

              <p>{concept.paragraph5}</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section
        id="apply"
        className="bg-[#f2eadf] px-6 py-20 text-[#17130f] md:px-12 md:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#9a6b2f]">
            {apply.label}
          </p>

          <h2 className="max-w-4xl text-3xl font-black uppercase leading-[1.05] md:text-5xl">
            {apply.title}
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-5 text-lg leading-relaxed">
              <p>{apply.paragraph1}</p>
              <p>{apply.paragraph2}</p>
            </div>

            <div className="space-y-5 text-lg leading-relaxed">
              <p>{apply.paragraph3}</p>

              <p className="border-l-2 border-[#9a6b2f] pl-5 font-semibold">
                {apply.paragraph4}
              </p>
            </div>
          </div>

          <a
            href="#application-form"
            className="mt-10 inline-flex rounded-full bg-[#17130f] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#9a6b2f]"
          >
            {apply.button}
          </a>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section
        id="application-form"
        className="bg-[#17130f] px-6 py-20 text-white md:px-12 md:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#e8b65f]">
            {applicationForm.label}
          </p>

          <ApplicationForm messages={applicationForm} />
        </div>
      </section>
    </main>
  );
}