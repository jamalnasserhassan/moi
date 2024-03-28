import Logo from '../../components/Logo/Index';
import Menu from '../../components/Menu/Index';
import Profile from '../../components/Profile/Index';
import Notification from '../../components/Notification/Index';

import './Header.scss';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MenuMobile from '../../components/Menu/MenuMobile';

function Header() {

	const [showHeader, setShowHeader] = useState(true);
	const location = useLocation();

	useEffect(() => {
		const hideHeader = location.pathname.startsWith('/login');
		setShowHeader(!hideHeader);
	}, [location]);


	// Handle Mobile Menu Sidebar
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.classList.add('u-overflow');
			document.documentElement.classList.add('u-overflow');
		} else {
			document.body.classList.remove('u-overflow');
			document.documentElement.classList.remove('u-overflow');
		}
	}, [isMobileMenuOpen]);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
	<>{showHeader && (
		<>
			<header className="Header">
				<div className="Header__container">
					<div className="Header__container-right">

						<button className="Menu__toggle"  onClick={toggleMobileMenu}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25">
								<path
									fill="currentColor"
									fillRule="evenodd"
									d="M3 6.5a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4Z"
									clipRule="evenodd"
								/>
							</svg>
						</button>


						<Logo />
						<Menu />

						<svg className="Shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304 290"><path fill="currentColor" d="m291.87 283.25-.3-.46-.77-1.15-.41-.6-.95-1.37-.99-1.43-2.39-3.35-7.82-10.61-1.27-1.68-2.81-3.87-1.42-1.99-2.86-4.11-1.4-2.04-2.56-3.85-.6-.93-1.1-1.71-1.43-2.32-.43-.7-1.07-1.72-.58-.91-1.33-2.05-.69-1.06-1.54-2.31-.79-1.18-1.69-2.5-1.71-2.53-3.67-5.28-5.44-7.64-.88-1.21-1.89-2.65-.96-1.36-2.03-2.87-2.04-2.91-4.21-6.1-2.08-3.04-3.91-5.8-.93-1.4-1.73-2.61-2.31-3.55-1.31-2.04-2.31-3.56-1.13-1.73-2.18-3.24-1.1-1.62-2.33-3.33-1.21-1.71-2.78-3.8-.74-1-1.6-2.16-.83-1.11-1.81-2.4-.94-1.25-2.06-2.71-1.06-1.4-2.35-3.06-1.21-1.58-2.67-3.47-1.37-1.79-3.02-3.92-1.56-2.02-3.42-4.42-5.6-7.25-2.53-3.27-4.67-5.89-2.28-2.85-4.28-5.16-2.1-2.5-4.03-4.55-1.99-2.22-3.91-4.1-1.96-2.01-3.93-3.79-1.98-1.87-4.09-3.62-2.08-1.79-4.39-3.59-7.07-5.5-4.58-3.46-9.1-6.31-4.54-3.05-9.06-5.48-4.53-2.65-9.06-4.69-4.53-2.24-9.12-3.92-4.57-1.86-9.22-3.15-4.63-1.49-9.37-2.42-4.71-1.12-9.58-1.7-14.65-1.77L0 20.65V0h304l.05 5.75v.52l-.01 1.76-.01.99-.03 2.66-.03 1.44-.06 3.49-.03 1.85-.08 4.27-.04 2.23-.1 4.98-.06 2.58-.12 5.63-.06 2.89-.13 6.22-.07 3.17-.16 6.74-.07 3.43-.17 7.2-.08 3.65-.18 7.59-.09 3.84-.19 7.92-.09 4-.2 8.19-.2 8.24-.42 17.03-.21 8.57-.43 17.27-.22 8.63-.44 17.02-.21 8.43-.43 16.26-.1 3.99-.21 7.76-.1 3.84-.2 7.39-.1 3.64-.19 6.97-.09 3.42-.18 6.47-.09 3.17-.17 5.92-.08 2.88-.15 5.3-.08 2.57-.14 4.62-.07 2.21-.12 3.88-.06 1.84-.1 3.06-.05 1.43-.09 2.19-.04.98-.06 1.26-.07.77h-.09l-.51-.53-.3-.35-.85-1.1-.45-.61-1.07-1.54-.56-.81Z"/></svg>

						<svg className="Shape" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 72 70"><path fill="currentColor" d="M70 63.8C66 48 59.7 36 50.1 25.8 39.3 14.3 24 5.8 9.5 3.4c-4.4-.8-3.5-1 8-1.5 7.2-.4 22.3-.7 33.8-.8L72 1v33.5c0 18.4-.2 33.5-.5 33.5-.2 0-.9-1.9-1.5-4.2z"/></svg>

					</div>
					<div className="Header__container-left">

						<Notification />
						<Profile />

					</div>
				</div>
			</header>
			<MenuMobile OpenMenu={isMobileMenuOpen} toggleMenu={toggleMobileMenu}/>
		</>
	)}</>
  );
}
export default Header;
