import './Orders.scss';

import { useState, useRef, useEffect} from 'react';

import Breadcrumb from "../../components/Breadcrumb/Index";
import Select from '../../components/Fields/Select/Index';
import Search from '../../components/Fields/Search/Index';
import DatePickerField from '../../components/Fields/DatePickerField/Index';
import OrderInfo from './OrderInfo/index';
import SidebarInfo from '../../components/Fields/UserInfo/SidebarInfo';

function Orders() {


	const datePickerRef = useRef(null);

	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	// Handle User Profile
	const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
	useEffect(() => {
		if (isUserInfoOpen) {
			document.body.classList.add('u-overflow');
			document.documentElement.classList.add('u-overflow');
		} else {
			document.body.classList.remove('u-overflow');
			document.documentElement.classList.remove('u-overflow');
		}
	}, [isUserInfoOpen]);

	const toggleUserInfo = () => {
		setIsUserInfoOpen(!isUserInfoOpen);
	};


	// Handle User Info Sidebar
	const [isInfoOpen, setIsInfoOpen] = useState(false);
	useEffect(() => {
		if (isInfoOpen) {
			document.body.classList.add('u-overflow');
			document.documentElement.classList.add('u-overflow');
		} else {
			document.body.classList.remove('u-overflow');
			document.documentElement.classList.remove('u-overflow');
		}
	}, [isInfoOpen]);

	const toggleInfo = () => {
		setIsInfoOpen(!isInfoOpen);
	};

	return (
		<section className="Page">

			<div className="Page__header">
				<div className="Page__header-container">
					<div className="Page__header-background" style={{ backgroundImage: 'url(/images/statistics.png)' }}>
					</div>
					<div className="Page__header-padding">
						<div className="Page__header-content">
							<Breadcrumb />

							<div className="Orders__count mt-3 mt-lg-0">
								<ul>
									<li>
										<span>معلقة لديك</span>
										<span className="Orders__count-badge is--pending">6</span>
									</li>
									<li>
										<span>مقبولة</span>
										<span className="Orders__count-badge is--acceptable">6</span>
									</li>
									<li>
										<span>مرفوضه</span>
										<span className="Orders__count-badge is--refused">6</span>
									</li>
									<li>
										<span>ملغاة</span>
										<span className="Orders__count-badge is--cancelled">6</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="Page__Content">

			<section className="Section Section--width Section--statistics Section--top">
					<div className='container'>
						<section className='Section--card Section--gray'>

							<div className="Section__header header--bottom">
								<div className="Section__header-title">
									<h1>جميع الطلبات
									</h1>
									<span className="Badge">
										16
									</span>
								</div>
								<div className={`Section__header-actions ${isOpen ? 'is--open' : ''}`}>

									<div className="Section__actions-item">
										<Select placeholder="الترتيب" label="" size="filter" options={[]} />
									</div>

									<div className="Section__actions-item">
										<Select placeholder="الحالة" label="" size="filter" options={[]} />
									</div>

									<div className="Section__actions-item">
										<Select placeholder="الخدمة" label="" size="filter" options={[]} />
									</div>

									<div className="Section__actions-item">
										<DatePickerField innerRef={datePickerRef} placeholder='التاريخ' label='' size='filter'/>
									</div>

									<div className="Section__actions-item">
										<Search
											size="filter"
											placeholder="ابحث برقم المعامله او اسم المرسل"
											label=""
										/>
									</div>
								</div>
								<button className="Section__button" onClick={toggleOpen}>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
										<path fill="currentColor" d="M6.222 11.33h3.555V9.554H6.222v1.778ZM0 .665v1.778h16V.664H0Zm2.667 6.222h10.666V5.108H2.667v1.778Z"/>
									</svg>
								</button>
							</div>

							<div className='Section__content'>
								<div className="List">
									<article className="Card Card__order is--pending">
										<figure className="is--mobile">
											<ul className="Card__gallery">
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt="" />
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--pending">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
											</ul>
											<button onClick={toggleInfo} className="Button Button__secondary Button__small Button__arrow">
												عرض الكل
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
														<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
															<path d="M3.332 8.5h9.333"/>
															<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
														</g>
													</svg>
												</span>
											</button>
										</figure>
										<div className='Card__main'>
											<div className="Card__title">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect x="0.308594" y="0.382812" width="27.2273" height="27.2273" rx="6.75" fill="#E9EEE0"/>
													<rect x="0.308594" y="0.382812" width="27.2273" height="27.2273" rx="6.75" stroke="#688137" strokeWidth="0.5"/>
													<path d="M18.4984 13.2203H9.35469C8.17344 13.2203 7.21094 12.2578 7.21094 11.0766V9.43282C7.21094 8.25157 8.17344 7.28906 9.35469 7.28906H18.4984C19.6797 7.28906 20.6422 8.25157 20.6422 9.43282V11.0766C20.6422 12.2578 19.6797 13.2203 18.4984 13.2203ZM9.34844 8.22032C8.67969 8.22032 8.14219 8.76406 8.14219 9.42656V11.0703C8.14219 11.7391 8.68594 12.2766 9.34844 12.2766H18.4922C19.1609 12.2766 19.6984 11.7328 19.6984 11.0703V9.42656C19.6984 8.75781 19.1547 8.22032 18.4922 8.22032H9.34844Z" fill="#688137"/>
													<path d="M18.4984 20.7203H9.35469C8.17344 20.7203 7.21094 19.7578 7.21094 18.5766V16.9328C7.21094 15.7516 8.17344 14.7891 9.35469 14.7891H18.4984C19.6797 14.7891 20.6422 15.7516 20.6422 16.9328V18.5766C20.6422 19.7578 19.6797 20.7203 18.4984 20.7203ZM9.34844 15.7203C8.67969 15.7203 8.14219 16.2641 8.14219 16.9266V18.5703C8.14219 19.2391 8.68594 19.7766 9.34844 19.7766H18.4922C19.1609 19.7766 19.6984 19.2328 19.6984 18.5703V16.9266C19.6984 16.2578 19.1547 15.7203 18.4922 15.7203H9.34844Z" fill="#688137"/>
													<path d="M10.1719 11.3438C9.91563 11.3438 9.70312 11.1312 9.70312 10.875V9.625C9.70312 9.36875 9.91563 9.15625 10.1719 9.15625C10.4281 9.15625 10.6406 9.36875 10.6406 9.625V10.875C10.6406 11.1312 10.4281 11.3438 10.1719 11.3438Z" fill="#688137"/>
													<path d="M12.6719 11.3438C12.4156 11.3438 12.2031 11.1312 12.2031 10.875V9.625C12.2031 9.36875 12.4156 9.15625 12.6719 9.15625C12.9281 9.15625 13.1406 9.36875 13.1406 9.625V10.875C13.1406 11.1312 12.9281 11.3438 12.6719 11.3438Z" fill="#688137"/>
													<path d="M10.1719 18.8438C9.91563 18.8438 9.70312 18.6312 9.70312 18.375V17.125C9.70312 16.8688 9.91563 16.6562 10.1719 16.6562C10.4281 16.6562 10.6406 16.8688 10.6406 17.125V18.375C10.6406 18.6312 10.4281 18.8438 10.1719 18.8438Z" fill="#688137"/>
													<path d="M12.6719 18.8438C12.4156 18.8438 12.2031 18.6312 12.2031 18.375V17.125C12.2031 16.8688 12.4156 16.6562 12.6719 16.6562C12.9281 16.6562 13.1406 16.8688 13.1406 17.125V18.375C13.1406 18.6312 12.9281 18.8438 12.6719 18.8438Z" fill="#688137"/>
													<path d="M17.6719 10.7188H15.1719C14.9156 10.7188 14.7031 10.5062 14.7031 10.25C14.7031 9.99375 14.9156 9.78125 15.1719 9.78125H17.6719C17.9281 9.78125 18.1406 9.99375 18.1406 10.25C18.1406 10.5062 17.9281 10.7188 17.6719 10.7188Z" fill="#688137"/>
													<path d="M17.6719 18.2188H15.1719C14.9156 18.2188 14.7031 18.0062 14.7031 17.75C14.7031 17.4938 14.9156 17.2812 15.1719 17.2812H17.6719C17.9281 17.2812 18.1406 17.4938 18.1406 17.75C18.1406 18.0062 17.9281 18.2188 17.6719 18.2188Z" fill="#688137"/>
												</svg>
												<p>طلب خادم جديد</p>
											</div>
											<ul className="Card__list">
												<li>
													<button onClick={toggleUserInfo}>
														<img src="/images/avatar.png" alt=""/>
														فهد الحربي
													</button>
												</li>
												<li>
													ECA02230
												</li>
												<li>
													22/02/2021  01:15:12 PM
												</li>
											</ul>
										</div>
										<figure>
											<ul className="Card__gallery">
												<div className="Tooltip">
													<div className="Tooltip__arrow"></div>
													هنا يوضع التكست
												</div>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--pending">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
											</ul>
										</figure>
										<footer className='is--page'>

											<div className='Button__container'>
												<span className="Button Button__small Button__pending">
												موافقة
												</span>

												<button type="button" onClick={toggleInfo}  className="Button__hover Button__pending">
												عرض
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
														<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
															<path d="M3.332 8.5h9.333"/>
															<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
														</g>
													</svg>
												</span>
												</button>
											</div>

											<button className="Button Button__list">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 4 18"><path fill="currentColor" d="M3.538 14.497H.035V18h3.503v-3.503Zm0-7.248H.035v3.502h3.503V7.25Zm0-7.249H.035v3.503h3.503V0Z"/></svg>
											</button>
										</footer>
									</article>

									<article className="Card Card__order is--pending">
										<figure className="is--mobile">
											<ul className="Card__gallery">
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--pending">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
											</ul>
											<button onClick={toggleInfo} className="Button Button__secondary Button__small Button__arrow">
												عرض الكل
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
														<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
															<path d="M3.332 8.5h9.333"/>
															<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
														</g>
													</svg>
												</span>
											</button>
										</figure>
										<div className='Card__main'>
											<div className="Card__title">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect x="0.308594" y="0.382812" width="27.2273" height="27.2273" rx="6.75" fill="#E9EEE0"/>
													<rect x="0.308594" y="0.382812" width="27.2273" height="27.2273" rx="6.75" stroke="#688137" strokeWidth="0.5"/>
													<path d="M18.4984 13.2203H9.35469C8.17344 13.2203 7.21094 12.2578 7.21094 11.0766V9.43282C7.21094 8.25157 8.17344 7.28906 9.35469 7.28906H18.4984C19.6797 7.28906 20.6422 8.25157 20.6422 9.43282V11.0766C20.6422 12.2578 19.6797 13.2203 18.4984 13.2203ZM9.34844 8.22032C8.67969 8.22032 8.14219 8.76406 8.14219 9.42656V11.0703C8.14219 11.7391 8.68594 12.2766 9.34844 12.2766H18.4922C19.1609 12.2766 19.6984 11.7328 19.6984 11.0703V9.42656C19.6984 8.75781 19.1547 8.22032 18.4922 8.22032H9.34844Z" fill="#688137"/>
													<path d="M18.4984 20.7203H9.35469C8.17344 20.7203 7.21094 19.7578 7.21094 18.5766V16.9328C7.21094 15.7516 8.17344 14.7891 9.35469 14.7891H18.4984C19.6797 14.7891 20.6422 15.7516 20.6422 16.9328V18.5766C20.6422 19.7578 19.6797 20.7203 18.4984 20.7203ZM9.34844 15.7203C8.67969 15.7203 8.14219 16.2641 8.14219 16.9266V18.5703C8.14219 19.2391 8.68594 19.7766 9.34844 19.7766H18.4922C19.1609 19.7766 19.6984 19.2328 19.6984 18.5703V16.9266C19.6984 16.2578 19.1547 15.7203 18.4922 15.7203H9.34844Z" fill="#688137"/>
													<path d="M10.1719 11.3438C9.91563 11.3438 9.70312 11.1312 9.70312 10.875V9.625C9.70312 9.36875 9.91563 9.15625 10.1719 9.15625C10.4281 9.15625 10.6406 9.36875 10.6406 9.625V10.875C10.6406 11.1312 10.4281 11.3438 10.1719 11.3438Z" fill="#688137"/>
													<path d="M12.6719 11.3438C12.4156 11.3438 12.2031 11.1312 12.2031 10.875V9.625C12.2031 9.36875 12.4156 9.15625 12.6719 9.15625C12.9281 9.15625 13.1406 9.36875 13.1406 9.625V10.875C13.1406 11.1312 12.9281 11.3438 12.6719 11.3438Z" fill="#688137"/>
													<path d="M10.1719 18.8438C9.91563 18.8438 9.70312 18.6312 9.70312 18.375V17.125C9.70312 16.8688 9.91563 16.6562 10.1719 16.6562C10.4281 16.6562 10.6406 16.8688 10.6406 17.125V18.375C10.6406 18.6312 10.4281 18.8438 10.1719 18.8438Z" fill="#688137"/>
													<path d="M12.6719 18.8438C12.4156 18.8438 12.2031 18.6312 12.2031 18.375V17.125C12.2031 16.8688 12.4156 16.6562 12.6719 16.6562C12.9281 16.6562 13.1406 16.8688 13.1406 17.125V18.375C13.1406 18.6312 12.9281 18.8438 12.6719 18.8438Z" fill="#688137"/>
													<path d="M17.6719 10.7188H15.1719C14.9156 10.7188 14.7031 10.5062 14.7031 10.25C14.7031 9.99375 14.9156 9.78125 15.1719 9.78125H17.6719C17.9281 9.78125 18.1406 9.99375 18.1406 10.25C18.1406 10.5062 17.9281 10.7188 17.6719 10.7188Z" fill="#688137"/>
													<path d="M17.6719 18.2188H15.1719C14.9156 18.2188 14.7031 18.0062 14.7031 17.75C14.7031 17.4938 14.9156 17.2812 15.1719 17.2812H17.6719C17.9281 17.2812 18.1406 17.4938 18.1406 17.75C18.1406 18.0062 17.9281 18.2188 17.6719 18.2188Z" fill="#688137"/>
												</svg>
												<p>طلب خادم جديد</p>
											</div>
											<ul className="Card__list">
												<li>
													<button onClick={toggleUserInfo}>
								<img src="/images/avatar.png" alt=""/>
								فهد الحربي
							</button>
												</li>
												<li>
													ECA02230
												</li>
												<li>
													22/02/2021  01:15:12 PM
												</li>
											</ul>
										</div>
										<figure>
											<ul className="Card__gallery">
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--pending">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
											</ul>
										</figure>
										<footer className='is--page'>

											<div className='Button__container'>
												<span className="Button Button__small Button__pending">
												موافقة
												</span>

												<button type="button" onClick={toggleInfo}  className="Button__hover Button__pending">
												عرض
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
														<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
															<path d="M3.332 8.5h9.333"/>
															<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
														</g>
													</svg>
												</span>
												</button>
											</div>
											<button className="Button Button__list">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 4 18"><path fill="currentColor" d="M3.538 14.497H.035V18h3.503v-3.503Zm0-7.248H.035v3.502h3.503V7.25Zm0-7.249H.035v3.503h3.503V0Z"/></svg>
											</button>
										</footer>
									</article>

									<article className="Card Card__order is--cancelled">
										<figure className="is--mobile">
											<ul className="Card__gallery">
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--cancelled">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
											</ul>
											<button onClick={toggleInfo} className="Button Button__secondary Button__small Button__arrow">
												عرض الكل
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
														<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
															<path d="M3.332 8.5h9.333"/>
															<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
														</g>
													</svg>
												</span>
											</button>
										</figure>
										<div className='Card__main'>
											<div className="Card__title">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect x="0.308594" y="0.382812" width="27.2273" height="27.2273" rx="6.75" fill="#E9EEE0"/>
													<rect x="0.308594" y="0.382812" width="27.2273" height="27.2273" rx="6.75" stroke="#688137" strokeWidth="0.5"/>
													<path d="M18.4984 13.2203H9.35469C8.17344 13.2203 7.21094 12.2578 7.21094 11.0766V9.43282C7.21094 8.25157 8.17344 7.28906 9.35469 7.28906H18.4984C19.6797 7.28906 20.6422 8.25157 20.6422 9.43282V11.0766C20.6422 12.2578 19.6797 13.2203 18.4984 13.2203ZM9.34844 8.22032C8.67969 8.22032 8.14219 8.76406 8.14219 9.42656V11.0703C8.14219 11.7391 8.68594 12.2766 9.34844 12.2766H18.4922C19.1609 12.2766 19.6984 11.7328 19.6984 11.0703V9.42656C19.6984 8.75781 19.1547 8.22032 18.4922 8.22032H9.34844Z" fill="#688137"/>
													<path d="M18.4984 20.7203H9.35469C8.17344 20.7203 7.21094 19.7578 7.21094 18.5766V16.9328C7.21094 15.7516 8.17344 14.7891 9.35469 14.7891H18.4984C19.6797 14.7891 20.6422 15.7516 20.6422 16.9328V18.5766C20.6422 19.7578 19.6797 20.7203 18.4984 20.7203ZM9.34844 15.7203C8.67969 15.7203 8.14219 16.2641 8.14219 16.9266V18.5703C8.14219 19.2391 8.68594 19.7766 9.34844 19.7766H18.4922C19.1609 19.7766 19.6984 19.2328 19.6984 18.5703V16.9266C19.6984 16.2578 19.1547 15.7203 18.4922 15.7203H9.34844Z" fill="#688137"/>
													<path d="M10.1719 11.3438C9.91563 11.3438 9.70312 11.1312 9.70312 10.875V9.625C9.70312 9.36875 9.91563 9.15625 10.1719 9.15625C10.4281 9.15625 10.6406 9.36875 10.6406 9.625V10.875C10.6406 11.1312 10.4281 11.3438 10.1719 11.3438Z" fill="#688137"/>
													<path d="M12.6719 11.3438C12.4156 11.3438 12.2031 11.1312 12.2031 10.875V9.625C12.2031 9.36875 12.4156 9.15625 12.6719 9.15625C12.9281 9.15625 13.1406 9.36875 13.1406 9.625V10.875C13.1406 11.1312 12.9281 11.3438 12.6719 11.3438Z" fill="#688137"/>
													<path d="M10.1719 18.8438C9.91563 18.8438 9.70312 18.6312 9.70312 18.375V17.125C9.70312 16.8688 9.91563 16.6562 10.1719 16.6562C10.4281 16.6562 10.6406 16.8688 10.6406 17.125V18.375C10.6406 18.6312 10.4281 18.8438 10.1719 18.8438Z" fill="#688137"/>
													<path d="M12.6719 18.8438C12.4156 18.8438 12.2031 18.6312 12.2031 18.375V17.125C12.2031 16.8688 12.4156 16.6562 12.6719 16.6562C12.9281 16.6562 13.1406 16.8688 13.1406 17.125V18.375C13.1406 18.6312 12.9281 18.8438 12.6719 18.8438Z" fill="#688137"/>
													<path d="M17.6719 10.7188H15.1719C14.9156 10.7188 14.7031 10.5062 14.7031 10.25C14.7031 9.99375 14.9156 9.78125 15.1719 9.78125H17.6719C17.9281 9.78125 18.1406 9.99375 18.1406 10.25C18.1406 10.5062 17.9281 10.7188 17.6719 10.7188Z" fill="#688137"/>
													<path d="M17.6719 18.2188H15.1719C14.9156 18.2188 14.7031 18.0062 14.7031 17.75C14.7031 17.4938 14.9156 17.2812 15.1719 17.2812H17.6719C17.9281 17.2812 18.1406 17.4938 18.1406 17.75C18.1406 18.0062 17.9281 18.2188 17.6719 18.2188Z" fill="#688137"/>
												</svg>
												<p>طلب خادم جديد</p>
											</div>
											<ul className="Card__list">
												<li>
													<button onClick={toggleUserInfo}>
								<img src="/images/avatar.png" alt=""/>
								فهد الحربي
							</button>
												</li>
												<li>
													ECA02230
												</li>
												<li>
													22/02/2021  01:15:12 PM
												</li>
											</ul>
										</div>
										<figure>
											<ul className="Card__gallery">
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--cancelled">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
											</ul>
										</figure>
										<footer className='is--page'>

											<div className='Button__container'>
												<span className="Button Button__small Button__refused">
												موافقة
												</span>

												<button type="button" onClick={toggleInfo}  className="Button__hover Button__refused">
												عرض
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
														<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
															<path d="M3.332 8.5h9.333"/>
															<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
														</g>
													</svg>
												</span>
												</button>
											</div>
											<button className="Button Button__list">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 4 18"><path fill="currentColor" d="M3.538 14.497H.035V18h3.503v-3.503Zm0-7.248H.035v3.502h3.503V7.25Zm0-7.249H.035v3.503h3.503V0Z"/></svg>
											</button>
										</footer>
									</article>

									<article className="Card Card__order is--cancelled">
										<figure className="is--mobile">
											<ul className="Card__gallery">
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--cancelled">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
											</ul>
											<button onClick={toggleInfo} className="Button Button__secondary Button__small Button__arrow">
												عرض الكل
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
														<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
															<path d="M3.332 8.5h9.333"/>
															<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
														</g>
													</svg>
												</span>
											</button>
										</figure>
										<div className='Card__main'>
											<div className="Card__title">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect x="0.308594" y="0.382812" width="27.2273" height="27.2273" rx="6.75" fill="#E9EEE0"/>
													<rect x="0.308594" y="0.382812" width="27.2273" height="27.2273" rx="6.75" stroke="#688137" strokeWidth="0.5"/>
													<path d="M18.4984 13.2203H9.35469C8.17344 13.2203 7.21094 12.2578 7.21094 11.0766V9.43282C7.21094 8.25157 8.17344 7.28906 9.35469 7.28906H18.4984C19.6797 7.28906 20.6422 8.25157 20.6422 9.43282V11.0766C20.6422 12.2578 19.6797 13.2203 18.4984 13.2203ZM9.34844 8.22032C8.67969 8.22032 8.14219 8.76406 8.14219 9.42656V11.0703C8.14219 11.7391 8.68594 12.2766 9.34844 12.2766H18.4922C19.1609 12.2766 19.6984 11.7328 19.6984 11.0703V9.42656C19.6984 8.75781 19.1547 8.22032 18.4922 8.22032H9.34844Z" fill="#688137"/>
													<path d="M18.4984 20.7203H9.35469C8.17344 20.7203 7.21094 19.7578 7.21094 18.5766V16.9328C7.21094 15.7516 8.17344 14.7891 9.35469 14.7891H18.4984C19.6797 14.7891 20.6422 15.7516 20.6422 16.9328V18.5766C20.6422 19.7578 19.6797 20.7203 18.4984 20.7203ZM9.34844 15.7203C8.67969 15.7203 8.14219 16.2641 8.14219 16.9266V18.5703C8.14219 19.2391 8.68594 19.7766 9.34844 19.7766H18.4922C19.1609 19.7766 19.6984 19.2328 19.6984 18.5703V16.9266C19.6984 16.2578 19.1547 15.7203 18.4922 15.7203H9.34844Z" fill="#688137"/>
													<path d="M10.1719 11.3438C9.91563 11.3438 9.70312 11.1312 9.70312 10.875V9.625C9.70312 9.36875 9.91563 9.15625 10.1719 9.15625C10.4281 9.15625 10.6406 9.36875 10.6406 9.625V10.875C10.6406 11.1312 10.4281 11.3438 10.1719 11.3438Z" fill="#688137"/>
													<path d="M12.6719 11.3438C12.4156 11.3438 12.2031 11.1312 12.2031 10.875V9.625C12.2031 9.36875 12.4156 9.15625 12.6719 9.15625C12.9281 9.15625 13.1406 9.36875 13.1406 9.625V10.875C13.1406 11.1312 12.9281 11.3438 12.6719 11.3438Z" fill="#688137"/>
													<path d="M10.1719 18.8438C9.91563 18.8438 9.70312 18.6312 9.70312 18.375V17.125C9.70312 16.8688 9.91563 16.6562 10.1719 16.6562C10.4281 16.6562 10.6406 16.8688 10.6406 17.125V18.375C10.6406 18.6312 10.4281 18.8438 10.1719 18.8438Z" fill="#688137"/>
													<path d="M12.6719 18.8438C12.4156 18.8438 12.2031 18.6312 12.2031 18.375V17.125C12.2031 16.8688 12.4156 16.6562 12.6719 16.6562C12.9281 16.6562 13.1406 16.8688 13.1406 17.125V18.375C13.1406 18.6312 12.9281 18.8438 12.6719 18.8438Z" fill="#688137"/>
													<path d="M17.6719 10.7188H15.1719C14.9156 10.7188 14.7031 10.5062 14.7031 10.25C14.7031 9.99375 14.9156 9.78125 15.1719 9.78125H17.6719C17.9281 9.78125 18.1406 9.99375 18.1406 10.25C18.1406 10.5062 17.9281 10.7188 17.6719 10.7188Z" fill="#688137"/>
													<path d="M17.6719 18.2188H15.1719C14.9156 18.2188 14.7031 18.0062 14.7031 17.75C14.7031 17.4938 14.9156 17.2812 15.1719 17.2812H17.6719C17.9281 17.2812 18.1406 17.4938 18.1406 17.75C18.1406 18.0062 17.9281 18.2188 17.6719 18.2188Z" fill="#688137"/>
												</svg>
												<p>طلب خادم جديد</p>
											</div>
											<ul className="Card__list">
												<li>
													<button onClick={toggleUserInfo}>
								<img src="/images/avatar.png" alt=""/>
								فهد الحربي
							</button>
												</li>
												<li>
													ECA02230
												</li>
												<li>
													22/02/2021  01:15:12 PM
												</li>
											</ul>
										</div>
										<figure>
											<ul className="Card__gallery">
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--cancelled">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
											</ul>
										</figure>
										<footer className='is--page'>

											<div className='Button__container'>
												<span className="Button Button__small Button__refused">
												موافقة
												</span>

												<button type="button" onClick={toggleInfo}  className="Button__hover Button__refused">
												عرض
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
														<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
															<path d="M3.332 8.5h9.333"/>
															<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
														</g>
													</svg>
												</span>
												</button>
											</div>
											<button className="Button Button__list">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 4 18"><path fill="currentColor" d="M3.538 14.497H.035V18h3.503v-3.503Zm0-7.248H.035v3.502h3.503V7.25Zm0-7.249H.035v3.503h3.503V0Z"/></svg>
											</button>
										</footer>
									</article>

									<article className="Card Card__order is--acceptable">
										<figure className="is--mobile">
											<ul className="Card__gallery">
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--pending">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
											</ul>
											<button onClick={toggleInfo} className="Button Button__secondary Button__small Button__arrow">
												عرض الكل
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
														<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
															<path d="M3.332 8.5h9.333"/>
															<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
														</g>
													</svg>
												</span>
											</button>
										</figure>
										<div className='Card__main'>
											<div className="Card__title">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect x="0.308594" y="0.382812" width="27.2273" height="27.2273" rx="6.75" fill="#E9EEE0"/>
													<rect x="0.308594" y="0.382812" width="27.2273" height="27.2273" rx="6.75" stroke="#688137" strokeWidth="0.5"/>
													<path d="M18.4984 13.2203H9.35469C8.17344 13.2203 7.21094 12.2578 7.21094 11.0766V9.43282C7.21094 8.25157 8.17344 7.28906 9.35469 7.28906H18.4984C19.6797 7.28906 20.6422 8.25157 20.6422 9.43282V11.0766C20.6422 12.2578 19.6797 13.2203 18.4984 13.2203ZM9.34844 8.22032C8.67969 8.22032 8.14219 8.76406 8.14219 9.42656V11.0703C8.14219 11.7391 8.68594 12.2766 9.34844 12.2766H18.4922C19.1609 12.2766 19.6984 11.7328 19.6984 11.0703V9.42656C19.6984 8.75781 19.1547 8.22032 18.4922 8.22032H9.34844Z" fill="#688137"/>
													<path d="M18.4984 20.7203H9.35469C8.17344 20.7203 7.21094 19.7578 7.21094 18.5766V16.9328C7.21094 15.7516 8.17344 14.7891 9.35469 14.7891H18.4984C19.6797 14.7891 20.6422 15.7516 20.6422 16.9328V18.5766C20.6422 19.7578 19.6797 20.7203 18.4984 20.7203ZM9.34844 15.7203C8.67969 15.7203 8.14219 16.2641 8.14219 16.9266V18.5703C8.14219 19.2391 8.68594 19.7766 9.34844 19.7766H18.4922C19.1609 19.7766 19.6984 19.2328 19.6984 18.5703V16.9266C19.6984 16.2578 19.1547 15.7203 18.4922 15.7203H9.34844Z" fill="#688137"/>
													<path d="M10.1719 11.3438C9.91563 11.3438 9.70312 11.1312 9.70312 10.875V9.625C9.70312 9.36875 9.91563 9.15625 10.1719 9.15625C10.4281 9.15625 10.6406 9.36875 10.6406 9.625V10.875C10.6406 11.1312 10.4281 11.3438 10.1719 11.3438Z" fill="#688137"/>
													<path d="M12.6719 11.3438C12.4156 11.3438 12.2031 11.1312 12.2031 10.875V9.625C12.2031 9.36875 12.4156 9.15625 12.6719 9.15625C12.9281 9.15625 13.1406 9.36875 13.1406 9.625V10.875C13.1406 11.1312 12.9281 11.3438 12.6719 11.3438Z" fill="#688137"/>
													<path d="M10.1719 18.8438C9.91563 18.8438 9.70312 18.6312 9.70312 18.375V17.125C9.70312 16.8688 9.91563 16.6562 10.1719 16.6562C10.4281 16.6562 10.6406 16.8688 10.6406 17.125V18.375C10.6406 18.6312 10.4281 18.8438 10.1719 18.8438Z" fill="#688137"/>
													<path d="M12.6719 18.8438C12.4156 18.8438 12.2031 18.6312 12.2031 18.375V17.125C12.2031 16.8688 12.4156 16.6562 12.6719 16.6562C12.9281 16.6562 13.1406 16.8688 13.1406 17.125V18.375C13.1406 18.6312 12.9281 18.8438 12.6719 18.8438Z" fill="#688137"/>
													<path d="M17.6719 10.7188H15.1719C14.9156 10.7188 14.7031 10.5062 14.7031 10.25C14.7031 9.99375 14.9156 9.78125 15.1719 9.78125H17.6719C17.9281 9.78125 18.1406 9.99375 18.1406 10.25C18.1406 10.5062 17.9281 10.7188 17.6719 10.7188Z" fill="#688137"/>
													<path d="M17.6719 18.2188H15.1719C14.9156 18.2188 14.7031 18.0062 14.7031 17.75C14.7031 17.4938 14.9156 17.2812 15.1719 17.2812H17.6719C17.9281 17.2812 18.1406 17.4938 18.1406 17.75C18.1406 18.0062 17.9281 18.2188 17.6719 18.2188Z" fill="#688137"/>
												</svg>
												<p>طلب خادم جديد</p>
											</div>
											<ul className="Card__list">
												<li>
													<button onClick={toggleUserInfo}>
								<img src="/images/avatar.png" alt=""/>
								فهد الحربي
							</button>
												</li>
												<li>
													ECA02230
												</li>
												<li>
													22/02/2021  01:15:12 PM
												</li>
											</ul>
										</div>
										<figure>
											<ul className="Card__gallery">
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--pending">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
											</ul>
										</figure>
										<footer className='is--page'>

											<div className='Button__container'>
												<span className="Button Button__small Button__acceptable">
												موافقة
												</span>

												<button type="button" onClick={toggleInfo}  className="Button__hover Button__acceptable">
												عرض
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
														<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
															<path d="M3.332 8.5h9.333"/>
															<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
														</g>
													</svg>
												</span>
												</button>
											</div>
											<button className="Button Button__list">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 4 18"><path fill="currentColor" d="M3.538 14.497H.035V18h3.503v-3.503Zm0-7.248H.035v3.502h3.503V7.25Zm0-7.249H.035v3.503h3.503V0Z"/></svg>
											</button>
										</footer>
									</article>

									<article className="Card Card__order is--acceptable">
										<figure className="is--mobile">
											<ul className="Card__gallery">
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--pending">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
											</ul>
											<button onClick={toggleInfo} className="Button Button__secondary Button__small Button__arrow">
												عرض الكل
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
														<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
															<path d="M3.332 8.5h9.333"/>
															<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
														</g>
													</svg>
												</span>
											</button>
										</figure>
										<div className='Card__main'>
											<div className="Card__title">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect x="0.308594" y="0.382812" width="27.2273" height="27.2273" rx="6.75" fill="#E9EEE0"/>
													<rect x="0.308594" y="0.382812" width="27.2273" height="27.2273" rx="6.75" stroke="#688137" strokeWidth="0.5"/>
													<path d="M18.4984 13.2203H9.35469C8.17344 13.2203 7.21094 12.2578 7.21094 11.0766V9.43282C7.21094 8.25157 8.17344 7.28906 9.35469 7.28906H18.4984C19.6797 7.28906 20.6422 8.25157 20.6422 9.43282V11.0766C20.6422 12.2578 19.6797 13.2203 18.4984 13.2203ZM9.34844 8.22032C8.67969 8.22032 8.14219 8.76406 8.14219 9.42656V11.0703C8.14219 11.7391 8.68594 12.2766 9.34844 12.2766H18.4922C19.1609 12.2766 19.6984 11.7328 19.6984 11.0703V9.42656C19.6984 8.75781 19.1547 8.22032 18.4922 8.22032H9.34844Z" fill="#688137"/>
													<path d="M18.4984 20.7203H9.35469C8.17344 20.7203 7.21094 19.7578 7.21094 18.5766V16.9328C7.21094 15.7516 8.17344 14.7891 9.35469 14.7891H18.4984C19.6797 14.7891 20.6422 15.7516 20.6422 16.9328V18.5766C20.6422 19.7578 19.6797 20.7203 18.4984 20.7203ZM9.34844 15.7203C8.67969 15.7203 8.14219 16.2641 8.14219 16.9266V18.5703C8.14219 19.2391 8.68594 19.7766 9.34844 19.7766H18.4922C19.1609 19.7766 19.6984 19.2328 19.6984 18.5703V16.9266C19.6984 16.2578 19.1547 15.7203 18.4922 15.7203H9.34844Z" fill="#688137"/>
													<path d="M10.1719 11.3438C9.91563 11.3438 9.70312 11.1312 9.70312 10.875V9.625C9.70312 9.36875 9.91563 9.15625 10.1719 9.15625C10.4281 9.15625 10.6406 9.36875 10.6406 9.625V10.875C10.6406 11.1312 10.4281 11.3438 10.1719 11.3438Z" fill="#688137"/>
													<path d="M12.6719 11.3438C12.4156 11.3438 12.2031 11.1312 12.2031 10.875V9.625C12.2031 9.36875 12.4156 9.15625 12.6719 9.15625C12.9281 9.15625 13.1406 9.36875 13.1406 9.625V10.875C13.1406 11.1312 12.9281 11.3438 12.6719 11.3438Z" fill="#688137"/>
													<path d="M10.1719 18.8438C9.91563 18.8438 9.70312 18.6312 9.70312 18.375V17.125C9.70312 16.8688 9.91563 16.6562 10.1719 16.6562C10.4281 16.6562 10.6406 16.8688 10.6406 17.125V18.375C10.6406 18.6312 10.4281 18.8438 10.1719 18.8438Z" fill="#688137"/>
													<path d="M12.6719 18.8438C12.4156 18.8438 12.2031 18.6312 12.2031 18.375V17.125C12.2031 16.8688 12.4156 16.6562 12.6719 16.6562C12.9281 16.6562 13.1406 16.8688 13.1406 17.125V18.375C13.1406 18.6312 12.9281 18.8438 12.6719 18.8438Z" fill="#688137"/>
													<path d="M17.6719 10.7188H15.1719C14.9156 10.7188 14.7031 10.5062 14.7031 10.25C14.7031 9.99375 14.9156 9.78125 15.1719 9.78125H17.6719C17.9281 9.78125 18.1406 9.99375 18.1406 10.25C18.1406 10.5062 17.9281 10.7188 17.6719 10.7188Z" fill="#688137"/>
													<path d="M17.6719 18.2188H15.1719C14.9156 18.2188 14.7031 18.0062 14.7031 17.75C14.7031 17.4938 14.9156 17.2812 15.1719 17.2812H17.6719C17.9281 17.2812 18.1406 17.4938 18.1406 17.75C18.1406 18.0062 17.9281 18.2188 17.6719 18.2188Z" fill="#688137"/>
												</svg>
												<p>طلب خادم جديد</p>
											</div>
											<ul className="Card__list">
												<li>
													<button onClick={toggleUserInfo}>
								<img src="/images/avatar.png" alt=""/>
								فهد الحربي
							</button>
												</li>
												<li>
													ECA02230
												</li>
												<li>
													22/02/2021  01:15:12 PM
												</li>
											</ul>
										</div>
										<figure>
											<ul className="Card__gallery">
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--pending">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
											</ul>
										</figure>
										<footer className='is--page'>

											<div className='Button__container'>
												<span className="Button Button__small Button__acceptable">
												موافقة
												</span>

												<button type="button" onClick={toggleInfo}  className="Button__hover Button__acceptable">
												عرض
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
														<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
															<path d="M3.332 8.5h9.333"/>
															<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
														</g>
													</svg>
												</span>
												</button>
											</div>
											<button className="Button Button__list">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 4 18"><path fill="currentColor" d="M3.538 14.497H.035V18h3.503v-3.503Zm0-7.248H.035v3.502h3.503V7.25Zm0-7.249H.035v3.503h3.503V0Z"/></svg>
											</button>
										</footer>
									</article>

									<article className="Card Card__order is--acceptable">
										<figure className="is--mobile">
											<ul className="Card__gallery">
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--pending">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
											</ul>
											<button onClick={toggleInfo} className="Button Button__secondary Button__small Button__arrow">
												عرض الكل
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
														<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
															<path d="M3.332 8.5h9.333"/>
															<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
														</g>
													</svg>
												</span>
											</button>
										</figure>
										<div className='Card__main'>
											<div className="Card__title">
												<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect x="0.308594" y="0.382812" width="27.2273" height="27.2273" rx="6.75" fill="#E9EEE0"/>
													<rect x="0.308594" y="0.382812" width="27.2273" height="27.2273" rx="6.75" stroke="#688137" strokeWidth="0.5"/>
													<path d="M18.4984 13.2203H9.35469C8.17344 13.2203 7.21094 12.2578 7.21094 11.0766V9.43282C7.21094 8.25157 8.17344 7.28906 9.35469 7.28906H18.4984C19.6797 7.28906 20.6422 8.25157 20.6422 9.43282V11.0766C20.6422 12.2578 19.6797 13.2203 18.4984 13.2203ZM9.34844 8.22032C8.67969 8.22032 8.14219 8.76406 8.14219 9.42656V11.0703C8.14219 11.7391 8.68594 12.2766 9.34844 12.2766H18.4922C19.1609 12.2766 19.6984 11.7328 19.6984 11.0703V9.42656C19.6984 8.75781 19.1547 8.22032 18.4922 8.22032H9.34844Z" fill="#688137"/>
													<path d="M18.4984 20.7203H9.35469C8.17344 20.7203 7.21094 19.7578 7.21094 18.5766V16.9328C7.21094 15.7516 8.17344 14.7891 9.35469 14.7891H18.4984C19.6797 14.7891 20.6422 15.7516 20.6422 16.9328V18.5766C20.6422 19.7578 19.6797 20.7203 18.4984 20.7203ZM9.34844 15.7203C8.67969 15.7203 8.14219 16.2641 8.14219 16.9266V18.5703C8.14219 19.2391 8.68594 19.7766 9.34844 19.7766H18.4922C19.1609 19.7766 19.6984 19.2328 19.6984 18.5703V16.9266C19.6984 16.2578 19.1547 15.7203 18.4922 15.7203H9.34844Z" fill="#688137"/>
													<path d="M10.1719 11.3438C9.91563 11.3438 9.70312 11.1312 9.70312 10.875V9.625C9.70312 9.36875 9.91563 9.15625 10.1719 9.15625C10.4281 9.15625 10.6406 9.36875 10.6406 9.625V10.875C10.6406 11.1312 10.4281 11.3438 10.1719 11.3438Z" fill="#688137"/>
													<path d="M12.6719 11.3438C12.4156 11.3438 12.2031 11.1312 12.2031 10.875V9.625C12.2031 9.36875 12.4156 9.15625 12.6719 9.15625C12.9281 9.15625 13.1406 9.36875 13.1406 9.625V10.875C13.1406 11.1312 12.9281 11.3438 12.6719 11.3438Z" fill="#688137"/>
													<path d="M10.1719 18.8438C9.91563 18.8438 9.70312 18.6312 9.70312 18.375V17.125C9.70312 16.8688 9.91563 16.6562 10.1719 16.6562C10.4281 16.6562 10.6406 16.8688 10.6406 17.125V18.375C10.6406 18.6312 10.4281 18.8438 10.1719 18.8438Z" fill="#688137"/>
													<path d="M12.6719 18.8438C12.4156 18.8438 12.2031 18.6312 12.2031 18.375V17.125C12.2031 16.8688 12.4156 16.6562 12.6719 16.6562C12.9281 16.6562 13.1406 16.8688 13.1406 17.125V18.375C13.1406 18.6312 12.9281 18.8438 12.6719 18.8438Z" fill="#688137"/>
													<path d="M17.6719 10.7188H15.1719C14.9156 10.7188 14.7031 10.5062 14.7031 10.25C14.7031 9.99375 14.9156 9.78125 15.1719 9.78125H17.6719C17.9281 9.78125 18.1406 9.99375 18.1406 10.25C18.1406 10.5062 17.9281 10.7188 17.6719 10.7188Z" fill="#688137"/>
													<path d="M17.6719 18.2188H15.1719C14.9156 18.2188 14.7031 18.0062 14.7031 17.75C14.7031 17.4938 14.9156 17.2812 15.1719 17.2812H17.6719C17.9281 17.2812 18.1406 17.4938 18.1406 17.75C18.1406 18.0062 17.9281 18.2188 17.6719 18.2188Z" fill="#688137"/>
												</svg>
												<p>طلب خادم جديد</p>
											</div>
											<ul className="Card__list">
												<li>
													<button onClick={toggleUserInfo}>
								<img src="/images/avatar.png" alt=""/>
								فهد الحربي
							</button>
												</li>
												<li>
													ECA02230
												</li>
												<li>
													22/02/2021  01:15:12 PM
												</li>
											</ul>
										</div>
										<figure>
											<ul className="Card__gallery">
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--acceptable is--checked">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
												<li className="is--pending">
													<img src="/images/avatar.png" alt=""/>
													<span className="checked">
														<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M5.70716 10.9384L16.0584 0.703125L17.4432 2.06314L5.70716 13.5892L0.261719 8.24094L1.5761 6.88093L5.70716 10.9384Z" fill="currentColor"/>
														</svg>
													</span>
												</li>
											</ul>
										</figure>
										<footer className='is--page'>

											<div className='Button__container'>
												<span className="Button Button__small Button__acceptable">
												موافقة
												</span>

												<button type="button" onClick={toggleInfo}  className="Button__hover Button__acceptable">
												عرض
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
														<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
															<path d="M3.332 8.5h9.333"/>
															<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
														</g>
													</svg>
												</span>
												</button>
											</div>

											<button className="Button Button__list">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 4 18"><path fill="currentColor" d="M3.538 14.497H.035V18h3.503v-3.503Zm0-7.248H.035v3.502h3.503V7.25Zm0-7.249H.035v3.503h3.503V0Z"/></svg>
											</button>

										</footer>
									</article>
								</div>
							</div>

						</section>
					</div>
				</section>

			</div>

			<OrderInfo isOpen={isInfoOpen} toggleSidebar={toggleInfo} />
			<SidebarInfo isOpen={isUserInfoOpen} toggleSidebar={toggleUserInfo} />

		</section>
	)
}
export default Orders;
