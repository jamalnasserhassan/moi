import './Footer.scss';
import FooterLogo from './FooterLogo';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
  const [showFooter, setShowFooter] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hideFooter = location.pathname.startsWith('/login') || location.pathname.startsWith('/services/service-1') || location.pathname.startsWith('/services/service-2') || location.pathname.startsWith('/services/service-3') || location.pathname.startsWith('/services/service-4');
    setShowFooter(!hideFooter);
  }, [location]);

  return (
    <>{showFooter && (
      <footer className="Footer">
			<div className="Footer__container" style={{ backgroundImage: 'url(/images/hero.png)' }}>
				<div className="Footer__container-text">
					<p>جميع الحقوق محفوظه لادارة لمركز المعلومات ٢٠٢٤</p>
					</div>
					<div className="Footer__container-logo">
					<FooterLogo />
				</div>
			</div>
      </footer>
    )}</>
  );
}

export default Footer;
