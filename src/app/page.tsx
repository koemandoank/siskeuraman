import { redirect } from "next/navigation";
import { getCurrentUser } from "@/features/auth/services/get-current-user";

export default async function RootPage() {
  const user = await getCurrentUser();
  redirect(user ? "/dashboard" : "/login");
}
