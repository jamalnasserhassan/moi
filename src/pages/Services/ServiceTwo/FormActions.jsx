

const FormActions = ({handleClick, FormShowActions, FormShowSubmit, FormToggleSend}) => {
	return (
		<div className='ServicesItem__bottom'>
			{FormShowActions && (
				<div className='ServicesItem__bottom-actions'>
					<div className='ServicesItem__actions-item'>
						<button type="button" className="Button Button__danger Button__outline Button__form Button__arrow">
						الغاء
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
					<div className='ServicesItem__actions-item'>
						<button type="button" className="Button Button__secondary Button__form Button__arrow Button__next" onClick={handleClick}>
						التالي
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
			)}
			{FormShowSubmit && (
				<div className='ServicesItem__bottom-actions'>
					<div className='ServicesItem__actions-item'>
						<button type="button" className="Button Button__danger Button__outline Button__form Button__arrow">
						الغاء
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

					<div className='ServicesItem__actions-item'>
						<button className="Button Button__back Button__secondary">
							<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9.4439 4.21807C9.40821 4.12601 9.35468 4.0419 9.2864 3.97057L5.53641 0.220569C5.46648 0.15064 5.38346 0.0951694 5.29209 0.0573242C5.20073 0.0194789 5.1028 0 5.00391 0C4.80418 0 4.61263 0.079341 4.47141 0.220569C4.40148 0.290498 4.34601 0.373515 4.30816 0.464882C4.27032 0.556248 4.25084 0.654174 4.25084 0.753069C4.25084 0.952795 4.33018 1.14434 4.47141 1.28557L6.94641 3.75307H1.25391C1.05499 3.75307 0.864229 3.83209 0.723576 3.97274C0.582924 4.11339 0.503906 4.30416 0.503906 4.50307C0.503906 4.70198 0.582924 4.89275 0.723576 5.0334C0.864229 5.17405 1.05499 5.25307 1.25391 5.25307H6.94641L4.47141 7.72057C4.40111 7.79029 4.34531 7.87324 4.30724 7.96464C4.26916 8.05603 4.24956 8.15406 4.24956 8.25307C4.24956 8.35208 4.26916 8.45011 4.30724 8.5415C4.34531 8.6329 4.40111 8.71585 4.47141 8.78557C4.54113 8.85586 4.62408 8.91166 4.71547 8.94974C4.80687 8.98781 4.9049 9.00742 5.00391 9.00742C5.10291 9.00742 5.20094 8.98781 5.29234 8.94974C5.38373 8.91166 5.46668 8.85586 5.53641 8.78557L9.2864 5.03557C9.35468 4.96424 9.40821 4.88013 9.4439 4.78807C9.51892 4.60547 9.51892 4.40067 9.4439 4.21807Z" fill="currentColor"/>
							</svg>

						</button>
						<button type="button" className="Button Button__secondary Button__default Button__loading" onClick={FormToggleSend}>
							<span className='text'>
								إرسال
							</span>
							<span className='icon'>
								<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.36812 16.58C8.2354 16.58 9.46282 15.97 10.433 13.0521L10.9622 11.4645L12.5497 10.9354C15.4603 9.96518 16.0703 8.73776 16.0703 7.87048C16.0703 7.01055 15.4603 5.77578 12.5497 4.79825L6.30975 2.71825C4.75158 2.19641 3.45067 2.35076 2.64953 3.14454C1.8484 3.93832 1.69406 5.24659 2.21589 6.80475L4.29589 13.0448C5.27342 15.97 6.50084 16.58 7.36812 16.58ZM12.2043 5.84927C14.2476 6.53281 14.9752 7.34129 14.9752 7.87048C14.9752 8.39966 14.2476 9.20814 12.2043 9.88433L10.3521 10.5017C10.1905 10.5532 10.0582 10.6855 10.0067 10.8472L9.38932 12.6993C8.71314 14.7426 7.89731 15.4702 7.36812 15.4702C6.83893 15.4702 6.03045 14.7426 5.34692 12.6993L3.26692 6.45931C2.89208 5.32744 2.95823 4.40136 3.43597 3.92362C3.9137 3.44588 4.83978 3.38708 5.9643 3.76192L12.2043 5.84927Z" fill="currentColor"/>
								<path d="M10.3881 11.2627C10.5277 11.2627 10.6674 11.2112 10.7776 11.101C10.9908 10.8878 10.9908 10.535 10.7776 10.3219L8.1464 7.6833C7.93326 7.47015 7.58047 7.47015 7.36732 7.6833C7.15418 7.89644 7.15418 8.24923 7.36732 8.46238L9.99856 11.101C10.1015 11.2112 10.2485 11.2627 10.3881 11.2627Z" fill="currentColor"/>
								</svg>
							</span>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};
export default FormActions;
