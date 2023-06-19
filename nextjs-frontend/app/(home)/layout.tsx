import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <Header />

      <main className="flex flex-col flex-1">{children}</main>

      <Footer />
    </div>
  );
}
