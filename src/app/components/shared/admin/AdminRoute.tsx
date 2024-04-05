"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
interface AdminRouteProps  {
  url: string;
  text: string;
  blank: boolean;
}
export default function AdminRoute({blank,text,url}:AdminRouteProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(url);
  return (
    <Link className={`${isActive ? "bg-amber-400 text-white hover:text-white hover:bg-amber-500" : "" } hover:bg-gray-100 font-semibold text-lg border-t- border-gray-200 p-3 last-of-type:border-b`} href={url} target={blank ? '_blank' : ''}>
      {text}
    </Link>
  )
}
