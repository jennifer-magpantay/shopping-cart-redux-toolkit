/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export const Navigation = ({ data }) => {
  return (
    <nav className="navigation">
      <ul className="navigation--list">
        {data.map(({ id, title }) => (
          <li key={id} className="navigation--list-link">
            <NavLink
              to={`/${id}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
