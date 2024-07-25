import LayoutCoursesIndex from "@/components/Layout/main/LayoutCourseIndex";
import LayoutUpdateIndex from "@/components/Layout/main/LayoutUpdateIndex";
import { useRouter } from "next/router";

function UpdateIndexPage() {
  const router = useRouter();
  const userId = router.query.userId as string;
  console.log("Router.query: ", router.query);
  return (
    <>
      <LayoutUpdateIndex id={userId} />
    </>
  );
}

export default UpdateIndexPage;
