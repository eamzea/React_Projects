import { Lazy, Lazy_2, Lazy_3 } from "modules/Lazy/pages";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";


const LayoutLazy = () => {
	return (
    <div>
      <p>Lazy Layout</p>

      <ul>
        <li>
          <NavLink
            to="lazy1"
          >
            Lazy 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="lazy2"
          >
            Lazy 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="lazy3"
          >
            Lazy 3
          </NavLink>
        </li>
			</ul>
			<Routes>
				<Route path="lazy1" element={<Lazy/>} />
				<Route path="lazy2" element={<Lazy_2/>} />
				<Route path="lazy3" element={<Lazy_3/>} />
				<Route path="*" element={<Navigate replace to="lazy1"/>} />
			</Routes>
    </div>
  );
}

export default LayoutLazy