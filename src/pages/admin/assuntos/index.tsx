import LayoutGerAssuntos from "@/components/Layout/admin/subjects/LayoutGerAssuntos";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

function AdminSubjectsDashboardPage() {
  const { auth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth || (auth.role !== "ADMIN" && auth.role !== "SUPER")) {
      router.push("/");
    }
  }, [auth, router]);

  if (!auth || (auth.role !== "ADMIN" && auth.role !== "SUPER")) {
    return <p>Permissões Não Necessárias para acessar essa página</p>;
  }
  return (
    <>
      <LayoutGerAssuntos />
    </>
  );
}

export default AdminSubjectsDashboardPage;
