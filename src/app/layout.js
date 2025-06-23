import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
});

export const metadata = {
  title: "Saj Mohol - The Beauty Products , Skin Care , Cosmetics and Fashion Zone",
  description: "Saj Mohol - is one of the best Beauty Products , Skin Care , Cosmetics and Fashion Zone in bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


