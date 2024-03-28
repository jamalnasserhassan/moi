import { useState, useRef, useEffect} from 'react';

import SidebarInfo from '../../../components/Fields/UserInfo/SidebarInfo/index';
import ModalSend from './ModalSend';
import ServiceHeader from './ServiceHeader';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import FormActions from './FormActions';

const ServiceTwo = () => {

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
											<StepTwo/>
											<StepThree/>
											<StepFour/>
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
													<svg className='show' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M6.12495 5.04655C5.81748 5.04655 5.5625 4.79157 5.5625 4.4841V2.23432C5.5625 1.92685 5.81748 1.67188 6.12495 1.67188C6.43242 1.67188 6.68739 1.92685 6.68739 2.23432V4.4841C6.68739 4.79157 6.43242 5.04655 6.12495 5.04655Z" fill="currentColor"/>
													<path d="M12.1249 5.04655C11.8175 5.04655 11.5625 4.79157 11.5625 4.4841V2.23432C11.5625 1.92685 11.8175 1.67188 12.1249 1.67188C12.4324 1.67188 12.6874 1.92685 12.6874 2.23432V4.4841C12.6874 4.79157 12.4324 5.04655 12.1249 5.04655Z" fill="currentColor"/>
													<path d="M6.49993 11.6055C6.40244 11.6055 6.30494 11.583 6.21495 11.5455C6.11746 11.508 6.04248 11.4555 5.96749 11.388C5.8325 11.2455 5.75 11.0505 5.75 10.8556C5.75 10.6606 5.8325 10.4656 5.96749 10.3231C6.04248 10.2556 6.12496 10.2031 6.21495 10.1656C6.39493 10.0906 6.60492 10.0906 6.7849 10.1656C6.87489 10.2031 6.95738 10.2556 7.03237 10.3231C7.06237 10.3606 7.09986 10.3981 7.12236 10.4356C7.15235 10.4806 7.17487 10.5256 7.18987 10.5706C7.21237 10.6156 7.22737 10.6606 7.23486 10.7056C7.24236 10.7581 7.24985 10.8106 7.24985 10.8556C7.24985 11.0505 7.16736 11.2455 7.03237 11.388C6.95738 11.4555 6.87489 11.508 6.7849 11.5455C6.69491 11.583 6.59742 11.6055 6.49993 11.6055Z" fill="currentColor"/>
													<path d="M9.12493 11.6077C9.02744 11.6077 8.92994 11.5852 8.83995 11.5477C8.74246 11.5102 8.66748 11.4577 8.59249 11.3902C8.4575 11.2477 8.375 11.0527 8.375 10.8577C8.375 10.8127 8.38249 10.7602 8.38999 10.7077C8.39749 10.6627 8.41249 10.6178 8.43498 10.5728C8.44998 10.5278 8.4725 10.4828 8.5025 10.4378C8.53249 10.4003 8.56249 10.3628 8.59249 10.3253C8.86996 10.0478 9.3724 10.0478 9.65737 10.3253C9.68737 10.3628 9.71736 10.4003 9.74736 10.4378C9.77735 10.4828 9.79987 10.5278 9.81487 10.5728C9.83737 10.6178 9.85237 10.6627 9.85986 10.7077C9.86736 10.7602 9.87485 10.8127 9.87485 10.8577C9.87485 11.0527 9.79236 11.2477 9.65737 11.3902C9.51488 11.5252 9.32741 11.6077 9.12493 11.6077Z" fill="currentColor"/>
													<path d="M6.49993 14.2305C6.40244 14.2305 6.30494 14.208 6.21495 14.1705C6.12496 14.133 6.04248 14.0805 5.96749 14.013C5.8325 13.8705 5.75 13.6755 5.75 13.4806C5.75 13.4356 5.75749 13.3831 5.76499 13.3381C5.77249 13.2856 5.78749 13.2406 5.80998 13.1956C5.82498 13.1506 5.8475 13.1056 5.8775 13.0606C5.9 13.0231 5.93749 12.9856 5.96749 12.9481C6.04248 12.8806 6.12496 12.8281 6.21495 12.7906C6.39493 12.7156 6.60492 12.7156 6.7849 12.7906C6.87489 12.8281 6.95738 12.8806 7.03237 12.9481C7.06237 12.9856 7.09986 13.0231 7.12236 13.0606C7.15235 13.1056 7.17487 13.1506 7.18987 13.1956C7.21237 13.2406 7.22737 13.2856 7.23486 13.3381C7.24236 13.3831 7.24985 13.4356 7.24985 13.4806C7.24985 13.6755 7.16736 13.8705 7.03237 14.013C6.95738 14.0805 6.87489 14.133 6.7849 14.1705C6.69491 14.208 6.59742 14.2305 6.49993 14.2305Z" fill="currentColor"/>
													<path d="M15.4987 8.11708H2.74995C2.44248 8.11708 2.1875 7.8621 2.1875 7.55463C2.1875 7.24716 2.44248 6.99219 2.74995 6.99219H15.4987C15.8062 6.99219 16.0612 7.24716 16.0612 7.55463C16.0612 7.8621 15.8062 8.11708 15.4987 8.11708Z" fill="currentColor"/>
													<path d="M11.9896 17.816C11.7046 17.816 11.4346 17.7111 11.2396 17.5161C11.0072 17.2836 10.9022 16.9461 10.9547 16.5937L11.0972 15.5812C11.1347 15.3188 11.2921 15.0038 11.4796 14.8163L14.1344 12.1616C14.4943 11.8016 14.8468 11.6141 15.2293 11.5766C15.7017 11.5316 16.1592 11.7266 16.5941 12.1616C17.0516 12.619 17.6665 13.5489 16.5941 14.6213L13.9394 17.2761C13.7519 17.4636 13.4369 17.6211 13.1745 17.6586L12.162 17.8011C12.102 17.8085 12.0496 17.816 11.9896 17.816ZM15.3567 12.694C15.3492 12.694 15.3417 12.694 15.3342 12.694C15.2293 12.7015 15.0868 12.799 14.9293 12.9565L12.2746 15.6113C12.2521 15.6338 12.2145 15.7088 12.2145 15.7388L12.0796 16.6762L13.017 16.5412C13.047 16.5337 13.1219 16.4962 13.1444 16.4737L15.7992 13.8189C16.1292 13.489 16.1742 13.324 15.7992 12.949C15.6792 12.8365 15.5067 12.694 15.3567 12.694Z" fill="currentColor"/>
													<path d="M15.8152 15.1703C15.7627 15.1703 15.7102 15.1628 15.6652 15.1478C14.6753 14.8704 13.8879 14.0829 13.6104 13.093C13.5279 12.7931 13.7004 12.4856 14.0004 12.3956C14.3004 12.3131 14.6078 12.4856 14.6978 12.7856C14.8703 13.4005 15.3578 13.8879 15.9727 14.0604C16.2727 14.1429 16.4451 14.4579 16.3627 14.7579C16.2877 15.0054 16.0627 15.1703 15.8152 15.1703Z" fill="currentColor"/>
													<path d="M9.12429 17.7954H6.12458C3.38735 17.7954 1.8125 16.2206 1.8125 13.4833V7.10896C1.8125 4.37172 3.38735 2.79688 6.12458 2.79688H12.124C14.8612 2.79688 16.4361 4.37172 16.4361 7.10896V9.7337C16.4361 10.0412 16.1811 10.2961 15.8736 10.2961C15.5662 10.2961 15.3112 10.0412 15.3112 9.7337V7.10896C15.3112 4.96417 14.2688 3.92177 12.124 3.92177H6.12458C3.97979 3.92177 2.93739 4.96417 2.93739 7.10896V13.4833C2.93739 15.6281 3.97979 16.6705 6.12458 16.6705H9.12429C9.43176 16.6705 9.68674 16.9255 9.68674 17.233C9.68674 17.5404 9.43176 17.7954 9.12429 17.7954Z" fill="currentColor"/>
													</svg>


														<svg className='hide' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M10.875 14.3164L8.02925 11.4706L6.96893 12.5317L10.872 16.4348L19.83 7.52475L19.4873 7.01183C17.8504 4.57924 15.1081 3 11.9961 3C7.02592 3 2.99609 7.02908 2.99609 12C2.99609 16.9709 7.02517 21 11.9961 21C16.9663 21 20.9953 16.9709 20.9961 12.0015H19.4963C19.4963 12.003 19.4963 12.0052 19.4963 12.0075C19.4963 16.1483 16.1399 19.5047 11.9991 19.5047C7.85828 19.5047 4.50184 16.1483 4.50184 12.0075C4.50184 7.86669 7.85828 4.51025 11.9991 4.51025C14.3739 4.51025 16.4908 5.61481 17.8646 7.33728L17.8766 7.35227L10.875 14.3164Z" fill="currentColor"/>
														</svg>
												</span>
												<span>
												معلومات الزيارة
												</span>
											</li>
											<li className='Stepper__list-item'>
												<span>
														<svg className='show' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M14.9598 10.1744L14.0532 9.53438C14.1065 9.05438 14.1065 8.57438 14.0532 8.09438L14.9598 7.45438C15.6532 6.97438 15.8665 6.06771 15.4398 5.32105L14.8532 4.25438C14.4265 3.50771 13.5198 3.24104 12.7732 3.61437L11.7598 4.09438C11.3865 3.77438 10.9598 3.56104 10.4798 3.34771L10.3732 2.22771C10.3198 1.37438 9.6265 0.734375 8.77316 0.734375H7.54649C6.69315 0.734375 5.99982 1.37438 5.94649 2.22771L5.89315 3.34771C5.46649 3.56104 5.03982 3.77438 4.61315 4.09438L3.59982 3.61437C2.85316 3.24104 1.94649 3.56105 1.51983 4.25438L0.879821 5.26771C0.453154 6.01438 0.666484 6.92104 1.35982 7.40104L2.31983 8.04104C2.26649 8.52104 2.26649 9.00104 2.31983 9.48104L1.41315 10.121C0.719821 10.601 0.506491 11.5077 0.933158 12.2544L1.51983 13.321C1.94649 14.0677 2.85316 14.3344 3.59982 13.961L4.61315 13.481C4.98649 13.801 5.41315 14.0144 5.89315 14.2277L5.99983 15.3477C6.05316 16.201 6.74649 16.841 7.59982 16.841H8.82648C9.67982 16.841 10.3732 16.201 10.4265 15.3477L10.4798 14.2277C10.9065 14.0144 11.3332 13.801 11.7598 13.481L12.7732 13.961C13.5198 14.3344 14.4265 14.0677 14.8532 13.321L15.4398 12.2544C15.8665 11.6144 15.6532 10.6544 14.9598 10.1744ZM14.5332 11.7744L13.9465 12.841C13.7865 13.1077 13.5198 13.161 13.2532 13.0544L11.9732 12.4144C11.7598 12.3077 11.5465 12.361 11.3865 12.4677C10.9598 12.841 10.4265 13.161 9.83983 13.3744C9.6265 13.4277 9.51982 13.641 9.46649 13.8544L9.35982 15.2944C9.35982 15.561 9.09315 15.7744 8.82648 15.7744H7.59982C7.33316 15.7744 7.06649 15.561 7.06649 15.2944L6.95982 13.8544C6.95982 13.641 6.79983 13.481 6.58649 13.3744C6.05316 13.161 5.51983 12.8944 5.03983 12.4677C4.93316 12.361 4.82649 12.361 4.71983 12.361C4.66649 12.361 4.55983 12.4144 4.5065 12.4144L3.22648 13.0544C2.95982 13.161 2.69316 13.1077 2.53316 12.841L1.94649 11.7744C1.78649 11.5077 1.89316 11.241 2.1065 11.081L3.27982 10.281C3.43982 10.1744 3.54648 9.96104 3.49315 9.74771C3.38648 9.16104 3.38648 8.57438 3.49315 7.98771C3.54648 7.77438 3.43982 7.56105 3.27982 7.45438L2.1065 6.65438C1.89316 6.49438 1.78649 6.17438 1.94649 5.96104L2.53316 4.89438C2.69316 4.62771 2.95982 4.57437 3.22648 4.68104L4.5065 5.32105C4.71983 5.42771 4.93315 5.37438 5.09315 5.26771C5.51982 4.89438 6.05316 4.57438 6.63983 4.36104C6.85316 4.30771 6.95982 4.09437 7.01315 3.88104L7.11983 2.44104C7.11983 2.17437 7.38649 1.96104 7.65316 1.96104H8.87982C9.14649 1.96104 9.41315 2.17437 9.41315 2.44104L9.51983 3.88104C9.51983 4.09437 9.67982 4.30771 9.89315 4.36104C10.4265 4.57438 10.9598 4.84104 11.4398 5.21437C11.5998 5.37437 11.8132 5.37438 12.0265 5.26771L13.3065 4.62771C13.5732 4.52104 13.8398 4.57437 13.9998 4.84104L14.5865 5.90771C14.7465 6.17437 14.6398 6.44104 14.4265 6.60104L13.2532 7.40104C13.0932 7.50771 12.9865 7.72104 13.0398 7.93438C13.1465 8.52104 13.1465 9.10771 13.0398 9.69438C12.9865 9.90771 13.0932 10.121 13.2532 10.2277L14.4265 11.0277C14.5865 11.241 14.6398 11.561 14.5332 11.7744ZM10.9065 11.5077V12.041H9.83983V11.5077C9.83983 11.1877 9.6265 10.9744 9.3065 10.9744H7.17316C6.85316 10.9744 6.63983 11.1877 6.63983 11.5077V12.041H5.57316V11.5077C5.57316 10.601 6.2665 9.90771 7.17316 9.90771H9.3065C10.1598 9.90771 10.9065 10.601 10.9065 11.5077ZM8.18649 9.37437C9.35983 9.37437 10.3198 8.41437 10.3198 7.24104C10.3198 6.06771 9.35983 5.10771 8.18649 5.10771C7.01316 5.10771 6.05316 6.06771 6.05316 7.24104C6.05316 8.41437 7.01316 9.37437 8.18649 9.37437ZM8.18649 6.17437C8.77316 6.17437 9.25316 6.65437 9.25316 7.24104C9.25316 7.82771 8.77316 8.30771 8.18649 8.30771C7.59983 8.30771 7.11983 7.82771 7.11983 7.24104C7.11983 6.65437 7.59983 6.17437 8.18649 6.17437Z" fill="currentColor"/>
														</svg>

														<svg className='hide' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M10.875 14.3164L8.02925 11.4706L6.96893 12.5317L10.872 16.4348L19.83 7.52475L19.4873 7.01183C17.8504 4.57924 15.1081 3 11.9961 3C7.02592 3 2.99609 7.02908 2.99609 12C2.99609 16.9709 7.02517 21 11.9961 21C16.9663 21 20.9953 16.9709 20.9961 12.0015H19.4963C19.4963 12.003 19.4963 12.0052 19.4963 12.0075C19.4963 16.1483 16.1399 19.5047 11.9991 19.5047C7.85828 19.5047 4.50184 16.1483 4.50184 12.0075C4.50184 7.86669 7.85828 4.51025 11.9991 4.51025C14.3739 4.51025 16.4908 5.61481 17.8646 7.33728L17.8766 7.35227L10.875 14.3164Z" fill="currentColor"/>
														</svg>
												</span>
												<span>
												الخدمه المطلوبة
												</span>
											</li>
											<li className='Stepper__list-item'>
												<span>

														<svg className='show' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M8.6237 9.76302C6.37828 9.76302 4.55078 7.93552 4.55078 5.6901C4.55078 3.44469 6.37828 1.61719 8.6237 1.61719C10.8691 1.61719 12.6966 3.44469 12.6966 5.6901C12.6966 7.93552 10.8691 9.76302 8.6237 9.76302ZM8.6237 2.67969C6.9662 2.67969 5.61328 4.0326 5.61328 5.6901C5.61328 7.3476 6.9662 8.70052 8.6237 8.70052C10.2812 8.70052 11.6341 7.3476 11.6341 5.6901C11.6341 4.0326 10.2812 2.67969 8.6237 2.67969Z" fill="currentColor"/>
															<path d="M14.7082 16.849C14.4178 16.849 14.177 16.6081 14.177 16.3177C14.177 13.874 11.6836 11.8906 8.62364 11.8906C5.56364 11.8906 3.07031 13.874 3.07031 16.3177C3.07031 16.6081 2.82948 16.849 2.53906 16.849C2.24865 16.849 2.00781 16.6081 2.00781 16.3177C2.00781 13.2931 4.97573 10.8281 8.62364 10.8281C12.2716 10.8281 15.2395 13.2931 15.2395 16.3177C15.2395 16.6081 14.9986 16.849 14.7082 16.849Z" fill="currentColor"/>
															</svg>


														<svg className='hide' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M10.875 14.3164L8.02925 11.4706L6.96893 12.5317L10.872 16.4348L19.83 7.52475L19.4873 7.01183C17.8504 4.57924 15.1081 3 11.9961 3C7.02592 3 2.99609 7.02908 2.99609 12C2.99609 16.9709 7.02517 21 11.9961 21C16.9663 21 20.9953 16.9709 20.9961 12.0015H19.4963C19.4963 12.003 19.4963 12.0052 19.4963 12.0075C19.4963 16.1483 16.1399 19.5047 11.9991 19.5047C7.85828 19.5047 4.50184 16.1483 4.50184 12.0075C4.50184 7.86669 7.85828 4.51025 11.9991 4.51025C14.3739 4.51025 16.4908 5.61481 17.8646 7.33728L17.8766 7.35227L10.875 14.3164Z" fill="currentColor"/>
														</svg>
												</span>
												<span>
												اسماء المرافقين
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

export default ServiceTwo;