import './Logo.scss';
import { NavLink } from 'react-router-dom';

function Logo() {
	return (
		<div className="Logo">
			<NavLink to="/" className="">
				<img src='/images/logo.png' alt="" />
			</NavLink>
		</div>
	)
}
export default Logo;
