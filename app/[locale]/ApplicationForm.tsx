"use client";

import {FormEvent, useState} from "react";

type ApplicationFormMessages = {
  title: string;
  ensembleName: string;
  country: string;
  city: string;
  contactPerson: string;
  email: string;
  phone: string;
  website: string;
  socialMedia: string;
  next: string;
  step2Title: string;
  numberOfMusicians: string;
  memberNames: string;
  instruments: string;
  yearFormed: string;
  biography: string;
  biographyHint: string;
  musicalCategory: string;
  selectAllThatApply: string;
  genreOriginal: string;
  genreTraditional: string;
  genreWorld: string;
  genreClassical: string;
  genreJazz: string;
  genreBrazilian: string;
  genreSingerSongwriter: string;
  genreCovers: string;
  genreExperimental: string;
  genreOther: string;
  originalMusic: string;
  yesEntirely: string;
  partly: string;
  yes: string;
  no: string;
  back: string;
  step3Title: string;
  fullyAcousticQuestion: string;
  noAmplifiers: string;
  noBatteries: string;
  noBackingTracks: string;
  noElectronicSupport: string;
  thirtyMinuteProgramme: string;
  normallyAmplified: string;
  outdoorAdaptation: string;
  specialConsiderations: string;
  step4Title: string;
  programmeTitle: string;
  programmeDescription: string;
  representativePieces: string;
  songLanguages: string;
  audienceInteraction: string;
  compactSetup: string;
  liveVideo: string;
  liveVideoHint: string;
  secondVideo: string;
  audioLink: string;
  pressPhoto: string;
  step5Title: string;
  fullWeekendAvailability: string;
  travelResponsibility: string;
  accommodationRequired: string;
  visaRequired: string;
  arrivalDetails: string;
  logisticalNeeds: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  informationDeclaration: string;
  rulesDeclaration: string;
  conductDeclaration: string;
  conductAcceptance: string;
  mediaPermission: string;
  privacyNotice: string;
  submit: string;
};

type Props = {
  messages: ApplicationFormMessages;
};

const inputClass =
  "rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#e8b65f]";

const choiceClass =
  "flex cursor-pointer items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 transition hover:border-[#e8b65f]";

export default function ApplicationForm({messages}: Props) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const genres = [
    ["original", messages.genreOriginal],
    ["traditional", messages.genreTraditional],
    ["world", messages.genreWorld],
    ["classical", messages.genreClassical],
    ["jazz", messages.genreJazz],
    ["brazilian", messages.genreBrazilian],
    ["singer-songwriter", messages.genreSingerSongwriter],
    ["covers", messages.genreCovers],
    ["experimental", messages.genreExperimental],
    ["other", messages.genreOther]
  ];

  const acousticConfirmations = [
    ["noAmplifiers", messages.noAmplifiers],
    ["noBatteries", messages.noBatteries],
    ["noBackingTracks", messages.noBackingTracks],
    ["noElectronicSupport", messages.noElectronicSupport]
  ];

  const yesNoChoices = (name: string) => (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      <label className={choiceClass}>
        <input
          type="radio"
          name={name}
          value="yes"
          required
          className="h-4 w-4 accent-[#e8b65f]"
        />
        <span>{messages.yes}</span>
      </label>

      <label className={choiceClass}>
        <input
          type="radio"
          name={name}
          value="no"
          required
          className="h-4 w-4 accent-[#e8b65f]"
        />
        <span>{messages.no}</span>
      </label>
    </div>
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/mykrkgal", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const locale =
        window.location.pathname.split("/")[1] === "nl" ? "nl" : "en";

      window.location.assign(`/${locale}/thank-you`);
    } catch {
      const isDutch =
        window.location.pathname.split("/")[1] === "nl";

      setSubmitError(
        isDutch
          ? "De aanvraag kon niet worden verzonden. Probeer het opnieuw."
          : "The application could not be submitted. Please try again."
      );
      setIsSubmitting(false);
    }
  }

  return (
    <form
      action="https://formspree.io/f/mykrkgal"
      method="POST"
      className="mt-10"
      onSubmit={handleSubmit}
    >
      <input
        type="hidden"
        name="_subject"
        value="New World Unplugged festival application"
      />

      <div className="mb-8 flex items-center gap-3">
        {[1, 2, 3, 4, 5].map((number) => (
          <span
            key={number}
            className={`h-2.5 w-12 rounded-full ${
              step === number ? "bg-[#e8b65f]" : "bg-white/25"
            }`}
          />
        ))}

        <span className="ml-2 text-sm font-semibold text-white/60">
          {step} / 5
        </span>
      </div>

      {step === 1 && (
        <div>
          <h3 className="text-2xl font-black uppercase md:text-3xl">
            {messages.title}
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.ensembleName}</span>
              <input type="text" name="ensembleName" required className={inputClass} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.country}</span>
              <input type="text" name="country" required className={inputClass} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.city}</span>
              <input type="text" name="city" required className={inputClass} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.contactPerson}</span>
              <input type="text" name="contactPerson" required className={inputClass} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.email}</span>
              <input type="email" name="email" required className={inputClass} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.phone}</span>
              <input type="tel" name="phone" className={inputClass} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.website}</span>
              <input type="url" name="website" className={inputClass} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.socialMedia}</span>
              <input type="text" name="socialMedia" className={inputClass} />
            </label>
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            className="mt-8 rounded-full bg-[#e8b65f] px-7 py-4 text-sm font-bold text-[#17130f] transition hover:bg-white"
          >
            {messages.next}
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-2xl font-black uppercase md:text-3xl">
            {messages.step2Title}
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.numberOfMusicians}</span>
              <select name="numberOfMusicians" required defaultValue="" className={inputClass}>
                <option value="" disabled className="text-black">—</option>
                {[1, 2, 3, 4, 5, 6].map((number) => (
                  <option key={number} value={number} className="text-black">
                    {number}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.yearFormed}</span>
              <input type="number" name="yearFormed" min="1900" max="2100" className={inputClass} />
            </label>

            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm font-semibold">{messages.memberNames}</span>
              <textarea name="memberNames" rows={4} required className={inputClass} />
            </label>

            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm font-semibold">{messages.instruments}</span>
              <textarea name="instruments" rows={4} required className={inputClass} />
            </label>

            <fieldset className="md:col-span-2">
              <legend className="text-sm font-semibold">{messages.musicalCategory}</legend>
              <p className="mt-1 text-xs text-white/50">{messages.selectAllThatApply}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {genres.map(([value, label]) => (
                  <label key={value} className={choiceClass}>
                    <input
                      type="checkbox"
                      name="musicalCategories"
                      value={value}
                      className="h-4 w-4 accent-[#e8b65f]"
                    />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm font-semibold">{messages.originalMusic}</span>
              <select name="originalMusic" required defaultValue="" className={inputClass}>
                <option value="" disabled className="text-black">—</option>
                <option value="entirely" className="text-black">{messages.yesEntirely}</option>
                <option value="partly" className="text-black">{messages.partly}</option>
                <option value="no" className="text-black">{messages.no}</option>
              </select>
            </label>

            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm font-semibold">{messages.biography}</span>
              <textarea name="biography" rows={7} maxLength={1000} required className={inputClass} />
              <span className="text-xs text-white/50">{messages.biographyHint}</span>
            </label>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="rounded-full border border-white/40 px-7 py-4 text-sm font-bold transition hover:bg-white hover:text-[#17130f]"
            >
              {messages.back}
            </button>

            <button
              type="button"
              onClick={() => setStep(3)}
              className="rounded-full bg-[#e8b65f] px-7 py-4 text-sm font-bold text-[#17130f] transition hover:bg-white"
            >
              {messages.next}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-2xl font-black uppercase md:text-3xl">
            {messages.step3Title}
          </h3>

          <div className="mt-8 space-y-8">
            <fieldset>
              <legend className="text-sm font-semibold">{messages.fullyAcousticQuestion}</legend>
              {yesNoChoices("fullyAcoustic")}
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold">{messages.selectAllThatApply}</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {acousticConfirmations.map(([value, label]) => (
                  <label key={value} className={choiceClass}>
                    <input
                      type="checkbox"
                      name="acousticConfirmations"
                      value={value}
                      className="h-4 w-4 accent-[#e8b65f]"
                    />
                    <span className="text-sm">{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold">{messages.thirtyMinuteProgramme}</legend>
              {yesNoChoices("thirtyMinuteProgramme")}
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold">{messages.normallyAmplified}</legend>
              {yesNoChoices("normallyAmplified")}
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold">{messages.outdoorAdaptation}</legend>
              {yesNoChoices("outdoorAdaptation")}
            </fieldset>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.specialConsiderations}</span>
              <textarea name="specialConsiderations" rows={6} className={inputClass} />
            </label>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="rounded-full border border-white/40 px-7 py-4 text-sm font-bold transition hover:bg-white hover:text-[#17130f]"
            >
              {messages.back}
            </button>

            <button
              type="button"
              onClick={() => setStep(4)}
              className="rounded-full bg-[#e8b65f] px-7 py-4 text-sm font-bold text-[#17130f] transition hover:bg-white"
            >
              {messages.next}
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="text-2xl font-black uppercase md:text-3xl">
            {messages.step4Title}
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm font-semibold">{messages.programmeTitle}</span>
              <input type="text" name="programmeTitle" required className={inputClass} />
            </label>

            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm font-semibold">{messages.programmeDescription}</span>
              <textarea name="programmeDescription" rows={6} required className={inputClass} />
            </label>

            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm font-semibold">{messages.representativePieces}</span>
              <textarea name="representativePieces" rows={7} required className={inputClass} />
            </label>

            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm font-semibold">{messages.songLanguages}</span>
              <input type="text" name="songLanguages" className={inputClass} />
            </label>

            <fieldset className="md:col-span-2">
              <legend className="text-sm font-semibold">{messages.audienceInteraction}</legend>
              {yesNoChoices("audienceInteraction")}
            </fieldset>

            <fieldset className="md:col-span-2">
              <legend className="text-sm font-semibold">{messages.compactSetup}</legend>
              {yesNoChoices("compactSetup")}
            </fieldset>

            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm font-semibold">{messages.liveVideo}</span>
              <input type="url" name="liveVideo" required placeholder="https://" className={inputClass} />
              <span className="text-xs text-white/50">{messages.liveVideoHint}</span>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.secondVideo}</span>
              <input type="url" name="secondVideo" placeholder="https://" className={inputClass} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.audioLink}</span>
              <input type="url" name="audioLink" placeholder="https://" className={inputClass} />
            </label>

            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm font-semibold">{messages.pressPhoto}</span>
              <input type="url" name="pressPhoto" placeholder="https://" className={inputClass} />
            </label>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="rounded-full border border-white/40 px-7 py-4 text-sm font-bold transition hover:bg-white hover:text-[#17130f]"
            >
              {messages.back}
            </button>

            <button
              type="button"
              onClick={() => setStep(5)}
              className="rounded-full bg-[#e8b65f] px-7 py-4 text-sm font-bold text-[#17130f] transition hover:bg-white"
            >
              {messages.next}
            </button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3 className="text-2xl font-black uppercase md:text-3xl">
            {messages.step5Title}
          </h3>

          <div className="mt-8 space-y-8">
            <fieldset>
              <legend className="text-sm font-semibold">{messages.fullWeekendAvailability}</legend>
              {yesNoChoices("fullWeekendAvailability")}
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold">{messages.travelResponsibility}</legend>
              {yesNoChoices("travelResponsibility")}
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold">{messages.accommodationRequired}</legend>
              {yesNoChoices("accommodationRequired")}
            </fieldset>

            <fieldset>
              <legend className="text-sm font-semibold">{messages.visaRequired}</legend>
              {yesNoChoices("visaRequired")}
            </fieldset>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.arrivalDetails}</span>
              <textarea name="arrivalDetails" rows={5} className={inputClass} />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">{messages.logisticalNeeds}</span>
              <textarea name="logisticalNeeds" rows={5} className={inputClass} />
            </label>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">{messages.emergencyContactName}</span>
                <input type="text" name="emergencyContactName" className={inputClass} />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold">{messages.emergencyContactPhone}</span>
                <input type="tel" name="emergencyContactPhone" className={inputClass} />
              </label>
            </div>

            <div className="space-y-4 rounded-2xl border border-white/15 bg-white/5 p-5 md:p-6">
              <label className={choiceClass}>
                <input
                  type="checkbox"
                  name="informationDeclaration"
                  required
                  className="h-4 w-4 shrink-0 accent-[#e8b65f]"
                />
                <span className="text-sm leading-6">{messages.informationDeclaration}</span>
              </label>

              <label className={choiceClass}>
                <input
                  type="checkbox"
                  name="rulesDeclaration"
                  required
                  className="h-4 w-4 shrink-0 accent-[#e8b65f]"
                />
                <span className="text-sm leading-6">{messages.rulesDeclaration}</span>
              </label>

              <div className="rounded-xl border border-[#e8b65f]/40 bg-[#e8b65f]/10 p-4">
                <p className="text-sm leading-6 text-white/85">
                  {messages.conductDeclaration}
                </p>
              </div>

              <label className={choiceClass}>
                <input
                  type="checkbox"
                  name="conductAcceptance"
                  required
                  className="h-4 w-4 shrink-0 accent-[#e8b65f]"
                />
                <span className="text-sm leading-6">{messages.conductAcceptance}</span>
              </label>

              <label className={choiceClass}>
                <input
                  type="checkbox"
                  name="mediaPermission"
                  required
                  className="h-4 w-4 shrink-0 accent-[#e8b65f]"
                />
                <span className="text-sm leading-6">{messages.mediaPermission}</span>
              </label>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs leading-6 text-white/60">
                {messages.privacyNotice}
              </p>
            </div>
          </div>

          {submitError && (
            <p
              role="alert"
              className="mt-6 rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-100"
            >
              {submitError}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setStep(4)}
              disabled={isSubmitting}
              className="rounded-full border border-white/40 px-7 py-4 text-sm font-bold transition hover:bg-white hover:text-[#17130f] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {messages.back}
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[#e8b65f] px-7 py-4 text-sm font-bold text-[#17130f] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "..." : messages.submit}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}