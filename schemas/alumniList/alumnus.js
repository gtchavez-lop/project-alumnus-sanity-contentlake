export default {
  name: 'alumnus',
  type: 'document',
  title: 'Alumnus List',
  fields: [
    {
      name: 'alumnusID',
      type: 'string',
      title: 'Alumnus Card Identifier Number',
      description:
        'This is the unique identifier from the alumnus card. It is found on the front of the card.',
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
      name: 'middleName',
      type: 'string',
      title: 'Middle Name',
    },
    {
      name: 'isVerified',
      type: 'boolean',
      title: 'Is Verified',
      defaultValue: false,
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (doc) =>
          `${doc.surname} ${doc.givenName} ${doc.middleName} ${doc.alumnusID}`,
        maxLength: 96,
      },
    },
    {
      name: 'birthdate',
      type: 'date',
      title: 'Birthdate',
    },
    {
      name: 'displayPhoto',
      type: 'image',
      title: 'Display Photo',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'currentEmail',
      type: 'string',
      title: 'Current Email',
    },
    {
      name: 'currentLocation',
      type: 'string',
      title: 'Current Location',
    },
    {
      name: 'programCompleted',
      type: 'string',
      title: 'Program Completed',
    },
    {
      name: 'programStartYear',
      type: 'date',
      title: 'Program Start Year',
      options: {
        dateFormat: 'YYYY',
      },
    },
    {
      name: 'graduationYear',
      type: 'date',
      title: 'Graduation Year',
      options: {
        dateFormat: 'YYYY',
      },
    },
    {
      name: 'isCurrentlyWorking',
      type: 'boolean',
      title: 'Is Currently Working',
      defaultValue: false,
    },
    {
      name: 'currentCompany',
      type: 'string',
      title: 'Current Company',
    },
    {
      name: 'currentPosition',
      type: 'string',
      title: 'Current Position',
    },
  ],
  preview: {
    select: {
      title: 'alumnusID',
      surname: `surname`,
      givenName: `givenName`,
      middleName: `middleName`,
      media: 'displayPhoto',
    },
    prepare: (selection) => {
      const { title, surname, givenName, middleName, media } = selection;
      return {
        title: `${surname}, ${givenName} ${middleName}`,
        subtitle: title,
        media,
      };
    },
  },
};
