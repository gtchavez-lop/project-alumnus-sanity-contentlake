import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import event from './events/event';
import author from './events/author';
import alumnus from './alumniList/alumnus';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([event, author, alumnus]),
});
