import axios from "./request";

export const getAllBlog = async () => {
    const res = await fetch('http://localhost:8000/blog/getAll')
    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()
    return data
} 


export const getBlogBySlug = async (slug) => {
    const response = await fetch(`http://localhost:8000/blog/${slug}`); 
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    
  };
  

export const filterBlog = (values) => {
    const data = {
        title: values.title,
        slugField: values.slugField,
    }
    return axios.post('/blog/filter', data)
}