import LayoutSubjectIndex from "@/components/Layout/main/LayoutSubjectIndex";
import { useRouter } from "next/router";

function SubjectIndexPage() {
  const router = useRouter();
  const subjectId = router.query.subjectId as string;
  return (
    <>
      <LayoutSubjectIndex id={subjectId} />
    </>
  );
}

export default SubjectIndexPage;
