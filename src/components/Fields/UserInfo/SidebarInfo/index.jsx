import { Link } from 'react-router-dom';
import './SidebarInfo.scss'

const SidebarInfo = ({ isOpen, toggleSidebar}) => {
  return (
    <aside className={`Sidebar Sidebar__info ${isOpen ? 'is--open' : ''}`}>
      <div className="Sidebar__overlay" onClick={toggleSidebar}></div>
      <div className="Sidebar__content">
        <div className="Sidebar__content-header">
          <h6>
		  معلومات اساسية
          </h6>
          <button type="button" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M15.375 17.21 10 11.835 4.625 17.21a.988.988 0 0 1-1.398 0l-.437-.437a.988.988 0 0 1 0-1.398L8.165 10 2.79 4.625a.988.988 0 0 1 0-1.398l.437-.437a.988.988 0 0 1 1.398 0L10 8.165l5.375-5.375a.988.988 0 0 1 1.398 0l.437.437a.988.988 0 0 1 0 1.398L11.835 10l5.375 5.375a.988.988 0 0 1 0 1.398l-.437.437a.988.988 0 0 1-1.398 0Z"/></svg>
          </button>
        </div>
		<div className='Sidebar__content-scroll'>
			<div className="Sidebar__info-header">
				<img src='/images/user.png' />
				<h2>فهد سعود الحربي</h2>
				<p>موظف مركز البيانات</p>
				<ul>
					<li>
						<Link to='mailto:msaif@Dcenter.com'>
							<div>
								<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="15.75" cy="15.5" r="15.25" fill="#FFE8E3" fillOpacity="0.44"/>
									<path d="M9.5 12.7455C9.5 15.044 9.5 18.6312 9.5 18.6312C9.5 18.6312 9.5 18.6312 9.5 18.6312C9.5 19.5253 10.2555 20.25 11.1875 20.25H21.3125C22.2445 20.25 23 19.5253 23 18.6312V12.3656M9.5 12.7455C9.5 12.4665 9.64987 12.2071 9.89656 12.0592L16.25 8.25L22.5699 11.6602C22.8356 11.8035 23 12.0732 23 12.3656M9.5 12.7455C9.8375 12.7455 16.25 16.7485 16.25 16.7485L23 12.3656" stroke="#EAAF3A" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</div>
							<div>
								<p>msaif@Dcenter.com</p>
							</div>
						</Link>
					</li>
					<li>
						<Link to='tel:+96601134523433'>
							<div>
								<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="15.75" cy="15.5" r="15.25" fill="#FFE8E3" fillOpacity="0.44"/>
									<path d="M18.1862 22.6901H14.3112C11.4631 22.6901 10.5977 21.8247 10.5977 18.9766V12.5182C10.5977 9.6701 11.4631 8.80469 14.3112 8.80469H18.1862C21.0343 8.80469 21.8997 9.6701 21.8997 12.5182V18.9766C21.8997 21.8247 21.0343 22.6901 18.1862 22.6901ZM14.3112 9.77344C11.9991 9.77344 11.5664 10.2126 11.5664 12.5182V18.9766C11.5664 21.2822 11.9991 21.7214 14.3112 21.7214H18.1862C20.4983 21.7214 20.931 21.2822 20.931 18.9766V12.5182C20.931 10.2126 20.4983 9.77344 18.1862 9.77344H14.3112Z" fill="#FF7455"/>
									<path d="M17.5404 12.0391H14.957C14.6922 12.0391 14.4727 11.8195 14.4727 11.5547C14.4727 11.2899 14.6922 11.0703 14.957 11.0703H17.5404C17.8052 11.0703 18.0247 11.2899 18.0247 11.5547C18.0247 11.8195 17.8052 12.0391 17.5404 12.0391Z" fill="#FF7455"/>
									<path d="M16.251 20.8224C15.4308 20.8224 14.7656 20.1572 14.7656 19.337C14.7656 18.5168 15.4308 17.8516 16.251 17.8516C17.0713 17.8516 17.7365 18.5168 17.7365 19.337C17.7365 20.1572 17.0713 20.8224 16.251 20.8224ZM16.251 18.8139C15.9669 18.8139 15.7344 19.0464 15.7344 19.3305C15.7344 19.6147 15.9669 19.8472 16.251 19.8472C16.5352 19.8472 16.7677 19.6147 16.7677 19.3305C16.7677 19.0464 16.5352 18.8139 16.251 18.8139Z" fill="#FF7455"/>
								</svg>
							</div>
							<div>
								<p>+966 563 6188 93</p>
							</div>
						</Link>
					</li>
				</ul>
			</div>
			<div className='Sidebar__info-list'>
				<ul>
					<li>
						<div>
							<strong>حساب المستخدم</strong>
							<p>A3758</p>
						</div>
						<div>
							<strong>المدير المباشر </strong>
							<p>نايف محمد الناهض</p>
						</div>
					</li>
					<li>
						<div>
							<strong> الشعبة </strong>
							<p> شعبة الصلاحيات</p>
						</div>
						<div>
							<strong> الادارة </strong>
							<p>اداره عمليات تقنية المعلومات</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
      </div>
    </aside>
  );
};

export default SidebarInfo;
