interface DataCourse {
  key: number;
  image: string;
  name: string;
  author: string;
  price: number;
  content: [string, string, string];
}

interface DataCourseField {
  key: number;
  image: string;
  name: string;
  author: string;
  price: number;
  field: string;
  content: [string, string, string];
}

export const dataCourse: DataCourse[] = [];

for (let i = 0; i < 10; i++) {
  dataCourse.push({
    key: i,
    image: "https://img-c.udemycdn.com/course/240x135/5391834_7008_2.jpg",
    name: "Viết ứng dụng bán hàng với Java Springboot/API và Angular",
    author: "Nguyen Duc Hoang",
    price: 249000,
    content: [
      "Fundamental Security Concepts",
      "Navigating Threats, Vulnerabilities, & Remedies",
      "Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses",
    ],
  });
}

export const dataCourseField: DataCourseField[] = [];

for (let i = 0; i < 10; i++) {
  dataCourseField.push({
    key: i,
    image: "https://img-c.udemycdn.com/course/240x135/5391834_7008_2.jpg",
    name: "Viết ứng dụng bán hàng với Java  ",
    author: "Nguyen Duc Hoang",
    price: 249000,
    field: "Phát triển web",
    content: [
      "Fundamental Security Concepts",
      "Navigating Threats, Vulnerabilities, & Remedies",
      "Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses",
    ],
  });
}

interface DataCategory {
  key: number;
  name: string;
  image: string;
}

export const dataCategory: DataCategory[] = [];

for (let i = 0; i < 8; i++) {
  dataCategory.push({
    key: i,
    name: "Thiết kế",
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
  });
}
