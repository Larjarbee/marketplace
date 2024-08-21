import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="border-b">
        <nav className="container py-4 flex justify-between gap-2 items-center">
          <Link href="/">
            <h2 className="text-lg md:text-2xl">
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
