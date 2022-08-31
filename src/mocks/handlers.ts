import { rest } from 'msw';
import { students } from 'src/app/utils/students-data';

export const handlers = [
  rest.get('/getData', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(students)
    );
  }),
];