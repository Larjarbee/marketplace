import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      <header className="border-b">
        <nav className="container py-4 flex justify-between gap-2 items-center">
          <Link href="/">
            <h2 className="text-2xl hidden md:block">
              Marketplace<sup>NG</sup>
            </h2>
          </Link>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
