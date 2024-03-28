import { useState, useRef, useEffect} from 'react';

import SidebarInfo from '../../../components/Fields/UserInfo/SidebarInfo/index';
import ModalSend from './ModalSend';
import ServiceHeader from './ServiceHeader';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import FormActions from './FormActions';

const ServiceOne = () => {

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
														<svg className='show' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 20"><path fill="currentColor" d="M15.039 9.029H3.745A2.652 2.652 0 0 1 1.098 6.38v-2.03a2.652 2.652 0 0 1 2.647-2.648H15.04a2.652 2.652 0 0 1 2.647 2.648v2.03a2.652 2.652 0 0 1-2.647 2.648ZM3.738 2.853a1.49 1.49 0 0 0-1.49 1.49v2.03c0 .826.671 1.49 1.49 1.49H15.03a1.49 1.49 0 0 0 1.49-1.49v-2.03a1.49 1.49 0 0 0-1.49-1.49H3.738ZM15.039 18.294H3.745a2.652 2.652 0 0 1-2.647-2.647v-2.03a2.652 2.652 0 0 1 2.647-2.648H15.04a2.652 2.652 0 0 1 2.647 2.648v2.03a2.652 2.652 0 0 1-2.647 2.647ZM3.738 12.12a1.49 1.49 0 0 0-1.49 1.49v2.03c0 .826.671 1.49 1.49 1.49H15.03a1.49 1.49 0 0 0 1.49-1.49v-2.03a1.49 1.49 0 0 0-1.49-1.49H3.738Z" /><path fill="currentColor" fillOpacity=".3" d="M4.755 6.717a.583.583 0 0 1-.58-.579V4.595c0-.317.263-.58.58-.58.316 0 .579.263.579.58v1.543a.583.583 0 0 1-.58.58ZM7.845 6.717a.583.583 0 0 1-.58-.579V4.595c0-.317.263-.58.58-.58.316 0 .579.263.579.58v1.543a.583.583 0 0 1-.58.58Z" /><path fill="currentColor" d="M4.755 15.983a.583.583 0 0 1-.58-.579V13.86c0-.316.263-.579.58-.579.316 0 .579.263.579.58v1.543a.583.583 0 0 1-.58.579ZM7.845 15.983a.583.583 0 0 1-.58-.579V13.86c0-.316.263-.579.58-.579.316 0 .579.263.579.58v1.543a.583.583 0 0 1-.58.579Z" /><path fill="currentColor" d="M14.018 5.947H10.93a.583.583 0 0 1-.578-.579c0-.316.262-.579.579-.579h3.087c.317 0 .58.263.58.579a.583.583 0 0 1-.58.579ZM14.018 15.205H10.93a.583.583 0 0 1-.578-.58c0-.316.262-.578.579-.578h3.087c.317 0 .58.262.58.579a.583.583 0 0 1-.58.579Z" /></svg>

														<svg className='hide' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M10.875 14.3164L8.02925 11.4706L6.96893 12.5317L10.872 16.4348L19.83 7.52475L19.4873 7.01183C17.8504 4.57924 15.1081 3 11.9961 3C7.02592 3 2.99609 7.02908 2.99609 12C2.99609 16.9709 7.02517 21 11.9961 21C16.9663 21 20.9953 16.9709 20.9961 12.0015H19.4963C19.4963 12.003 19.4963 12.0052 19.4963 12.0075C19.4963 16.1483 16.1399 19.5047 11.9991 19.5047C7.85828 19.5047 4.50184 16.1483 4.50184 12.0075C4.50184 7.86669 7.85828 4.51025 11.9991 4.51025C14.3739 4.51025 16.4908 5.61481 17.8646 7.33728L17.8766 7.35227L10.875 14.3164Z" fill="currentColor"/>
														</svg>
												</span>
												<span>
												بيانات الخادم
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
export default ServiceOne;
