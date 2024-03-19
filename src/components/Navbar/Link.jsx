import PropTypes from 'prop-types';
const Link = ({route}) => {
  return (
    <li className="mr-6 hover:shadow-lg hover:shadow-slate-600 px-2 rounded-lg transition-all">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
Link.propTypes = {
    route: PropTypes.object,
}
export default Link;