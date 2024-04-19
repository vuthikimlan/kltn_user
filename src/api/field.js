export const getAllField = async (params) => {
    const response = await fetch('http://localhost:8000/field/getAll', { next: { revalidate: 0 } }); 
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
};

export const getFieldBySlug = async (slug) => {
  const response = await fetch(`http://localhost:8000/field/${slug}`,  { next: { revalidate: 0 } }); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  
};


export const getTopicBySlug = async (slugField, slugTopic) => {
  const response = await fetch(`http://localhost:8000/field/${slugField}/${slugTopic}`, { next: { revalidate: 0 } }); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  
};