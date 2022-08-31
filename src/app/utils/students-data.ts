import { IStudent } from "../models/model-student";

export const students: IStudent[] = [
    {
      id: 1,
      name: 'Aaron',
      surname: 'Dietrich',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031',
      courses: [
        {
          courseId: 1,
          title: 'Biology',
          teacher: 'Leanne Graham',
          amountHours: 100
        },
        {
          courseId: 2,
          title: 'Phylosophy',
          teacher: 'Ervin Howell',
          amountHours: 150
        },
        {
            courseId: 4,
            title: 'History',
            teacher: 'Clementine Bauch',
            amountHours: 130
        },
        {
            courseId: 5,
            title: 'English',
            teacher: 'Patricia Lebsack',
            amountHours: 150
        }
      ]
    },
    {
      id: 2,
      name: 'Dennis',
      surname: 'Schulist',
      email: 'Lucio_Hettinger@annie.ca',
      phone: '(254)954-1289',
      courses: [
        {
          courseId: 2,
          title: 'Phylosophy',
          teacher: 'Ervin Howell',
          amountHours: 150
        },
        {
          courseId: 3,
          title: 'Math',
          teacher: 'Victor Plains',
          amountHours: 125
        },
        {
            courseId: 5,
            title: 'English',
            teacher: 'Patricia Lebsack',
            amountHours: 150
        }
      ]
    },
    // {
    //     id: 3,
    //     name: 'Kurtis',
    //     surname: 'Weissnat',
    //     email: 'Telly.Hoeger@billy.biz',
    //     phone: '210.067.6132',
    //     courses: []
    // },
    {
        id: 4,
        name: 'Nicholas',
        surname: 'Runolfsdottir',
        email: 'Sherwood@rosamond.me',
        phone: '586.493.6943',
        courses: [
            {
                courseId: 2,
                title: 'Phylosophy',
                teacher: 'Ervin Howell',
                amountHours: 150
            },
            {
                courseId: 3,
                title: 'Math',
                teacher: 'Victor Plains',
                amountHours: 125
            },
            {
                courseId: 5,
                title: 'English',
                teacher: 'Patricia Lebsack',
                amountHours: 150
            }
        ]
    }
  ]