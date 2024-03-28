import { useEffect } from 'react';
import './PageLoader.scss';
import Logo from '../../components/Logo/Index';

const PageLoader = () => {
	useEffect(() => {
		return () => {
			// Hide Login
		};
  	}, []);

  return (
	<div className="PageLoader">
		<div className="PageLoader__container">
			<img className='hero' src="/images/hero.png" alt=''/>
			<div className="PageLoader__container-content">
				<div className='PageLoader__content-logo'>
					<img src='/images/logo-light.png' alt="" />
				</div>
				<span></span>
				<div className="PageLoader__content-separate"></div>
				<div className="PageLoader__content-gallery">
					<div className="slide">
						<img src='/images/loader-1.png' alt="" />
						<img src='/images/loader-2.png' alt="" />
						<img src='/images/loader-3.png' alt="" />
						<img src='/images/loader-4.png' alt="" />
					</div>
				</div>
			</div>
			<div className="PageLoader__container-num">
			٢٠٪
			</div>
		</div>
	</div>
  );
};
export default PageLoader;
