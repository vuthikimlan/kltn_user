import axios from "./request";

export const getAllCourse = async (params) => {
  const response = await fetch("http://localhost:8000/course/getAll", {
    next: { revalidate: 0 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export const getAllCourseAprrove = async (params) => {
  const response = await fetch("http://localhost:8000/approve/approved", {
    next: { revalidate: 0 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export const getCourseBySlug = async (slug) => {
  const response = await fetch(`http://localhost:8000/course/detail/${slug}`, {
    next: { revalidate: 0 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export const getQuestion = async (courseId, assignmentId) => {
  const response = await fetch(
    `http://localhost:8000/course/assignments/${courseId}/question/${assignmentId}`,
    {
      next: { revalidate: 0 },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export const filterCourse = (values) => {
  const courseValues = {
    name: values.name,
    field: values.field,
    category: values.category,
    price: values.price,
    level: values.level,
  };
  return axios.post(`/course/filter`, courseValues);
};

export const getActiveCourse = (userId, courseId) => {
  return axios.get(
    `/course/activate-course?userId=${userId}&courseId=${courseId}`
  );
};

export const getAssignment = (id) => {
  return axios.get(`/course/assignments/${id}`);
};

export const submitAssignment = (courseId, assignmentId, value) => {
  return axios.post(`/course/submit-assign/${courseId}/${assignmentId}`, value);
};
