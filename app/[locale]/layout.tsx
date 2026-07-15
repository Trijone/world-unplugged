import {NextIntlClientProvider} from "next-intl";

type Props = {
  children: React.ReactNode;
};

export default function LocaleLayout({children}: Props) {
  return (
    <NextIntlClientProvider>
      {children}
    </NextIntlClientProvider>
  );
}