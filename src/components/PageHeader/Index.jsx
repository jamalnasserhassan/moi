import Breadcrumb from '../Breadcrumb/Index';

const PageHeader = () => {
  return (
    <div className="PageHeader">
		<div className="PageHeader__container">
			<div className="PageHeader__container-background">
				<img src="assets/images/hero-2nd.png" alt="" />
			</div>
			<div className="PageHeader__container-content">

				<Breadcrumb />

				<div className="Orders__count">
					<ul>
						<li>
							<span>معلقة لديك</span>
							<span className="Orders__count-badge is--pending">6</span>
						</li>
						<li>
							<span>مقبولة</span>
							<span className="Orders__count-badge is--acceptable">6</span>
						</li>
						<li>
							<span>مرفوضه</span>
							<span className="Orders__count-badge is--refused">6</span>
						</li>
						<li>
							<span>ملغاة</span>
							<span className="Orders__count-badge is--cancelled">6</span>
						</li>
					</ul>
				</div>

			</div>
		</div>
	</div>
  );
};

export default PageHeader;
