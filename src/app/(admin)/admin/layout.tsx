import { getServerSession } from "next-auth";
import Sidebar from "@/components/shared/Sidebar";
import Navbar from "@/components/shared/Admin-Navbar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <div className={`${!!session ? "flex" : ""}`}>
      {!!session && (
        <aside className="fixed w-1/5 h-full border-r">
          <Sidebar />
        </aside>
      )}
      <div className={`${!!session ? "ml-[20%]" : "ml-0"} w-full`}>
        {!!session && <Navbar />}
        {children}
      </div>
    </div>
  );
}
