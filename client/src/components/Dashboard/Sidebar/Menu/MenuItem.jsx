import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center rounded text-sm font-medium px-4 py-2 my-1 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
          isActive ? "bg-slate-900 text-white " : "text-slate-900"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-2 font-medium">{label}</span>
    </NavLink>
  );
};
MenuItem.propTypes = {
  label: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.elementType,
};

export default MenuItem;
