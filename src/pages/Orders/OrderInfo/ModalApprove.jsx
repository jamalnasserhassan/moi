import { Link } from "react-router-dom";

const ModalApprove = ({ OpenApprove, ApproveModal }) => {
	return (
		<aside className={`Modal Modal__Send ${OpenApprove ? 'is--open' : ''}`}>
		  <div className="Modal__overlay" onClick={ApproveModal}></div>
			<div className="Modal__content with--close">
				<div className="Modal__content-close">
					<button type="button" className="Button Button__burger" onClick={ApproveModal}>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.3751 15.2103L8 9.8352L2.62492 15.2103C2.23863 15.5966 1.61239 15.5966 1.22676 15.2103L0.789717 14.7732C0.403428 14.3869 0.403428 13.7607 0.789717 13.3751L6.1648 8L0.789717 2.62492C0.403428 2.23863 0.403428 1.61239 0.789717 1.22676L1.22676 0.789717C1.61305 0.403428 2.23929 0.403428 2.62492 0.789717L8 6.1648L13.3751 0.789717C13.7614 0.403428 14.3876 0.403428 14.7732 0.789717L15.2103 1.22676C15.5966 1.61305 15.5966 2.23929 15.2103 2.62492L9.8352 8L15.2103 13.3751C15.5966 13.7614 15.5966 14.3876 15.2103 14.7732L14.7732 15.2103C14.3869 15.5966 13.7607 15.5966 13.3751 15.2103Z" fill="#A0A0A5"/>
						</svg>
					</button>
				</div>
				<div className="Modal__content-container">
					<div className="Modal__content-header">
						<div className="icon is--small">
							<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="60" height="60" rx="30" fill="#E9FFF9"/>
							<path d="M28.257 34.118L23.1978 29.0588L21.3128 30.9452L28.2517 37.884L44.177 22.044L43.5678 21.1321C40.6576 16.8075 35.7824 14 30.25 14C21.4141 14 14.25 21.1628 14.25 30C14.25 38.8372 21.4128 46 30.25 46C39.0859 46 46.2487 38.8372 46.25 30.0027H43.5838C43.5838 30.0053 43.5838 30.0093 43.5838 30.0133C43.5838 37.3748 37.6168 43.3418 30.2553 43.3418C22.8939 43.3418 16.9269 37.3748 16.9269 30.0133C16.9269 22.6519 22.8939 16.6849 30.2553 16.6849C34.4773 16.6849 38.2407 18.6486 40.6829 21.7107L40.7043 21.7374L28.257 34.118Z" fill="#00C48C"/>
							</svg>
						</div>
						<strong className="title">تم تنفيذ الاجراء (الموافقة) بنجاح </strong>
						<p className="desc">
							تم أرسال طلبك بنحاح وجاري معالجتة من قبل الادارة المعنية
							<br />
							رقم الطلب:
							<strong>#666655-65555</strong>
						</p>
					</div>
					<div className="Modal__content-body">
						<ul className="Modal__content-list">
							<li>
								<span className="avatar">
									<img src="/images/avatar.png" />
									<p>أحمد الحارثي</p>
								</span>
								<span className="label is--approve">
								موافقة
								</span>
							</li>
						</ul>
					</div>
					<div className="Modal__content-footer">
						<button type="button" className="Button Button__secondary Button__form Button__outline Button__arrow" onClick={ApproveModal}>
						أغلاق
							
						</button>
						<Link to='/orders' className="Button Button__secondary Button__form Button__arrow">
						الذهاب الي جميع الطلبت
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
		  </div>
		</aside>
	  );
};
export default ModalApprove;
