export const getAllService = async (params) => {
    const response = await fetch('http://localhost:8000/course/getAll'); 
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
  };