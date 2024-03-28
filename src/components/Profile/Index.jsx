import { useState } from 'react';

import './Profile.scss';

function Profile() {

	const [IsMenuToggle, setIsMenuToggle] = useState(false);

	const toggleMenu = () => {
		setIsMenuToggle(!IsMenuToggle);
	};


	return (
		<>
			<button className="Profile" onClick={toggleMenu}>
				<div className="Profile__info">
					<div className="Profile__info-avatar">
						<img src="/images/avatar.png" alt="" />
					</div>
					<div className="Profile__info-data">
						<p>سعود الناهض على كامل احمد البسطاويسى</p>
						<p>موظف</p>
					</div>
				</div>
				<div className="Profile__shape">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17">
						<path fill="currentColor" stroke="currentColor" d="M8.499 11.902c-.496 0-.992-.19-1.367-.566L2.513 6.717a.534.534 0 0 1 0-.75.534.534 0 0 1 .751 0l4.619 4.618c.34.34.892.34 1.232 0l4.618-4.618a.535.535 0 0 1 .751 0 .534.534 0 0 1 0 .75l-4.618 4.619a1.931 1.931 0 0 1-1.367.566" opacity={0.6} />
					</svg>
				</div>
			</button>

			<div className={`Profile__menu ${IsMenuToggle ? 'is--open' : ''}`}>
				<ul>
					<li>
						<a href="" title="">
							<span>
								<svg fill="none" viewBox="0 0 17 17">
									<path fill="currentColor" d="M0 9.845c0 2.013 0 3.121.488 4.1.2.403.458.776.765 1.105.746.801 1.786 1.19 3.67 1.895a.823.823 0 0 0 .576-1.54c-1.703-.64-2.56-.96-3.044-1.479a3.069 3.069 0 0 1-.497-.716c-.315-.633-.315-1.55-.315-3.368V7.15c0-1.82 0-2.734.315-3.367.129-.261.296-.502.497-.716.482-.519 1.338-.84 3.044-1.478A.823.823 0 0 0 4.923.046c-1.884.705-2.921 1.095-3.67 1.895-.307.33-.565.702-.765 1.106C0 4.028 0 5.137 0 7.147v2.698Z" />
									<path fill="currentColor" d="M5.21 8.5c0 .452.371.822.824.822h8.984l-2.94 2.94c-.304.304-.365.773-.14 1.091a.827.827 0 0 0 .606.354.815.815 0 0 0 .653-.238l2.94-2.94c.315-.316.546-.661.68-1.02a2.834 2.834 0 0 0-.636-2.998l-2.984-2.984a.818.818 0 0 0-.664-.236.815.815 0 0 0-.608.373c-.212.318-.157.76.131 1.048l2.962 2.962H6.034a.825.825 0 0 0-.823.823v.002Z" />
								</svg>
							</span>
							<span>
								تسجيل خروج
							</span>
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}
export default Profile;
