import axios from "./request";

export const getAllCourse = async (params) => {
    const response = await fetch('http://localhost:8000/course/getAll'); 
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
};

export const getCourseBySlug = async (slug) => {
  const response = await fetch(`http://localhost:8000/course/${slug}`); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
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
    level: values.level
  }
  return axios.post(`/course/filter`, courseValues)
}

// export const getCourseBySlug = async (slug) => {
//   const response = await fetch(`http://localhost:8000/course/${slug}`,{next:{tags:slug}}); 
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     const data = await response.json();
//     return data;
  
// };