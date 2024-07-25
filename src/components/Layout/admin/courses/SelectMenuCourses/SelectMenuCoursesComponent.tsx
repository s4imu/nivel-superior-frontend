import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import { Course } from "@/types/course";

interface CourseIndexProps {
  courseId: string;
  setCourseId: (id: string) => void;
}

function SelectMenuCoursesComponent({
  courseId,
  setCourseId,
}: CourseIndexProps) {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    api.get(`/courses`).then((data) => {
      setCourses(data.data);
    });
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setCourseId(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label"></InputLabel>
      <Select
        labelId=""
        id="courseId"
        value={courseId}
        label="Course"
        onChange={handleChange}
      >
        {courses.map((course) => (
          <MenuItem key={course.id} value={course.id}>
            {course.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectMenuCoursesComponent;
