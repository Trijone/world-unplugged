import Link from "next/link";
import enMessages from "../../../messages/en.json";
import nlMessages from "../../../messages/nl.json";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ThankYouPage({params}: Props) {
  const {locale} = await params;

  const isDutch = locale === "nl";
  const messages = isDutch ? nlMessages : enMessages;

  const title = isDutch
    ? "Aanvraag ontvangen"
    : "Application received";

  const text = isDutch
    ? "Bedankt voor je aanmelding voor World Unplugged. Je aanvraag is succesvol verzonden. Ons festivalteam beoordeelt de informatie en neemt per e-mail contact met je op."
    : "Thank you for applying to World Unplugged. Your application has been successfully submitted. Our festival team will review the information and contact you by email.";

  const button = isDutch
    ? "Terug naar de homepage"
    : "Return to the homepage";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#17130f] px-6 text-white">
      <section className="w-full max-w-2xl rounded-3xl border border-white/15 bg-white/5 p-8 text-center shadow-2xl md:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8b65f]">
          World Unplugged Amsterdam
        </p>

        <h1 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/75">
          {text}
        </p>

        <Link
          href={`/${locale}`}
          className="mt-9 inline-flex rounded-full bg-[#e8b65f] px-7 py-4 text-sm font-bold text-[#17130f] transition hover:bg-white"
        >
          {button}
        </Link>
      </section>
    </main>
  );
}