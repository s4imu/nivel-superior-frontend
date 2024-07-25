import LayoutCoursesIndex from "@/components/Layout/main/LayoutCourseIndex";
import { useRouter } from "next/router";

function CourseIndexPage() {
  const router = useRouter();
  const courseId = router.query.courseId as string;
  console.log("Router.query: ", router.query);
  return (
    <>
      <LayoutCoursesIndex id={courseId} />
    </>
  );
}

export default CourseIndexPage;
