import { Link } from "react-router-dom";

const ModalSend = ({ isOpen, toggleModal }) => {
	return (
		<aside className={`Modal Modal__Send ${isOpen ? 'is--open' : ''}`}>
		  <div className="Modal__overlay" onClick={toggleModal}></div>
			<div className="Modal__content">
				<div className="Modal__content-header">
					<div className="icon">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 80 79"><g clipPath="url(#modalSend)"><path fill="#8E9AA0" d="M60.977 4.1 2.388 23.248a2.022 2.022 0 0 0-.39 3.667L24.141 39.79a2.02 2.02 0 0 0 2.22-.124l6.224-4.622-4.622 6.224a2.022 2.022 0 0 0-.125 2.22l12.875 22.14a2.022 2.022 0 0 0 3.666-.387L63.525 6.65A2.022 2.022 0 0 0 60.977 4.1ZM41.94 59.7l-9.942-17.093 11.988-16.138a2.02 2.02 0 0 0-2.828-2.827L25.021 35.628 7.93 25.688 58.447 9.182 41.94 59.7ZM22.21 48.276 8.796 61.69a2.022 2.022 0 0 1-2.86-2.857l13.415-13.415a2.02 2.02 0 1 1 2.857 2.857Zm-17.723.508a2.02 2.02 0 0 1 0-2.857l5.293-5.293a2.02 2.02 0 1 1 2.857 2.857l-5.292 5.293a2.02 2.02 0 0 1-2.858 0Zm22.51 6.206a2.02 2.02 0 0 1 0 2.857l-5.3 5.294a2.02 2.02 0 0 1-2.857-2.857l5.294-5.293a2.018 2.018 0 0 1 2.857 0l.006-.001Z" /><path fill="#00C48C" d="M58.996 79.313c11.046 0 20-8.955 20-20 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 11.045 8.954 20 20 20Z" /><path fill="#fff" d="m57.875 61.316-2.846-2.845-1.06 1.06 3.903 3.904 8.958-8.91-.343-.513C64.85 51.579 62.108 50 58.997 50a9 9 0 1 0 9 9.002h-1.5v.005a7.497 7.497 0 1 1-14.995 0 7.497 7.497 0 0 1 13.363-4.67l.012.015-7.002 6.964Z" /></g><defs><clipPath id="modalSend"><path fill="#fff" d="M0 0h79v79H0z" transform="translate(.496)" /></clipPath></defs></svg>
					</div>
					<strong className="title">تم الإرسال وبانتظار الموافقة</strong>
					<p className="desc">تم أرسال طلبك بنحاح وجاري معالجتة من قبل الادارة المعنية </p>
				</div>
				<div className="Modal__content-body">
					<ul className="Modal__content-list">
						<li>
							<span>رقم الطلب</span>
							<span className="number">٣٧٩٥٧</span>
						</li>
						<li>
							<span className="avatar">
								<img src="/images/avatar.png" />
								<p>أحمد الحارثي</p>
							</span>
							<span className="label is--pending">
							جاري المعالجة
							</span>
						</li>
					</ul>
				</div>
				<div className="Modal__content-footer">
					<Link to='/orders' className="Button Button__secondary Button__form Button__outline Button__arrow">
					متابعة الطلب
						<span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
								<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M3.332 8.5h9.333"/>
									<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
								</g>
								</svg>
							</span>
					</Link>
					<Link to='/orders' className="Button Button__secondary Button__form Button__arrow">
						جميع الطلبات
						<span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
								<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M3.332 8.5h9.333"/>
									<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
								</g>
								</svg>
							</span>
					</Link>
				</div>
		  </div>
		</aside>
	  );
};
export default ModalSend;
