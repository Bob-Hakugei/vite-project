import Menu from "./components/Menu.jsx";
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
