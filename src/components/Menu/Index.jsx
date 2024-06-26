import './Menu.scss';

import { NavLink } from "react-router-dom";

function Menu() {
	return (
		<div className="Menu__container">
			<div className="Menu">
				<ul>
					<li>
						<NavLink to="/"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "is--active" : ""
							}
							>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.762" d="M14.018 7.939h1.567c1.566 0 2.35-.784 2.35-2.35V4.022c0-1.567-.784-2.35-2.35-2.35h-1.567c-1.567 0-2.35.783-2.35 2.35v1.567c0 1.566.783 2.35 2.35 2.35ZM4.616 17.337h1.566c1.567 0 2.35-.783 2.35-2.35V13.42c0-1.566-.783-2.35-2.35-2.35H4.616c-1.567 0-2.35.784-2.35 2.35v1.567c0 1.567.783 2.35 2.35 2.35ZM5.399 7.939a3.133 3.133 0 1 0 0-6.267 3.133 3.133 0 0 0 0 6.267Z"/>
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.762" d="M14.801 17.337a3.133 3.133 0 1 0 0-6.267 3.133 3.133 0 0 0 0 6.267Z" opacity=".6"/>
								</svg>
							</span>
							<span>
								الرئيسيه
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/orders"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "is--active" : ""
							}
							>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
									<path fill="currentColor" d="M9.877 14.95a3.724 3.724 0 0 1-3.72-3.721 3.724 3.724 0 0 1 3.72-3.721 3.724 3.724 0 0 1 3.72 3.72 3.724 3.724 0 0 1-3.72 3.722Zm0-6.267a2.55 2.55 0 0 0-2.546 2.546 2.55 2.55 0 0 0 2.546 2.546 2.55 2.55 0 0 0 2.546-2.546 2.55 2.55 0 0 0-2.546-2.546Z"/>
									<path fill="currentColor" d="M9.092 12.594a.586.586 0 0 1-.298-1.089l.596-.36a.184.184 0 0 0 .094-.165v-.728c0-.322.266-.588.587-.588.322 0 .588.259.588.58v.728c0 .478-.259.932-.666 1.175l-.595.36a.55.55 0 0 1-.306.087Z"/>
									<path fill="currentColor" d="M13.008 17.92H6.742c-3.62 0-4.293-1.685-4.465-3.322l-.588-6.275c-.086-.822-.11-2.036.705-2.945.705-.783 1.872-1.16 3.564-1.16h7.834c1.7 0 2.867.385 3.564 1.16.815.909.791 2.123.705 2.953l-.587 6.26c-.173 1.644-.846 3.328-4.466 3.328ZM5.958 5.385c-1.323 0-2.232.258-2.694.775-.384.423-.51 1.074-.408 2.045l.588 6.274c.133 1.238.47 2.264 3.298 2.264h6.266c2.82 0 3.165-1.026 3.298-2.271l.588-6.26c.102-.978-.024-1.629-.407-2.052-.463-.517-1.371-.775-2.695-.775H5.958Z"/>
									<path fill="currentColor" d="M13.01 5.386a.592.592 0 0 1-.587-.587v-.627c0-1.394 0-1.919-1.92-1.919H9.25c-1.919 0-1.919.525-1.919 1.92v.626a.592.592 0 0 1-.587.587.592.592 0 0 1-.588-.587v-.627c0-1.378 0-3.094 3.094-3.094h1.254c3.094 0 3.094 1.716 3.094 3.094V4.8a.592.592 0 0 1-.588.587ZM13.02 11.377a.593.593 0 0 1-.573-.446.587.587 0 0 1 .423-.713 12.163 12.163 0 0 0 4.215-1.974.59.59 0 0 1 .822.133.59.59 0 0 1-.133.823 13.44 13.44 0 0 1-4.622 2.162.683.683 0 0 1-.133.015ZM6.745 11.397c-.047 0-.094-.008-.14-.016a13.459 13.459 0 0 1-4.411-1.974.59.59 0 0 1-.157-.815.59.59 0 0 1 .815-.156 12.253 12.253 0 0 0 4.026 1.801c.314.079.51.392.431.713a.571.571 0 0 1-.564.447Z"/>
								</svg>
							</span>
							<span>
								الطلبات
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/reports"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "is--active" : ""
							}
							>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
									<path fill="currentColor" d="M12.636 15.912a8.487 8.487 0 0 1-1.99-.258L9.33 15.34c-3.611-.853-4.794-2.765-3.948-6.368L6.15 5.69c.172-.744.376-1.348.626-1.849 1.348-2.78 3.925-2.53 5.758-2.1l1.308.306c1.833.431 2.992 1.113 3.643 2.154.642 1.042.744 2.382.313 4.215l-.768 3.274c-.673 2.867-2.076 4.222-4.394 4.222ZM10.529 2.65c-1.309 0-2.139.54-2.695 1.7-.204.423-.384.948-.54 1.606l-.768 3.282c-.697 2.961.11 4.254 3.07 4.959l1.316.313c.423.102.823.165 1.183.196 2.131.211 3.188-.72 3.784-3.282l.768-3.275c.352-1.511.305-2.569-.165-3.329-.47-.76-1.394-1.277-2.914-1.63l-1.308-.305c-.65-.156-1.23-.235-1.731-.235Z" />
									<path fill="currentColor" d="M6.776 17.534c-2.013 0-3.298-1.206-4.12-3.752l-1.003-3.094c-1.112-3.447-.117-5.39 3.314-6.502l1.237-.4c.408-.125.713-.21.987-.258a.567.567 0 0 1 .58.22c.133.18.157.415.063.618-.204.416-.384.94-.533 1.598l-.768 3.283c-.697 2.96.11 4.253 3.071 4.958l1.316.313c.423.102.823.165 1.183.196.25.024.454.196.525.439a.589.589 0 0 1-.235.634c-.517.353-1.167.65-1.99.917l-1.238.407c-.9.282-1.684.423-2.389.423Zm-.43-12.557-1.011.33c-2.797.9-3.462 2.216-2.562 5.02l1.003 3.095c.909 2.796 2.225 3.47 5.021 2.57l1.238-.408.133-.047-.83-.196c-3.611-.854-4.794-2.765-3.948-6.369l.767-3.282a7.83 7.83 0 0 1 .188-.713ZM13.951 8.336c-.047 0-.094-.008-.149-.016l-3.799-.963a.587.587 0 0 1 .29-1.136l3.8.963a.586.586 0 0 1-.141 1.151Z" />
									<path fill="currentColor" d="M11.658 10.983c-.047 0-.094-.008-.149-.015l-2.28-.58a.587.587 0 0 1 .29-1.136l2.28.58c.314.078.502.4.423.713a.57.57 0 0 1-.564.438Z" />
								</svg>
							</span>
							<span>
								التقارير
							</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/statistics"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "is--active" : ""
							}
							>
							<span>
								<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.9807 17.9172H2.31406C1.9929 17.9172 1.72656 17.6509 1.72656 17.3297C1.72656 17.0085 1.9929 16.7422 2.31406 16.7422H17.9807C18.3019 16.7422 18.5682 17.0085 18.5682 17.3297C18.5682 17.6509 18.3019 17.9172 17.9807 17.9172Z" fill="currentColor"/>
									<path d="M11.9133 17.9276H8.38828C8.06711 17.9276 7.80078 17.6613 7.80078 17.3401V3.2401C7.80078 1.89277 8.54495 1.08594 9.79828 1.08594H10.5033C11.7566 1.08594 12.5008 1.89277 12.5008 3.2401V17.3401C12.5008 17.6613 12.2344 17.9276 11.9133 17.9276ZM8.97578 16.7526H11.3258V3.2401C11.3258 2.33927 10.9028 2.26094 10.5033 2.26094H9.79828C9.39878 2.26094 8.97578 2.33927 8.97578 3.2401V16.7526Z" fill="currentColor"/>
									<path d="M6.23255 17.9229H3.09922C2.77805 17.9229 2.51172 17.6566 2.51172 17.3354V7.93542C2.51172 6.58808 3.20105 5.78125 4.35255 5.78125H4.97922C6.13072 5.78125 6.82005 6.58808 6.82005 7.93542V17.3354C6.82005 17.6566 6.55372 17.9229 6.23255 17.9229ZM3.68672 16.7479H5.64505V7.93542C5.64505 6.95625 5.21422 6.95625 4.97922 6.95625H4.35255C4.11755 6.95625 3.68672 6.95625 3.68672 7.93542V16.7479Z" fill="currentColor"/>
									<path d="M17.1974 17.9203H14.0641C13.7429 17.9203 13.4766 17.654 13.4766 17.3328V11.8495C13.4766 10.5021 14.1659 9.69531 15.3174 9.69531H15.9441C17.0956 9.69531 17.7849 10.5021 17.7849 11.8495V17.3328C17.7849 17.654 17.5186 17.9203 17.1974 17.9203ZM14.6516 16.7453H16.6099V11.8495C16.6099 10.8703 16.1791 10.8703 15.9441 10.8703H15.3174C15.0824 10.8703 14.6516 10.8703 14.6516 11.8495V16.7453Z" fill="currentColor"/>
									</svg>

							</span>
							<span>
							الإحصائات
							</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	)
}
export default Menu;
