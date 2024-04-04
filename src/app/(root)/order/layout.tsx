import OrderSidebar from "@/app/components/shared/Order/OrderSidebar";
import OrderSummary from "@/app/components/shared/Order/OrderSummary";

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  
  return (
   <>
    <div className="md:flex">
      <OrderSidebar/>
      <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
        {children}
      </main>
      <OrderSummary/>
    </div>
   </>
  );
}
