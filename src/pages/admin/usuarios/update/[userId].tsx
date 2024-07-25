import LayoutEditUsuario from "@/components/Layout/admin/users/LayoutEditUsuario";
import { useRouter } from "next/router";
import { useAuth } from "@/providers/AuthProvider";
import { useEffect } from "react";

function EditUser() {
  const router = useRouter();
  const userId = router.query.userId as string;
  const { auth } = useAuth();

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
      <LayoutEditUsuario id={userId} />
    </>
  );
}

export default EditUser;
