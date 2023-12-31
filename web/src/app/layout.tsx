import "./styles/tailwind.css";
import "./styles/index.scss";
import website from "./config/website";
import { PageContextProvider } from "./context/PageContext";
import { LocaleContextProvider } from "./context/LocaleContext";
import Cursor from "./components/ui/Cursor";
import Aside from "./components/Aside";

export const metadata = {
  metadataBase: new URL(website.url),
  title: {
    template: `%s — ${website.title}`,
  },
  description: website.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <body className='is-loading'>
        <div id='page'>
          <PageContextProvider>
            <LocaleContextProvider>
              {/* <Header /> */}
              <div className='page-layout grid grid-cols-1 md:grid-cols-7'>
                <div className='bg'></div>
                <main className='col-span-6'>{children}</main>
                <Aside />
              </div>
              {/* <Footer /> */}
            </LocaleContextProvider>
          </PageContextProvider>
          <Cursor size={15} color='#000' />
        </div>
      </body>
    </html>
  );
}
