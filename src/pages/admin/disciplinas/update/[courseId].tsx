import LayoutEditDisciplina from "@/components/Layout/admin/courses/LayoutEditDisciplina";
import { useRouter } from "next/router";
import { useAuth } from "@/providers/AuthProvider";
import { useEffect } from "react";

function EditCourse() {
  const router = useRouter();
  const courseId = router.query.courseId as string;
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
      <LayoutEditDisciplina id={courseId} />
    </>
  );
}

export default EditCourse;
