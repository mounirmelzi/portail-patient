import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-10">
      <Header />
      <main className="mt-20 mb-8">{children}</main>
      <Footer />
    </div>
  );
}
