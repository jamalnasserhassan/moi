import Menu from '../Index';
import './MenuMobile.scss';

const MenuMobile = ({ OpenMenu, toggleMenu }) => {
	return (
		<aside className={`Sidebar Sidebar__menu ${OpenMenu ? 'is--open' : ''}`}>
			<div className="Sidebar__overlay" onClick={toggleMenu}></div>
			<div className="Sidebar__content">
				<div className="Sidebar__content-header">
					<button type="button" onClick={toggleMenu}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M15.375 17.21 10 11.835 4.625 17.21a.988.988 0 0 1-1.398 0l-.437-.437a.988.988 0 0 1 0-1.398L8.165 10 2.79 4.625a.988.988 0 0 1 0-1.398l.437-.437a.988.988 0 0 1 1.398 0L10 8.165l5.375-5.375a.988.988 0 0 1 1.398 0l.437.437a.988.988 0 0 1 0 1.398L11.835 10l5.375 5.375a.988.988 0 0 1 0 1.398l-.437.437a.988.988 0 0 1-1.398 0Z"/></svg>
					</button>
				</div>
				<div className='Sidebar__content-scroll'>
					<Menu />
				</div>
			</div>
		</aside>
	);
};

export default MenuMobile;
