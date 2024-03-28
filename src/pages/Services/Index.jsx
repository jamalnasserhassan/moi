import './Services.scss';

import { Routes, Route } from 'react-router-dom';
import ServiceOne from './ServiceOne/Index';
import ServiceTwo from './ServiceTwo/Index';
import ServiceThree from './ServiceThree/Index';
import ServiceFour from './ServiceFour/Index';

function Services() {
  return (
	<Routes>
		<Route path="service-1" element={<ServiceOne />} />
		<Route path="service-2" element={<ServiceTwo />} />
		<Route path="service-3" element={<ServiceThree />} />
		<Route path="service-4" element={<ServiceFour />} />
	</Routes>
  );
}

export default Services;
