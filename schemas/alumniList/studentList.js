export default {
  name: 'studentList',
  type: 'document',
  title: 'Student List',
  fields: [
    {
      name: 'studentID',
      type: 'string',
      title: 'Student ID',
    },
    {
      name: 'givenName',
      type: 'string',
      title: 'Given Name',
    },
    {
      name: 'surname',
      type: 'string',
      title: 'Surname',
    },
    {
      name: 'middleInitial',
      type: 'string',
      title: 'Middle Initial',
    },
    {
      name: 'program',
      type: 'string',
      title: 'Program',
    },
  ],
};
