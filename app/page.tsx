import {
  getTranslations,
  setRequestLocale
} from "next-intl/server";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({params}: Props) {
  const {locale} = await params;

  setRequestLocale(locale);

  const home = await getTranslations({
    locale,
    namespace: "Home"
  });

  const liveCode = await getTranslations({
    locale,
    namespace: "LiveCode"
  });

  return (
    <main className="min-h-screen bg-[#11100d] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/hero-final.png"
          alt="World Unplugged acoustic busking festival"
          fill
          priority
          className="object-cover object-center"
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
          <header className="flex justify-end">
            <nav className="flex items-center gap-4 text-sm font-bold tracking-wide">
              <a href="/en" className="border-b-2 border-white pb-1">
                EN
              </a>

              <a
                href="/nl"
                className="pb-1 text-white/60 transition hover:text-white"
              >
                NL
              </a>
            </nav>
          </header>

          <div className="mt-auto max-w-2xl pb-10 md:pb-14">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.34em] text-white/85 md:text-xs">
              {home("festivalType")}
            </p>

            <h1 className="max-w-2xl text-4xl font-black uppercase leading-[0.94] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl">
              {home("headlineLine1")}
              <br />
              {home("headlineLine2")}
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90 md:text-xl">
              {home("description")}
            </p>

            <a
              href="#live-code"
              className="mt-6 flex w-fit items-center gap-3 transition hover:opacity-80"
            >
              <span className="h-px w-10 bg-[#d59b43]" />

              <span className="text-sm font-black uppercase tracking-[0.32em] text-[#e8b65f] md:text-base">
                {home("liveCode")}
              </span>
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-[#e8b65f]"
              >
                {home("apply")}
              </a>

              <a
                href="#live-code"
                className="rounded-full border border-white/70 bg-black/15 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
              >
                {home("discover")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="live-code"
        className="bg-[#f2eadf] px-6 py-20 text-[#17130f] md:px-12 md:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#9a6b2f]">
            {liveCode("label")}
          </p>

          <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
            {liveCode("title")}
          </h2>

          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed md:text-xl">
            <p>{liveCode("paragraph1")}</p>
            <p>{liveCode("paragraph2")}</p>
            <p>{liveCode("paragraph3")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}