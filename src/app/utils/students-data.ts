import { faker } from '@faker-js/faker';
import { ICourse } from '../models/model-course';
import { IStudent } from "../models/model-student";

export const students: IStudent[] = [];

  function createRandomUser(): IStudent {
    return {
      id: faker.datatype.number(100),
      name: faker.name.firstName(),
      surname: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      courses: createCourses()
    };
  }

  function createRandomCourse(): ICourse {
   return {
     courseId: faker.datatype.number(100),
     title: faker.lorem.sentence(4),
     teacher: faker.name.fullName(),
     amountHours: faker.datatype.number({ min: 100, max: 200 }),
   };
  }

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function createCourses(): ICourse[] {
    let courses = [];
    for(let i = 0; i < getRandomInt(1, 10); i++){    
      courses.push(createRandomCourse());
    }
    return courses;
  }

  Array.from({ length: 10 }).forEach(() => {
    students.push(createRandomUser());
  });