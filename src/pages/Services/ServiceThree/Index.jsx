import { useState, useRef, useEffect} from 'react';

import SidebarInfo from '../../../components/Fields/UserInfo/SidebarInfo/index';
import ModalSend from './ModalSend';
import ServiceHeader from './ServiceHeader';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import FormActions from './FormActions';

const ServiceThree = () => {

	const stepperRefs = useRef([]);
	const firstStepperRef = useRef(null);
	const secondStepperRef = useRef(null);

	const [showActions, setShowActions] = useState(true);
	const [showSubmit, setShowSubmit] = useState(false);

	const handleNextClick = () => {
		stepperRefs.current.forEach((stepperRef) => {
		  const steps = stepperRef.current.querySelectorAll('li');

		  for (let index = 0; index < steps.length; index++) {
			const step = steps[index];
			if (step.classList.contains('is--active')) {
			  step.classList.remove('is--active');
			  step.classList.add('is--done');

			  if (index + 1 < steps.length) {
				steps[index + 1].classList.add('is--active');
			  }

			  if (stepperRef === secondStepperRef && index === steps.length - 2) {
				setShowActions(false);
				setShowSubmit(true);
			  } else {
				setShowActions(true);
				setShowSubmit(false);
			  }

			  window.scrollTo(0, 0);
			  break;
			}
		  }
		});
	};


	useEffect(() => {
	  stepperRefs.current = [firstStepperRef, secondStepperRef];
	}, [firstStepperRef, secondStepperRef]);

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

	// Handle User Send Request
	const [isSendOpen, setIsSendOpen] = useState(false);
	useEffect(() => {
		if (isSendOpen) {
			document.body.classList.add('u-overflow');
			document.documentElement.classList.add('u-overflow');
		} else {
			document.body.classList.remove('u-overflow');
			document.documentElement.classList.remove('u-overflow');
		}
	}, [isSendOpen]);

	const toggleSend = () => {
		setIsSendOpen(!isSendOpen);
	};

	return (
		<div className='Page'>

			<ServiceHeader/>

			<section className="ServicesItem">
				<form>
					<div className='ServicesItem__top'>
						<div className="container">
							<div className="row flex-md">
							<div className="col-lg-9">
								<div className="ServicesItem__top-container">
									<div className="Stepper">
										<ul className="Stepper__content" ref={firstStepperRef}>
											<StepOne toggleSidebar={toggleInfo}/>
											<StepTwo />
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="ServicesItem__top-container">
									<div className="Stepper">
										<ul className="Stepper__list" ref={secondStepperRef}>
											<li className="Stepper__list-item is--active">
												<span>
														<svg className='show' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 20"><path fill="currentColor" d="M13.248 17.521h-7.72c-3.404 0-4.438-1.034-4.438-4.438V6.907c0-3.404 1.034-4.438 4.438-4.438h7.72c3.404 0 4.438 1.034 4.438 4.438v6.176c0 3.404-1.034 4.438-4.438 4.438ZM5.528 3.627c-2.763 0-3.28.525-3.28 3.28v6.176c0 2.756.517 3.28 3.28 3.28h7.72c2.763 0 3.28-.524 3.28-3.28V6.907c0-2.755-.517-3.28-3.28-3.28h-7.72Z" /><path fill="currentColor" d="M14.79 7.486h-3.86a.583.583 0 0 1-.578-.579c0-.316.262-.579.579-.579h3.86c.316 0 .578.263.578.58a.583.583 0 0 1-.579.578Z" /><path fill="currentColor" fillOpacity=".3" d="M14.792 10.58h-3.088a.583.583 0 0 1-.579-.58c0-.316.262-.578.579-.578h3.088c.316 0 .579.262.579.579a.583.583 0 0 1-.58.579ZM14.79 13.666h-1.543a.583.583 0 0 1-.579-.58c0-.316.262-.578.579-.578h1.544c.316 0 .579.262.579.579a.583.583 0 0 1-.58.579Z" /><path fill="currentColor" d="M6.687 10.03a1.98 1.98 0 0 1-1.976-1.976 1.98 1.98 0 0 1 1.976-1.976 1.98 1.98 0 0 1 1.976 1.976 1.98 1.98 0 0 1-1.976 1.976Zm0-2.794a.824.824 0 0 0-.818.818c0 .448.37.819.818.819.448 0 .818-.371.818-.819a.824.824 0 0 0-.818-.818ZM9.387 13.92a.585.585 0 0 1-.578-.526 1.776 1.776 0 0 0-1.598-1.582c-.355-.03-.71-.03-1.066 0a1.77 1.77 0 0 0-1.598 1.582.574.574 0 0 1-.633.518.58.58 0 0 1-.517-.633 2.915 2.915 0 0 1 2.64-2.617 7.104 7.104 0 0 1 1.282 0 2.936 2.936 0 0 1 2.64 2.617.58.58 0 0 1-.518.633c-.015.007-.038.007-.054.007Z" /></svg>

														<svg className='hide' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M10.875 14.3164L8.02925 11.4706L6.96893 12.5317L10.872 16.4348L19.83 7.52475L19.4873 7.01183C17.8504 4.57924 15.1081 3 11.9961 3C7.02592 3 2.99609 7.02908 2.99609 12C2.99609 16.9709 7.02517 21 11.9961 21C16.9663 21 20.9953 16.9709 20.9961 12.0015H19.4963C19.4963 12.003 19.4963 12.0052 19.4963 12.0075C19.4963 16.1483 16.1399 19.5047 11.9991 19.5047C7.85828 19.5047 4.50184 16.1483 4.50184 12.0075C4.50184 7.86669 7.85828 4.51025 11.9991 4.51025C14.3739 4.51025 16.4908 5.61481 17.8646 7.33728L17.8766 7.35227L10.875 14.3164Z" fill="currentColor"/>
														</svg>

												</span>
												<span>
												معلومات طالب الخدمة
												</span>
											</li>
											<li className='Stepper__list-item'>
												<span>
													<svg className='show'  width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M4.69189 7.58561C4.37986 7.58561 4.12109 7.32685 4.12109 7.01481V5.49268C4.12109 5.18064 4.37986 4.92188 4.69189 4.92188C5.00393 4.92188 5.2627 5.18064 5.2627 5.49268V7.01481C5.2627 7.32685 5.00393 7.58561 4.69189 7.58561Z" fill="currentColor"/>
													<path d="M9.2596 18.0505H6.9764C2.8438 18.0505 1.07812 16.2848 1.07812 12.1522V7.58577C1.07812 3.45318 2.8438 1.6875 6.9764 1.6875H11.5428C15.6754 1.6875 17.4411 3.45318 17.4411 7.58577V9.86898C17.4411 10.181 17.1823 10.4398 16.8703 10.4398C16.5582 10.4398 16.2995 10.181 16.2995 9.86898V7.58577C16.2995 4.07725 15.0513 2.8291 11.5428 2.8291H6.9764C3.46788 2.8291 2.21973 4.07725 2.21973 7.58577V12.1522C2.21973 15.6607 3.46788 16.9089 6.9764 16.9089H9.2596C9.57164 16.9089 9.8304 17.1676 9.8304 17.4797C9.8304 17.7917 9.57164 18.0505 9.2596 18.0505Z" fill="currentColor"/>
													<path d="M7.73486 7.58561C7.42283 7.58561 7.16406 7.32685 7.16406 7.01481V5.49268C7.16406 5.18064 7.42283 4.92188 7.73486 4.92188C8.0469 4.92188 8.30566 5.18064 8.30566 5.49268V7.01481C8.30566 7.32685 8.0469 7.58561 7.73486 7.58561Z" fill="currentColor"/>
													<path d="M4.69189 15.0075C4.37986 15.0075 4.12109 14.7487 4.12109 14.4367V12.9146C4.12109 12.6025 4.37986 12.3438 4.69189 12.3438C5.00393 12.3438 5.2627 12.6025 5.2627 12.9146V14.4367C5.2627 14.7487 5.00393 15.0075 4.69189 15.0075Z" fill="currentColor"/>
													<path d="M7.73486 15.0075C7.42283 15.0075 7.16406 14.7487 7.16406 14.4367V12.9146C7.16406 12.6025 7.42283 12.3438 7.73486 12.3438C8.0469 12.3438 8.30566 12.6025 8.30566 12.9146V14.4367C8.30566 14.7487 8.0469 15.0075 7.73486 15.0075Z" fill="currentColor"/>
													<path d="M13.826 6.82129H10.7817C10.4697 6.82129 10.2109 6.56253 10.2109 6.25049C10.2109 5.93845 10.4697 5.67969 10.7817 5.67969H13.826C14.138 5.67969 14.3968 5.93845 14.3968 6.25049C14.3968 6.56253 14.138 6.82129 13.826 6.82129Z" fill="currentColor"/>
													<path d="M16.8703 10.4385H1.64893C1.33689 10.4385 1.07812 10.1797 1.07812 9.86768C1.07812 9.55564 1.33689 9.29688 1.64893 9.29688H16.8703C17.1823 9.29688 17.4411 9.55564 17.4411 9.86768C17.4411 10.1797 17.1823 10.4385 16.8703 10.4385Z" fill="currentColor"/>
													<path d="M12.1953 16.0654V17.481V16.0654Z" fill="currentColor"/>
													<path d="M16.5334 16.21C16.1072 16.9482 15.3081 17.4429 14.3948 17.4429C13.0325 17.4429 12.1953 16.073 12.1953 16.073M12.2486 13.7441C12.6748 12.9983 13.4739 12.5036 14.3948 12.5036C16.0463 12.5036 16.8683 13.8735 16.8683 13.8735M16.8683 12.3438V13.8659H15.3461M13.7174 16.0654H12.1953V17.481" stroke="currentColor" strokeWidth="0.782813" strokeLinecap="round" strokeLinejoin="round"/>
													</svg>

													<svg className='hide' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M10.875 14.3164L8.02925 11.4706L6.96893 12.5317L10.872 16.4348L19.83 7.52475L19.4873 7.01183C17.8504 4.57924 15.1081 3 11.9961 3C7.02592 3 2.99609 7.02908 2.99609 12C2.99609 16.9709 7.02517 21 11.9961 21C16.9663 21 20.9953 16.9709 20.9961 12.0015H19.4963C19.4963 12.003 19.4963 12.0052 19.4963 12.0075C19.4963 16.1483 16.1399 19.5047 11.9991 19.5047C7.85828 19.5047 4.50184 16.1483 4.50184 12.0075C4.50184 7.86669 7.85828 4.51025 11.9991 4.51025C14.3739 4.51025 16.4908 5.61481 17.8646 7.33728L17.8766 7.35227L10.875 14.3164Z" fill="currentColor"/>
														</svg>
												</span>
												<span>
												بيانات خدمة الوصول للشبكة
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							</div>
						</div>
					</div>
					<FormActions handleClick={handleNextClick} FormShowActions={showActions} FormShowSubmit={showSubmit} FormToggleSend={toggleSend} />
				</form>
			</section>

			<SidebarInfo isOpen={isInfoOpen} toggleSidebar={toggleInfo} />
			<ModalSend isOpen={isSendOpen} toggleModal={toggleSend} />

		</div>
	);

};

export default ServiceThree;
