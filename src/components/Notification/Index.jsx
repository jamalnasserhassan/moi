import { useState,useEffect } from 'react';

import './Notification.scss';

function Notification() {

	const [isNotificationOpen, setIsNotificationOpen] = useState(false);

	useEffect(() => {
		// Update body and html classes when isNotificationOpen changes
		if (isNotificationOpen) {
			document.body.classList.add('u-overflow');
			document.documentElement.classList.add('u-overflow');
		} else {
			document.body.classList.remove('u-overflow');
			document.documentElement.classList.remove('u-overflow');
		}
	}, [isNotificationOpen]);

	const toggleNotification = () => {
		setIsNotificationOpen(!isNotificationOpen);
	};

	return (
		<div>
			
			<button className="Notification" onClick={toggleNotification}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 26 27"
					width="26"
					height="27"
					className="inline-block"
				>
					<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M13.021 3.656a6.505 6.505 0 0 0-6.5 6.5v3.131c0 .66-.282 1.668-.617 2.232l-1.246 2.069c-.77 1.278-.239 2.697 1.17 3.174a22.665 22.665 0 0 0 14.376 0c1.31-.433 1.885-1.982 1.17-3.174l-1.246-2.07c-.325-.563-.607-1.57-.607-2.23v-3.132c0-3.575-2.925-6.5-6.5-6.5Z"
					/>
					<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M15.024 3.967a7.317 7.317 0 0 0-4.008 0 2.15 2.15 0 0 1 2.004-1.365c.91 0 1.69.563 2.004 1.365Z"
					/>
					<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeMiterlimit="10"
					strokeWidth="1.5"
					d="M16.273 21.148a3.26 3.26 0 0 1-3.25 3.25 3.261 3.261 0 0 1-2.296-.953 3.261 3.261 0 0 1-.954-2.297"
					opacity=".4"
					/>
				</svg>
				<span className="Notification__badge">
					2
				</span>
			</button>

			<aside className={`Sidebar Sidebar__notification ${isNotificationOpen ? 'is--open' : ''}`}>
				<div className="Sidebar__overlay" onClick={toggleNotification}></div>
				<div className="Sidebar__content">
					<div className="Sidebar__content-header">
						<h6>
							الإشعارات
						</h6>
						<button onClick={toggleNotification}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M15.375 17.21 10 11.835 4.625 17.21a.988.988 0 0 1-1.398 0l-.437-.437a.988.988 0 0 1 0-1.398L8.165 10 2.79 4.625a.988.988 0 0 1 0-1.398l.437-.437a.988.988 0 0 1 1.398 0L10 8.165l5.375-5.375a.988.988 0 0 1 1.398 0l.437.437a.988.988 0 0 1 0 1.398L11.835 10l5.375 5.375a.988.988 0 0 1 0 1.398l-.437.437a.988.988 0 0 1-1.398 0Z"/></svg>
						</button>
					</div>
					<div className="Sidebar__content-list">
						<ul>
							<li className="is--unread">
								<article className="Card Card__notification">
									<div className="Card__notification-right">
										<figure>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 45">
												<rect width="44" height="44" y=".5" fill="#00C48C" fillOpacity=".1" rx="22" />
												<path fill="#00C48C" d="M22 12.5a10 10 0 1 0 10 10 10.01 10.01 0 0 0-10-10Zm0 18.571a8.571 8.571 0 1 1 8.571-8.571A8.58 8.58 0 0 1 22 31.071Zm4.79-11.933a.714.714 0 0 1 0 1.01l-5.714 5.714a.714.714 0 0 1-1.01 0l-2.857-2.857a.714.714 0 0 1 1.01-1.01l2.352 2.352 5.21-5.21a.714.714 0 0 1 1.01 0Z" />
											</svg>
										</figure>
										<div className='Card__main'>
											<p>طلب فتح تذكرة</p>
											<p className="description">
												وافق محمد الحارثي على طلب فتح التذكرة رقم
												<a href="javascrit:void(0)">5556655</a>
											</p>
										</div>
									</div>
									<footer>
										<p>٣ دقائق</p>
									</footer>
								</article>
							</li>
							<li  className="is--unread">
								<article className="Card Card__notification">
									<div className="Card__notification-right">
										<figure>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 45">
												<rect width="44" height="44" y=".5" fill="#FF472E" fillOpacity=".05" rx="22"/>
												<path fill="#DE346D" fillRule="evenodd" d="M22 11.75c5.933 0 10.75 4.817 10.75 10.75S27.933 33.25 22 33.25 11.25 28.433 11.25 22.5 16.067 11.75 22 11.75Zm0 1.5c-5.105 0-9.25 4.145-9.25 9.25s4.145 9.25 9.25 9.25 9.25-4.145 9.25-9.25-4.145-9.25-9.25-9.25Z" clipRule="evenodd"/>
												<path fill="#DE346D" fillRule="evenodd" d="M19.03 26.53a.749.749 0 1 1-1.06-1.06l7-7a.749.749 0 1 1 1.06 1.06l-7 7Z" clipRule="evenodd"/>
												<path fill="#DE346D" fillRule="evenodd" d="M26.03 25.47a.749.749 0 1 1-1.06 1.06l-7-7a.749.749 0 1 1 1.06-1.06l7 7Z" clipRule="evenodd"/>
											</svg>
										</figure>
										<div className='Card__main'>
											<p>تم رقض طلبك</p>
											<p className="description">
												وافق محمد الحارثي على طلب فتح التذكرة رقم
												<a href="javascrit:void(0)">5556655</a>
											</p>
										</div>
									</div>
									<footer>
										<p>٣ دقائق</p>
									</footer>
								</article>
							</li>
							<li>
								<article className="Card Card__notification">
									<div className="Card__notification-right">
										<figure>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44">
												<rect width="44" height="44" fill="#FF9361" fillOpacity=".1" rx="22"/>
												<path fill="#FF9361" d="M17 12c-1.65 0-3 1.334-3 2.977v14.685c0 1.643 1.35 2.977 3 2.977h5.926a.53.53 0 0 0 0-1.059H17c-1.087 0-1.941-.849-1.941-1.918V14.977c0-1.07.854-1.918 1.941-1.918h9.877c1.087 0 1.941.848 1.941 1.918v8.136a.529.529 0 1 0 1.057 0v-8.136c0-1.643-1.349-2.977-2.998-2.977H17Z"/>
												<path fill="#FF9361" d="M17.967 16.234a.53.53 0 1 0 0 1.057h7.937a.529.529 0 1 0 0-1.057h-7.937ZM17.959 22.586a.53.53 0 0 0 0 1.059h5.963a.529.529 0 1 0 0-1.06h-5.963ZM17.967 19.406a.528.528 0 0 0-.49.732.528.528 0 0 0 .49.327h7.937a.528.528 0 0 0 .203-1.018.528.528 0 0 0-.203-.04h-7.937ZM26.703 24.172a4.241 4.241 0 0 0-4.234 4.232 4.243 4.243 0 0 0 4.234 4.235 4.241 4.241 0 0 0 4.233-4.235 4.24 4.24 0 0 0-4.233-4.232Zm0 1.056a3.167 3.167 0 0 1 3.174 3.176 3.167 3.167 0 0 1-3.174 3.176 3.168 3.168 0 0 1-3.176-3.176 3.168 3.168 0 0 1 3.176-3.175Z"/>
												<path fill="#FF9361" d="M26.17 26.813a.53.53 0 0 0-.53.529v1.588a.53.53 0 0 0 .53.529h1.588a.53.53 0 0 0 0-1.059h-1.059v-1.058a.53.53 0 0 0-.53-.53Z"/>
											</svg>
										</figure>
										<div className='Card__main'>
											<p>قيد الإنتظار</p>
											<p className="description">
												لديك
												<a href="javascrit:void(0)">3</a>
												طلبات قيد اللإنتظار
											</p>
										</div>
									</div>
									<footer>
										<p>٣ دقائق</p>
									</footer>
								</article>
							</li>

							<li>
								<article className="Card Card__notification">
									<div className="Card__notification-right">
										<figure>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 45">
												<rect width="44" height="44" y=".5" fill="#00C48C" fillOpacity=".1" rx="22" />
												<path fill="#00C48C" d="M22 12.5a10 10 0 1 0 10 10 10.01 10.01 0 0 0-10-10Zm0 18.571a8.571 8.571 0 1 1 8.571-8.571A8.58 8.58 0 0 1 22 31.071Zm4.79-11.933a.714.714 0 0 1 0 1.01l-5.714 5.714a.714.714 0 0 1-1.01 0l-2.857-2.857a.714.714 0 0 1 1.01-1.01l2.352 2.352 5.21-5.21a.714.714 0 0 1 1.01 0Z" />
											</svg>
										</figure>
										<div className='Card__main'>
											<p>طلب فتح تذكرة</p>
											<p className="description">
												وافق محمد الحارثي على طلب فتح التذكرة رقم
												<a href="javascrit:void(0)">5556655</a>
											</p>
										</div>
									</div>
									<footer>
										<p>٣ دقائق</p>
									</footer>
								</article>
							</li>
							<li>
								<article className="Card Card__notification">
									<div className="Card__notification-right">
										<figure>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 45">
												<rect width="44" height="44" y=".5" fill="#00C48C" fillOpacity=".1" rx="22" />
												<path fill="#00C48C" d="M22 12.5a10 10 0 1 0 10 10 10.01 10.01 0 0 0-10-10Zm0 18.571a8.571 8.571 0 1 1 8.571-8.571A8.58 8.58 0 0 1 22 31.071Zm4.79-11.933a.714.714 0 0 1 0 1.01l-5.714 5.714a.714.714 0 0 1-1.01 0l-2.857-2.857a.714.714 0 0 1 1.01-1.01l2.352 2.352 5.21-5.21a.714.714 0 0 1 1.01 0Z" />
											</svg>
										</figure>
										<div className='Card__main'>
											<p>طلب فتح تذكرة</p>
											<p className="description">
												وافق محمد الحارثي على طلب فتح التذكرة رقم
												<a href="javascrit:void(0)">5556655</a>
											</p>
										</div>
									</div>
									<footer>
										<p>٣ دقائق</p>
									</footer>
								</article>
							</li>

							<li>
								<article className="Card Card__notification">
									<div className="Card__notification-right">
										<figure>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 45">
												<rect width="44" height="44" y=".5" fill="#FF472E" fillOpacity=".05" rx="22"/>
												<path fill="#DE346D" fillRule="evenodd" d="M22 11.75c5.933 0 10.75 4.817 10.75 10.75S27.933 33.25 22 33.25 11.25 28.433 11.25 22.5 16.067 11.75 22 11.75Zm0 1.5c-5.105 0-9.25 4.145-9.25 9.25s4.145 9.25 9.25 9.25 9.25-4.145 9.25-9.25-4.145-9.25-9.25-9.25Z" clipRule="evenodd"/>
												<path fill="#DE346D" fillRule="evenodd" d="M19.03 26.53a.749.749 0 1 1-1.06-1.06l7-7a.749.749 0 1 1 1.06 1.06l-7 7Z" clipRule="evenodd"/>
												<path fill="#DE346D" fillRule="evenodd" d="M26.03 25.47a.749.749 0 1 1-1.06 1.06l-7-7a.749.749 0 1 1 1.06-1.06l7 7Z" clipRule="evenodd"/>
											</svg>
										</figure>
										<div className='Card__main'>
											<p>تم رقض طلبك</p>
											<p className="description">
												وافق محمد الحارثي على طلب فتح التذكرة رقم
												<a href="javascrit:void(0)">5556655</a>
											</p>
										</div>
									</div>
									<footer>
										<p>٣ دقائق</p>
									</footer>
								</article>
							</li>
							<li>
								<article className="Card Card__notification">
									<div className="Card__notification-right">
										<figure>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 45">
												<rect width="44" height="44" y=".5" fill="#FF472E" fillOpacity=".05" rx="22"/>
												<path fill="#DE346D" fillRule="evenodd" d="M22 11.75c5.933 0 10.75 4.817 10.75 10.75S27.933 33.25 22 33.25 11.25 28.433 11.25 22.5 16.067 11.75 22 11.75Zm0 1.5c-5.105 0-9.25 4.145-9.25 9.25s4.145 9.25 9.25 9.25 9.25-4.145 9.25-9.25-4.145-9.25-9.25-9.25Z" clipRule="evenodd"/>
												<path fill="#DE346D" fillRule="evenodd" d="M19.03 26.53a.749.749 0 1 1-1.06-1.06l7-7a.749.749 0 1 1 1.06 1.06l-7 7Z" clipRule="evenodd"/>
												<path fill="#DE346D" fillRule="evenodd" d="M26.03 25.47a.749.749 0 1 1-1.06 1.06l-7-7a.749.749 0 1 1 1.06-1.06l7 7Z" clipRule="evenodd"/>
											</svg>
										</figure>
										<div className='Card__main'>
											<p>تم رقض طلبك</p>
											<p className="description">
												وافق محمد الحارثي على طلب فتح التذكرة رقم
												<a href="javascrit:void(0)">5556655</a>
											</p>
										</div>
									</div>
									<footer>
										<p>٣ دقائق</p>
									</footer>
								</article>
							</li>
							<li>
								<article className="Card Card__notification">
									<div className="Card__notification-right">
										<figure>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44">
												<rect width="44" height="44" fill="#FF9361" fillOpacity=".1" rx="22"/>
												<path fill="#FF9361" d="M17 12c-1.65 0-3 1.334-3 2.977v14.685c0 1.643 1.35 2.977 3 2.977h5.926a.53.53 0 0 0 0-1.059H17c-1.087 0-1.941-.849-1.941-1.918V14.977c0-1.07.854-1.918 1.941-1.918h9.877c1.087 0 1.941.848 1.941 1.918v8.136a.529.529 0 1 0 1.057 0v-8.136c0-1.643-1.349-2.977-2.998-2.977H17Z"/>
												<path fill="#FF9361" d="M17.967 16.234a.53.53 0 1 0 0 1.057h7.937a.529.529 0 1 0 0-1.057h-7.937ZM17.959 22.586a.53.53 0 0 0 0 1.059h5.963a.529.529 0 1 0 0-1.06h-5.963ZM17.967 19.406a.528.528 0 0 0-.49.732.528.528 0 0 0 .49.327h7.937a.528.528 0 0 0 .203-1.018.528.528 0 0 0-.203-.04h-7.937ZM26.703 24.172a4.241 4.241 0 0 0-4.234 4.232 4.243 4.243 0 0 0 4.234 4.235 4.241 4.241 0 0 0 4.233-4.235 4.24 4.24 0 0 0-4.233-4.232Zm0 1.056a3.167 3.167 0 0 1 3.174 3.176 3.167 3.167 0 0 1-3.174 3.176 3.168 3.168 0 0 1-3.176-3.176 3.168 3.168 0 0 1 3.176-3.175Z"/>
												<path fill="#FF9361" d="M26.17 26.813a.53.53 0 0 0-.53.529v1.588a.53.53 0 0 0 .53.529h1.588a.53.53 0 0 0 0-1.059h-1.059v-1.058a.53.53 0 0 0-.53-.53Z"/>
											</svg>
										</figure>
										<div className='Card__main'>
											<p>قيد الإنتظار</p>
											<p className="description">
												لديك
												<a href="javascrit:void(0)">3</a>
												طلبات قيد اللإنتظار
											</p>
										</div>
									</div>
									<footer>
										<p>٣ دقائق</p>
									</footer>
								</article>
							</li>

							<li>
								<article className="Card Card__notification">
									<div className="Card__notification-right">
										<figure>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 45">
												<rect width="44" height="44" y=".5" fill="#00C48C" fillOpacity=".1" rx="22" />
												<path fill="#00C48C" d="M22 12.5a10 10 0 1 0 10 10 10.01 10.01 0 0 0-10-10Zm0 18.571a8.571 8.571 0 1 1 8.571-8.571A8.58 8.58 0 0 1 22 31.071Zm4.79-11.933a.714.714 0 0 1 0 1.01l-5.714 5.714a.714.714 0 0 1-1.01 0l-2.857-2.857a.714.714 0 0 1 1.01-1.01l2.352 2.352 5.21-5.21a.714.714 0 0 1 1.01 0Z" />
											</svg>
										</figure>
										<div className='Card__main'>
											<p>طلب فتح تذكرة</p>
											<p className="description">
												وافق محمد الحارثي على طلب فتح التذكرة رقم
												<a href="javascrit:void(0)">5556655</a>
											</p>
										</div>
									</div>
									<footer>
										<p>٣ دقائق</p>
									</footer>
								</article>
							</li>

							<li>
								<article className="Card Card__notification is--loading">
									<div className="Card__notification-right">
										<figure>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 45">
												<rect width="44" height="44" y=".5" fill="#00C48C" fillOpacity=".1" rx="22" />
												<path fill="#00C48C" d="M22 12.5a10 10 0 1 0 10 10 10.01 10.01 0 0 0-10-10Zm0 18.571a8.571 8.571 0 1 1 8.571-8.571A8.58 8.58 0 0 1 22 31.071Zm4.79-11.933a.714.714 0 0 1 0 1.01l-5.714 5.714a.714.714 0 0 1-1.01 0l-2.857-2.857a.714.714 0 0 1 1.01-1.01l2.352 2.352 5.21-5.21a.714.714 0 0 1 1.01 0Z" />
											</svg>
										</figure>
										<div className='Card__main'>
											<p>طلب فتح تذكرة</p>
											<p className="description">
												وافق محمد الحارثي على طلب فتح التذكرة رقم
												<a href="javascrit:void(0)">5556655</a>
											</p>
										</div>
									</div>
									<footer>
										<p>٣ دقائق</p>
									</footer>
								</article>
							</li>

						</ul>
					</div>
				</div>
			</aside>

		</div>
	)
}
export default Notification;
