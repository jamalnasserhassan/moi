import SidebarInfo from "../../../../../components/Fields/UserInfo/SidebarInfo";
import OrderInfo from "../../../../Orders/OrderInfo";
import { useState, useEffect} from 'react';

function order() {

	// Handle User Profile
	const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
	useEffect(() => {
		if (isUserInfoOpen) {
			document.body.classList.add('u-overflow');
			document.documentElement.classList.add('u-overflow');
		} else {
			document.body.classList.remove('u-overflow');
			document.documentElement.classList.remove('u-overflow');
		}
	}, [isUserInfoOpen]);

	const toggleUserInfo = () => {
		setIsUserInfoOpen(!isUserInfoOpen);
	};

	// Handle Order Sidebar
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

	return (
		<>
			<article className="Card Card__order is--border">
				<div className="w-100">
					<div className="Card__title justify-content-between">
						<div className="d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><rect width="26.782" height="26.782" x=".969" y=".25" fill="#F5F3FF" rx="13.391"/><rect width="26.782" height="26.782" x=".969" y=".25" stroke="#3937C7" strokeWidth=".5" rx="13.391"/><path fill="#664EFA" d="M11.668 9.659a.469.469 0 0 1-.465-.465V7.332c0-.254.211-.465.465-.465.255 0 .466.211.466.465v1.862c0 .254-.211.465-.466.465ZM16.633 9.659a.469.469 0 0 1-.465-.465V7.332c0-.254.21-.465.465-.465s.466.211.466.465v1.862a.469.469 0 0 1-.466.465ZM11.98 15.09a.618.618 0 0 1-.236-.05.639.639 0 0 1-.205-.13.652.652 0 0 1-.18-.441c0-.161.069-.323.18-.44.062-.056.13-.1.205-.13a.62.62 0 0 1 .472 0 .715.715 0 0 1 .204.13c.025.03.056.061.075.092a.472.472 0 0 1 .056.112.397.397 0 0 1 .037.112.932.932 0 0 1 .012.124.652.652 0 0 1-.18.44.713.713 0 0 1-.204.13.618.618 0 0 1-.236.05ZM14.152 15.092a.618.618 0 0 1-.236-.05.641.641 0 0 1-.205-.13.652.652 0 0 1-.18-.44c0-.037.006-.08.013-.124a.394.394 0 0 1 .037-.112.468.468 0 0 1 .056-.111l.074-.094a.65.65 0 0 1 .881 0l.075.094a.468.468 0 0 1 .055.111.394.394 0 0 1 .038.112.933.933 0 0 1 .012.124.652.652 0 0 1-.18.44.641.641 0 0 1-.44.18ZM11.98 17.261a.618.618 0 0 1-.236-.05.717.717 0 0 1-.205-.13.652.652 0 0 1-.18-.44.76.76 0 0 1 .013-.118.374.374 0 0 1 .037-.118.47.47 0 0 1 .056-.112c.018-.03.05-.062.074-.093.062-.056.13-.099.205-.13a.62.62 0 0 1 .472 0 .713.713 0 0 1 .204.13c.025.031.056.062.075.093a.47.47 0 0 1 .056.112.377.377 0 0 1 .037.118.76.76 0 0 1 .012.118.652.652 0 0 1-.18.44.715.715 0 0 1-.204.13.618.618 0 0 1-.236.05ZM19.426 12.196H8.879a.469.469 0 0 1-.465-.465c0-.254.211-.465.465-.465h10.547c.254 0 .465.21.465.465 0 .254-.21.465-.465.465ZM16.52 20.23a.872.872 0 0 1-.62-.249.882.882 0 0 1-.237-.763l.118-.837c.031-.218.162-.478.317-.633l2.196-2.196c.297-.298.59-.453.905-.484.391-.037.77.124 1.13.484.378.378.887 1.147 0 2.035l-2.197 2.196a1.229 1.229 0 0 1-.632.316l-.838.118c-.05.006-.093.012-.142.012Zm2.785-4.238h-.019c-.087.006-.204.087-.335.217l-2.196 2.196a.236.236 0 0 0-.05.106l-.111.775.775-.111a.345.345 0 0 0 .106-.056l2.196-2.196c.273-.273.31-.41 0-.72-.1-.093-.242-.21-.366-.21Z"/><path fill="#664EFA" d="M19.685 18.039a.4.4 0 0 1-.124-.019 2.467 2.467 0 0 1-1.7-1.7.471.471 0 0 1 .322-.576.471.471 0 0 1 .577.322 1.53 1.53 0 0 0 1.055 1.055c.248.068.39.329.323.577a.476.476 0 0 1-.453.341Z"/><path fill="#664EFA" d="M14.15 20.205H11.67c-2.265 0-3.567-1.303-3.567-3.568v-5.273c0-2.264 1.302-3.567 3.567-3.567h4.963c2.264 0 3.567 1.303 3.567 3.567v2.171c0 .255-.21.466-.465.466a.469.469 0 0 1-.465-.465v-2.172c0-1.774-.863-2.637-2.637-2.637h-4.963c-1.775 0-2.637.863-2.637 2.637v5.273c0 1.775.862 2.637 2.637 2.637h2.481c.255 0 .466.211.466.465 0 .255-.211.466-.466.466Z"/></svg>
							<p>طلب زيارة مركز</p>
						</div>
						<span className="Button Button__xs Button__acceptable d-flex d-lg-none">
							موافقة
						</span>
					</div>
					<ul className="Card__list">
						<li>
							<button onClick={toggleUserInfo}>
								<img src="/images/avatar.png" alt=""/>
								فهد الحربي
							</button>
						</li>
						<li>
							ECA02230
						</li>
						<li>
							22/02/2021  01:15:12 PM
						</li>
					</ul>
				</div>
				<footer className="d-none d-lg-flex">
					<span className="Button Button__small Button__acceptable">
						موافقة
					</span>

					<button onClick={toggleInfo} className="Button__hover Button__acceptable">
						عرض
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
								<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M3.332 8.5h9.333"/>
									<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
								</g>
							</svg>
						</span>
					</button>
				</footer>
			</article>

			<article className="Card Card__order is--border">

				<div className="w-100">
					<div className="Card__title justify-content-between">
						<div className="d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><rect width="27.227" height="27.227" x=".523" y=".25" fill="#E9EEE0" rx="13.614"/><rect width="27.227" height="27.227" x=".523" y=".25" stroke="#688137" strokeWidth=".5" rx="13.614"/><path fill="#688137" d="M18.713 13.088H9.57a2.147 2.147 0 0 1-2.144-2.144V9.3c0-1.181.962-2.144 2.144-2.144h9.143c1.181 0 2.144.963 2.144 2.144v1.644a2.147 2.147 0 0 1-2.144 2.143Zm-9.15-5c-.668 0-1.206.543-1.206 1.206v1.643c0 .67.544 1.207 1.206 1.207h9.144c.669 0 1.206-.544 1.206-1.207V9.294c0-.669-.544-1.207-1.206-1.207H9.563ZM18.713 20.587H9.57a2.147 2.147 0 0 1-2.144-2.143V16.8c0-1.181.962-2.144 2.144-2.144h9.143c1.181 0 2.144.963 2.144 2.144v1.644a2.147 2.147 0 0 1-2.144 2.143Zm-9.15-5c-.668 0-1.206.544-1.206 1.207v1.643c0 .67.544 1.207 1.206 1.207h9.144c.669 0 1.206-.544 1.206-1.206v-1.644c0-.669-.544-1.207-1.206-1.207H9.563Z"/><path fill="#688137" d="M10.387 11.21a.472.472 0 0 1-.469-.468v-1.25c0-.256.213-.469.469-.469s.468.213.468.47v1.25a.472.472 0 0 1-.468.468ZM12.887 11.21a.472.472 0 0 1-.469-.468v-1.25c0-.256.213-.469.469-.469s.468.213.468.47v1.25a.472.472 0 0 1-.468.468ZM10.387 18.71a.472.472 0 0 1-.469-.468v-1.25c0-.256.213-.469.469-.469s.468.213.468.47v1.25a.472.472 0 0 1-.468.468ZM12.887 18.71a.472.472 0 0 1-.469-.468v-1.25c0-.256.213-.469.469-.469s.468.213.468.47v1.25a.472.472 0 0 1-.468.468ZM17.887 10.586h-2.5a.472.472 0 0 1-.469-.469c0-.256.213-.469.469-.469h2.5c.256 0 .468.213.468.47a.472.472 0 0 1-.468.468ZM17.887 18.086h-2.5a.472.472 0 0 1-.469-.469c0-.256.213-.469.469-.469h2.5c.256 0 .468.213.468.47a.472.472 0 0 1-.468.468Z"/></svg>
							<p>طلب خادم جديد</p>
						</div>
						<span className="Button Button__xs Button__pending d-flex d-lg-none">
						معلقة
						</span>
					</div>
					<ul className="Card__list">
						<li>
							<button onClick={toggleUserInfo}>
								<img src="/images/avatar.png" alt=""/>
								فهد الحربي
							</button>
						</li>
						<li>
							ECA02230
						</li>
						<li>
							22/02/2021  01:15:12 PM
						</li>
					</ul>
				</div>
				<footer className="d-none d-lg-flex">

					<span className="Button Button__small Button__pending">
						معلقة
					</span>

					<button onClick={toggleInfo} className="Button__hover Button__pending">
						عرض
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
								<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M3.332 8.5h9.333"/>
									<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
								</g>
							</svg>
						</span>
					</button>

				</footer>
			</article>

			<article className="Card Card__order is--border">

				<div className="w-100">
					<div className="Card__title justify-content-between">
						<div className="d-flex align-items-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28"><rect width="27.227" height="27.227" x=".523" y=".25" fill="#FAFFFE" rx="13.614"/><rect width="27.227" height="27.227" x=".523" y=".25" stroke="#37A2C8" strokeWidth=".5" rx="13.614"/><path fill="#37A2C8" d="M14.352 6.508a7.5 7.5 0 0 1 .233 14.996l-.233.004a7.5 7.5 0 1 1 0-15Zm0 11.25a3.734 3.734 0 0 1-2.3-.787l-1.998 1.997.16.133a6.559 6.559 0 0 0 .195.154l-.103-.08c.064.05.129.1.194.147l-.09-.067c.16.12.326.234.497.34l.038.023-.038-.023c.074.046.15.09.225.133l-.187-.11c.075.046.151.09.229.133l-.042-.023.173.094-.131-.071c.078.043.157.085.237.125l.23.11a6.558 6.558 0 0 0 .294.125l-.095-.038c.083.034.167.067.252.098l-.157-.06c.079.031.158.06.238.09l-.08-.03a6.493 6.493 0 0 0 .661.204l-.137-.037c.087.024.176.047.265.067l-.128-.03c.078.019.156.037.235.054l-.107-.024c.1.023.2.043.3.061l-.193-.037c.078.016.157.031.236.045l-.043-.008c.098.018.197.033.296.047l-.253-.039c.115.02.232.037.35.05l-.097-.011c.081.01.163.02.245.028l-.149-.016c.088.01.176.019.265.026l-.116-.01c.085.008.17.014.256.019l-.14-.01c.09.008.18.013.271.016l-.13-.006c.123.007.247.01.372.01l.241-.004a6.214 6.214 0 0 0 .271-.015l-.14.009c.085-.005.171-.011.256-.02l-.116.01c.089-.006.177-.015.265-.025l-.149.016a6.54 6.54 0 0 0 .245-.028l-.096.012c.117-.014.234-.031.35-.051l-.254.039c.1-.014.199-.029.296-.047l-.043.008c.08-.014.158-.029.236-.045l-.193.037c.101-.018.201-.038.3-.06l-.107.023a6.76 6.76 0 0 0 .235-.054l-.128.03c.09-.02.178-.043.266-.067l-.138.037a6.487 6.487 0 0 0 .662-.204l-.08.029c.08-.028.159-.058.237-.089l-.157.06c.085-.031.169-.064.252-.098l-.095.038c.1-.04.198-.081.295-.125l.229-.11a6.674 6.674 0 0 0 .237-.125l-.13.07c.057-.03.115-.061.172-.093l-.042.023a6.58 6.58 0 0 0 .23-.133l-.188.11c.076-.043.15-.087.225-.133l-.038.023a6.593 6.593 0 0 0 .536-.363l-.092.067a6.45 6.45 0 0 0 .195-.146l-.103.079c.066-.05.131-.101.196-.154l-.093.075c.085-.067.17-.137.252-.208L16.65 16.97a3.734 3.734 0 0 1-2.3.788ZM9.392 9.71l-.134.159a6.503 6.503 0 0 0-.153.196l.079-.103c-.05.063-.099.128-.147.194l.068-.091a6.588 6.588 0 0 0-.364.535l.023-.037c-.045.074-.09.149-.132.225l.11-.188c-.046.075-.09.152-.133.229l.023-.041a6.608 6.608 0 0 0-.11.203l.087-.162a6.574 6.574 0 0 0-.126.238l-.11.229a6.568 6.568 0 0 0-.125.294l.039-.095a6.503 6.503 0 0 0-.099.252l.06-.157a6.473 6.473 0 0 0-.089.239l.03-.082a6.523 6.523 0 0 0-.235.79l.03-.127a6.52 6.52 0 0 0-.051.223l.021-.096a6.538 6.538 0 0 0-.12.693l.013-.097c-.011.081-.02.163-.028.245l.016-.148c-.01.087-.02.176-.026.264l.01-.116c-.008.085-.015.17-.02.257l.01-.14a6.605 6.605 0 0 0-.015.265l.005-.125c-.006.123-.01.247-.01.372l.005.247a6.76 6.76 0 0 0 .015.265l-.01-.14c.005.086.012.171.02.257l-.01-.117c.007.089.015.177.026.265l-.016-.148c.008.082.017.163.028.245l-.012-.097a6.54 6.54 0 0 0 .12.692l-.024-.107c.016.078.034.155.053.232l-.03-.125c.02.09.043.178.067.266l-.037-.14a6.514 6.514 0 0 0 .199.649l-.024-.066c.029.08.058.16.09.239l-.066-.173c.033.09.067.18.104.267l-.039-.094a6.54 6.54 0 0 0 .36.76l-.086-.161c.035.068.072.136.11.203l-.024-.041c.043.077.088.153.133.229l-.11-.188c.043.076.088.15.133.225l-.023-.038c.052.085.105.168.16.25l.13.185a6.557 6.557 0 0 0 .144.193l-.07-.092c.05.066.1.132.153.196l-.083-.104c.07.09.142.177.217.263l1.997-1.997a3.734 3.734 0 0 1-.787-2.3c0-.867.294-1.665.787-2.3L9.392 9.71Zm9.92 0-1.998 1.998c.494.635.788 1.433.788 2.299 0 .867-.294 1.665-.788 2.3l1.998 1.997.133-.16a7.022 7.022 0 0 0 .154-.195l-.07.092c.049-.064.097-.128.144-.193l.13-.185c.046-.07.091-.14.136-.212l.023-.038-.023.038c.045-.074.09-.149.133-.225l-.11.188c.046-.076.09-.152.133-.23l-.023.042.11-.203-.087.162a6.519 6.519 0 0 0 .36-.761l-.039.094c.037-.088.072-.177.104-.267l-.065.173a6.49 6.49 0 0 0 .089-.239l-.024.066a6.518 6.518 0 0 0 .199-.65l-.037.14c.024-.087.047-.176.067-.265l-.03.125c.02-.076.037-.154.053-.231l-.023.106a6.531 6.531 0 0 0 .12-.692l-.013.097c.011-.082.02-.163.028-.246l-.015.15c.01-.089.018-.177.025-.266l-.01.116c.008-.085.015-.17.02-.256l-.01.14c.007-.09.012-.18.016-.27l-.006.13a6.65 6.65 0 0 0 .01-.372l-.004-.242a7.005 7.005 0 0 0-.016-.27l.01.14a6.599 6.599 0 0 0-.02-.257l.01.116a6.59 6.59 0 0 0-.025-.264l.015.148a6.589 6.589 0 0 0-.028-.245l.012.097a6.55 6.55 0 0 0-.12-.693l.022.097a6.639 6.639 0 0 0-.052-.224l.03.127a6.657 6.657 0 0 0-.233-.79l.029.081a6.533 6.533 0 0 0-.09-.238l.06.158a6.399 6.399 0 0 0-.098-.253l.039.095c-.04-.1-.081-.197-.125-.294l-.11-.23a5.933 5.933 0 0 0-.125-.237l.087.162a6.629 6.629 0 0 0-.11-.203l.023.04a6.486 6.486 0 0 0-.133-.228l.11.188a6.736 6.736 0 0 0-.133-.225l.023.037a6.606 6.606 0 0 0-.364-.536l.068.092a6.585 6.585 0 0 0-.146-.194l.078.103c-.05-.067-.1-.132-.153-.196l.075.093a6.694 6.694 0 0 0-.208-.252Zm-4.96 1.484a2.8 2.8 0 0 0-1.508.438l-.122.082-.13.098a2.73 2.73 0 0 0-.131.113l.05-.046c-.04.035-.079.071-.117.108l.067-.062c-.044.04-.087.081-.129.124l.062-.062c-.042.041-.083.083-.123.127l.061-.065a2.874 2.874 0 0 0-.108.118l.047-.053a2.794 2.794 0 0 0-.112.13l.065-.077a2.816 2.816 0 0 0-.165.21l-.082.122a2.8 2.8 0 0 0-.438 1.508 2.801 2.801 0 0 0 .742 1.903l-.079-.089c.037.044.076.086.115.128l-.036-.04c.04.045.082.088.125.129l-.089-.09c.042.045.086.088.131.13l-.042-.04c.044.042.09.083.137.123l-.095-.084a2.801 2.801 0 0 0 1.903.742 2.801 2.801 0 0 0 1.891-.73l-.05.045c.04-.035.079-.07.117-.108l-.067.063c.045-.04.087-.082.129-.125l-.062.062c.043-.041.084-.084.124-.128l-.062.066a2.81 2.81 0 0 0 .108-.118l-.046.052c.454-.5.731-1.163.731-1.891a2.802 2.802 0 0 0-.742-1.903l.079.088a2.894 2.894 0 0 0-.118-.13l.04.042a2.809 2.809 0 0 0-.13-.132l.09.09a2.774 2.774 0 0 0-.128-.126l.038.036a2.79 2.79 0 0 0-.114-.103l.076.067a2.84 2.84 0 0 0-.144-.124l-.13-.098-.122-.082a2.799 2.799 0 0 0-1.507-.438Zm0-3.75-.248.005a6.79 6.79 0 0 0-.265.015l.14-.01a6.613 6.613 0 0 0-.256.02l.116-.01a6.591 6.591 0 0 0-.265.026l.149-.016a6.583 6.583 0 0 0-.245.028l.096-.012c-.117.014-.233.03-.349.05l.253-.038a6.53 6.53 0 0 0-.296.046l.043-.007a6.54 6.54 0 0 0-.236.045l.193-.038c-.101.018-.201.039-.3.062l.107-.024a6.554 6.554 0 0 0-.235.054l.128-.03c-.09.02-.178.042-.266.066l.139-.036a6.508 6.508 0 0 0-.663.204l.081-.03c-.08.029-.16.058-.238.09l.157-.06a6.572 6.572 0 0 0-.252.098l.095-.038a6.523 6.523 0 0 0-.761.36l.162-.087a6.447 6.447 0 0 0-.204.11l.042-.023a6.595 6.595 0 0 0-.23.133l.188-.11a6.46 6.46 0 0 0-.225.133l.038-.023a6.59 6.59 0 0 0-.536.363l.092-.068c-.066.048-.13.097-.194.147l.102-.079c-.066.05-.131.1-.196.153l.094-.074c-.086.067-.17.136-.253.208l1.998 1.998a3.734 3.734 0 0 1 2.3-.788c.866 0 1.664.294 2.3.788l1.997-1.998-.16-.134a6.286 6.286 0 0 0-.195-.153l.103.079a6.675 6.675 0 0 0-.194-.146l.09.067a6.566 6.566 0 0 0-.535-.363l.038.023a6.579 6.579 0 0 0-.225-.133l.187.11a6.513 6.513 0 0 0-.229-.133l.042.023a6.608 6.608 0 0 0-.204-.11l.162.087a6.488 6.488 0 0 0-.76-.36l.094.038a6.567 6.567 0 0 0-.252-.098l.157.06a6.541 6.541 0 0 0-.238-.09l.081.03a6.522 6.522 0 0 0-.662-.204l.138.036a6.554 6.554 0 0 0-.266-.067l.128.031a6.514 6.514 0 0 0-.234-.054l.106.023c-.099-.022-.199-.043-.3-.06l.194.037a6.53 6.53 0 0 0-.237-.045l.043.007a6.54 6.54 0 0 0-.296-.046l.253.039a6.576 6.576 0 0 0-.35-.051l.097.012a6.597 6.597 0 0 0-.245-.028l.149.016a6.573 6.573 0 0 0-.265-.026l.116.01a6.607 6.607 0 0 0-.256-.02l.14.01a6.605 6.605 0 0 0-.265-.015l-.247-.005Z"/></svg>
						<p>طلب فتح تذكرة</p>
						</div>
						<span className="Button Button__xs Button__refused d-flex d-lg-none">
						مرفوضة
						</span>
					</div>
					<ul className="Card__list">
						<li>
							<button onClick={toggleUserInfo}>
								<img src="/images/avatar.png" alt=""/>
								فهد الحربي
							</button>
						</li>
						<li>
							ECA02230
						</li>
						<li>
							22/02/2021  01:15:12 PM
						</li>
					</ul>
				</div>
				<footer className="d-none d-lg-flex">

					<span className="Button Button__small Button__refused">
					مرفوضة
					</span>

					<button onClick={toggleInfo} className="Button__hover Button__refused">
						عرض
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
								<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M3.332 8.5h9.333"/>
									<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
								</g>
							</svg>
						</span>
					</button>

				</footer>
			</article>

			<article className="Card Card__order is--border">
				<div className="w-100">
					<div className="Card__title justify-content-between">
						<div className="d-flex align-items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28">
							<rect width="26.928" height="26.928" x=".82" y=".25" fill="#FFFAF2" rx="13.464"/>
							<rect width="26.928" height="26.928" x=".82" y=".25" stroke="#FF7455" strokeWidth=".5" rx="13.464"/>
							<path fill="#292D32" d="M11.375 12.063a.425.425 0 0 1-.422-.422v-1.125c0-.231.191-.422.422-.422.23 0 .422.191.422.422v1.125c0 .23-.191.421-.422.421Z"/>
							<path fill="#292D32" d="M14.75 19.797h-1.688c-3.054 0-4.359-1.305-4.359-4.36v-3.374c0-3.055 1.305-4.36 4.36-4.36h3.374c3.055 0 4.36 1.305 4.36 4.36v1.687c0 .23-.191.422-.422.422a.425.425 0 0 1-.422-.422v-1.688c0-2.593-.922-3.515-3.515-3.515h-3.375c-2.594 0-3.516.922-3.516 3.515v3.376c0 2.593.922 3.515 3.515 3.515h1.688c.23 0 .422.191.422.422 0 .23-.191.422-.422.422Z"/>
							<path fill="#292D32" d="M13.625 12.063a.425.425 0 0 1-.422-.422v-1.125c0-.231.191-.422.422-.422.23 0 .422.191.422.422v1.125c0 .23-.191.421-.422.421ZM11.375 17.547a.425.425 0 0 1-.422-.422V16c0-.23.191-.422.422-.422.23 0 .422.191.422.422v1.125c0 .23-.191.422-.422.422ZM13.625 17.547a.425.425 0 0 1-.422-.422V16c0-.23.191-.422.422-.422.23 0 .422.191.422.422v1.125c0 .23-.191.422-.422.422ZM18.125 11.5h-2.25a.425.425 0 0 1-.422-.422c0-.23.191-.422.422-.422h2.25c.23 0 .422.191.422.422 0 .23-.191.422-.422.422ZM20.375 14.172H9.125a.425.425 0 0 1-.422-.422c0-.23.191-.422.422-.422h11.25c.23 0 .422.191.422.422 0 .23-.191.422-.422.422Z"/>
							<path stroke="#292D32" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".5" d="M20.128 18.436a1.822 1.822 0 0 1-1.58.91c-1.007 0-1.626-1.012-1.626-1.012m.04-1.72a1.818 1.818 0 0 1 1.585-.918c1.221 0 1.829 1.013 1.829 1.013m0-1.13v1.124H19.25m-1.204 1.626h-1.125v1.046"/>
						</svg>
						<p>طلب فتح منفذ

						</p>
						</div>
						<span className="Button Button__xs Button__cancelled d-flex d-lg-none">
						ملغاه
						</span>
					</div>
					<ul className="Card__list">
						<li>
							<button onClick={toggleUserInfo}>
								<img src="/images/avatar.png" alt=""/>
								فهد الحربي
							</button>
						</li>
						<li>
							ECA02230
						</li>
						<li>
							22/02/2021  01:15:12 PM
						</li>
					</ul>
				</div>
				<footer className="d-none d-lg-flex">

					<span className="Button Button__small Button__cancelled">
					ملغاه
					</span>

					<button onClick={toggleInfo} className="Button__hover Button__cancelled">
						عرض
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17">
								<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
									<path d="M3.332 8.5h9.333"/>
									<path d="M7.999 3.836 3.332 8.503l4.667 4.666"/>
								</g>
							</svg>
						</span>
					</button>
				</footer>
			</article>

			<OrderInfo isOpen={isInfoOpen} toggleSidebar={toggleInfo} />
			<SidebarInfo isOpen={isUserInfoOpen} toggleSidebar={toggleUserInfo} />

		</>
	)
}
export default order;
