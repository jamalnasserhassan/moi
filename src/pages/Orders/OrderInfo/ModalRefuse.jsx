import TextareaField from '../../../components/Fields/TextareaField/Index';

const ModalRefuse = ({ OpenRefuse, RefuseModal }) => {
	return (
		<aside className={`Modal Modal__Send ${OpenRefuse ? 'is--open' : ''}`}>
		  <div className="Modal__overlay" onClick={RefuseModal}></div>
			<div className="Modal__content with--close">
				<div className="Modal__content-close">
					<button type="button" className="Button Button__burger" onClick={RefuseModal}>
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
								<path d="M36.7564 39.2339L29.5 31.9775L22.2436 39.2339C21.7221 39.7554 20.8767 39.7554 20.3561 39.2339L19.7661 38.6439C19.2446 38.1224 19.2446 37.277 19.7661 36.7564L27.0225 29.5L19.7661 22.2436C19.2446 21.7221 19.2446 20.8767 19.7661 20.3561L20.3561 19.7661C20.8776 19.2446 21.723 19.2446 22.2436 19.7661L29.5 27.0225L36.7564 19.7661C37.2779 19.2446 38.1233 19.2446 38.6439 19.7661L39.2339 20.3561C39.7554 20.8776 39.7554 21.723 39.2339 22.2436L31.9775 29.5L39.2339 36.7564C39.7554 37.2779 39.7554 38.1233 39.2339 38.6439L38.6439 39.2339C38.1224 39.7554 37.277 39.7554 36.7564 39.2339Z" fill="#DE346D"/>
							</svg>
						</div>
						<strong className="title"> رجاء توضيح سبب الرفض </strong>
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
export default ModalRefuse;
