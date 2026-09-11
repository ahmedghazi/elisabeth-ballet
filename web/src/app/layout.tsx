import "./styles/tailwind.css";
import "./styles/index.scss";
import website from "./config/website";
import { PageContextProvider } from "./context/PageContext";
import { LocaleContextProvider } from "./context/LocaleContext";
import Cursor from "./components/ui/Cursor";
import Aside from "./components/Aside";
import Bg from "./components/Bg";
import PageTransition from "./components/ui/PageTransition";
import { draftMode } from "next/headers";
import VisualEditingClient from "./components/VisualEditingClient";

export const metadata = {
  metadataBase: new URL(website.url),
  title: {
    template: `%s — ${website.title}`,
  },
  description: website.description,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html lang='fr'>
      <body className='is-loading'>
        <div id='page'>
          <PageContextProvider>
            <LocaleContextProvider>
              <div className='page-layout md:grid md:grid-cols-7'>
                <Bg />
                <main className='col-span-6'>
                  {/* <PageTransition>{children}</PageTransition> */}
                  {children}
                </main>
                <Aside />
                {isEnabled && <VisualEditingClient />}
              </div>
            </LocaleContextProvider>
          </PageContextProvider>
          <Cursor size={15} color='#000' />
        </div>
      </body>
    </html>
  );
}
