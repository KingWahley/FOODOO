import "./globals.css";

export const metadata = {
  title: "Foodle",
  description: "Online Food Ordering"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}