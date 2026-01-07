import "./globals.css";
import AIAgent from "../components/Ai/AIAgent";

export const metadata = {
  title: "Foodle",
  description: "Online Food Ordering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <AIAgent />
      </body>
    </html>
  );
}
