import Statistics from './Statistics/Index';
import Orders from './Orders/Index';
import './Widgets.scss';

function Widgets() {
	return (
		<>
			<section className="Widgets">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<Orders/>
						</div>
						<div className="col-lg-6">
							<Statistics/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default Widgets;
