import AdminSidebar from "@/app/components/shared/admin/AdminSidebar";
import ToastNotification from "@/app/components/shared/ui/ToastNotification";

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      <>
          <div className="md:flex">
              <AdminSidebar />
              <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-5">
                  {children}
              </main>
          </div>
          <ToastNotification />
      </>
    )
}