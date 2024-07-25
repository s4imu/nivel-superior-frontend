import LayoutEditAssunto from "@/components/Layout/admin/subjects/LayoutEditAssunto";
import { useRouter } from "next/router";
import { useAuth } from "@/providers/AuthProvider";
import { useEffect } from "react";

function EditSubject() {
  const router = useRouter();
  const subjectId = router.query.subjectId as string;
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
      <LayoutEditAssunto id={subjectId} />
    </>
  );
}

export default EditSubject;
