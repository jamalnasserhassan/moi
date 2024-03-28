import TextareaField from '../../../components/Fields/TextareaField/Index';

const ModalCancel = ({ OpenCancel, CancelModal }) => {
	return (
		<aside className={`Modal Modal__Send ${OpenCancel ? 'is--open' : ''}`}>
		  <div className="Modal__overlay" onClick={CancelModal}></div>
			<div className="Modal__content with--close">
				<div className="Modal__content-close">
					<button type="button" className="Button Button__burger" onClick={CancelModal}>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.3751 15.2103L8 9.8352L2.62492 15.2103C2.23863 15.5966 1.61239 15.5966 1.22676 15.2103L0.789717 14.7732C0.403428 14.3869 0.403428 13.7607 0.789717 13.3751L6.1648 8L0.789717 2.62492C0.403428 2.23863 0.403428 1.61239 0.789717 1.22676L1.22676 0.789717C1.61305 0.403428 2.23929 0.403428 2.62492 0.789717L8 6.1648L13.3751 0.789717C13.7614 0.403428 14.3876 0.403428 14.7732 0.789717L15.2103 1.22676C15.5966 1.61305 15.5966 2.23929 15.2103 2.62492L9.8352 8L15.2103 13.3751C15.5966 13.7614 15.5966 14.3876 15.2103 14.7732L14.7732 15.2103C14.3869 15.5966 13.7607 15.5966 13.3751 15.2103Z" fill="#A0A0A5"/>
						</svg>
					</button>
				</div>
				<div className="Modal__content-container">
					<div className="Modal__content-header">
						<div className="icon is--small">
							<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="60" height="60" rx="30" fill="#FFF8F8"/>
							<path d="M36.1381 29.9362C35.9441 29.9362 35.7502 29.8647 35.597 29.7116C35.301 29.4156 35.301 28.9256 35.597 28.6295L38.8535 25.3731L35.597 22.1166C35.301 21.8206 35.301 21.3306 35.597 21.0345C35.8931 20.7385 36.3831 20.7385 36.6791 21.0345L40.4766 24.8321C40.6196 24.975 40.7012 25.1689 40.7012 25.3731C40.7012 25.5772 40.6196 25.7712 40.4766 25.9141L36.6791 29.7116C36.526 29.8545 36.3321 29.9362 36.1381 29.9362Z" fill="#F05642"/>
							<path d="M39.9375 26.1406H21.5625C21.144 26.1406 20.7969 25.7935 20.7969 25.375C20.7969 24.9565 21.144 24.6094 21.5625 24.6094H39.9375C40.356 24.6094 40.7031 24.9565 40.7031 25.375C40.7031 25.7935 40.356 26.1406 39.9375 26.1406Z" fill="#F05642"/>
							<path d="M25.36 40.7018C25.166 40.7018 24.9721 40.6304 24.819 40.4772L21.0214 36.6797C20.8785 36.5368 20.7969 36.3429 20.7969 36.1387C20.7969 35.9345 20.8785 35.7405 21.0214 35.5976L24.819 31.8002C25.115 31.5041 25.605 31.5041 25.901 31.8002C26.1971 32.0962 26.1971 32.5862 25.901 32.8822L22.6446 36.1387L25.901 39.3951C26.1971 39.6911 26.1971 40.1812 25.901 40.4772C25.7581 40.6304 25.5641 40.7018 25.36 40.7018Z" fill="#F05642"/>
							<path d="M39.9375 36.8906H21.5625C21.144 36.8906 20.7969 36.5435 20.7969 36.125C20.7969 35.7065 21.144 35.3594 21.5625 35.3594H39.9375C40.356 35.3594 40.7031 35.7065 40.7031 36.125C40.7031 36.5435 40.356 36.8906 39.9375 36.8906Z" fill="#F05642"/>
							</svg>
						</div>
						<strong className="title"> رجاء توضيح سبب الالغاء </strong>
					</div>
					<div className="Modal__content-body">
						<TextareaField placeholder="برجاء كتابه سبب الالغاء" />
					</div>
					<div className="Modal__content-footer">
						<button className="Button Button__secondary Button__form Button__arrow">
						إرسال
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
				</div>
		  </div>
		</aside>
	  );
};
export default ModalCancel;
