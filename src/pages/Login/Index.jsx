import { useState } from "react";

import "./Login.scss";
import Logo from "../../components/Logo/Index";
import { Link } from "react-router-dom";

function Login() {
	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(
			"Login submitted with email:",
			email,
			"and password:",
			password
		);
	};

	return (
		<div className="LoginForm">
			<div className="LoginForm__container">
				<Logo />

				<h1 className="LoginForm__container-title">تسجيل دخول</h1>
				<p className="LoginForm__container-desc">
					أهلا بعودتك مرة أخري .. برجاء تسجيل الدخول
				</p>

				<div className="LoginForm__container-top">
					<form onSubmit={handleSubmit} className="LoginForm__form">
						<div className="LoginForm__form-item">
							<label htmlFor="email">البريد الالكتروني</label>
							<input
								type="email"
								id="email"
								value={email}
								placeholder="ادخل البريد الالكتروني"
								onChange={(e) => setEmail(e.target.value)}
								required
								autoComplete="true"
							/>
						</div>
						<div className="LoginForm__form-item">
							<label htmlFor="password">كلمة المرور</label>
							<div className="Password__container">
								<input
									type={showPassword ? "text" : "password"}
									id="password"
									value={password}
									placeholder="ادخل كلمه المرور هنا"
									onChange={(e) =>
										setPassword(e.target.value)
									}
									autoComplete="true"
									required
								/>
								<button
									className={`Password__container-button ${
										showPassword ? "is--open" : ""
									}`}
									onClick={togglePasswordVisibility}
									type="button"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<path
											fill="currentColor"
											fillRule="evenodd"
											d="M12 5.25c-2.774 0-5.203 1.661-6.872 3.198a20.393 20.393 0 0 0-2.55 2.852 12.083 12.083 0 0 0-.185.259l-.01.016-.004.004-.274.434.273.406.001.002.003.004.011.016a6.945 6.945 0 0 0 .184.26 20.393 20.393 0 0 0 2.55 2.851c1.67 1.537 4.099 3.198 6.873 3.198s5.203-1.661 6.872-3.198a20.388 20.388 0 0 0 2.55-2.852 12.21 12.21 0 0 0 .185-.259l.01-.016.004-.004.001-.002.282-.419-.282-.42h-.001l-.003-.005-.01-.016a6.596 6.596 0 0 0-.185-.26 20.388 20.388 0 0 0-2.55-2.851C17.202 6.911 14.773 5.25 12 5.25Zm-7.71 7.216A17.629 17.629 0 0 1 3.926 12a18.901 18.901 0 0 1 2.218-2.448C7.733 8.089 9.804 6.75 12 6.75c2.196 0 4.268 1.339 5.856 2.802A18.9 18.9 0 0 1 20.074 12a18.898 18.898 0 0 1-2.219 2.448C16.269 15.911 14.197 17.25 12 17.25c-2.196 0-4.267-1.339-5.856-2.802a18.9 18.9 0 0 1-1.854-1.982ZM14.25 12a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm1.5 0a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</div>
						</div>
						<button
							className="LoginForm__form-submit"
							type="submit"
						>
							<span>دخول</span>
							<span className="LoginForm__submit-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 9"
								>
									<path
										fill="currentColor"
										d="M.556 4.218a.75.75 0 0 1 .158-.247L4.464.22a.753.753 0 0 1 1.065 1.065L3.054 3.753h5.692a.75.75 0 1 1 0 1.5H3.054l2.475 2.468a.75.75 0 0 1 0 1.065.75.75 0 0 1-1.065 0l-3.75-3.75a.75.75 0 0 1-.158-.248.75.75 0 0 1 0-.57Z"
									/>
								</svg>
							</span>
						</button>
					</form>
				</div>

				<div className="LoginForm__container-bottom">
					<h2 className="LoginForm__bottom-title">
						هل تحتاج مساعدة ؟
					</h2>
					<p className="LoginForm__bottom-desc">يمكنك التواصل عبر</p>
					<div className="LoginForm__bottom-info">
						<ul>
							<li>
								<Link to="tel:+96601134523433">
									<div>
										<h3>الهاتف : </h3>
										<p>+966 011 345 234 33</p>
									</div>
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 41 41"
										>
											<circle
												cx="20.5"
												cy="20.5"
												r="20"
												fill="#FFE4AF"
												fillOpacity=".44"
											/>
											<path
												fill="currentColor"
												d="M25.303 20.94h-.727a.509.509 0 0 0-.336.127 5.43 5.43 0 0 1-7.171 0 .509.509 0 0 0-.336-.127h-.727a3.96 3.96 0 0 0-3.955 3.955v4.54c0 .28.228.509.509.509h16.19c.28 0 .509-.228.509-.51v-4.54a3.96 3.96 0 0 0-3.956-3.954Zm2.937 7.986H13.068v-4.031a2.94 2.94 0 0 1 2.937-2.937h.54a6.449 6.449 0 0 0 8.217 0h.54a2.94 2.94 0 0 1 2.938 2.937v4.03ZM14.384 19.54h.757a.509.509 0 0 0 .509-.509v-3.975a5.38 5.38 0 0 1 5.004-3.437 5.38 5.38 0 0 1 5.004 3.437v3.466h-.776a4.506 4.506 0 0 0-4.228-6.044 4.506 4.506 0 0 0-4.5 4.501 4.498 4.498 0 0 0 8.199 2.561h2.571c.928 0 1.682-.754 1.682-1.681V16.1c0-.927-.754-1.68-1.682-1.68h-.428a6.362 6.362 0 0 0-2.15-2.641 6.333 6.333 0 0 0-3.692-1.177c-1.333 0-2.61.406-3.692 1.176a6.361 6.361 0 0 0-2.15 2.64h-.428c-.928 0-1.682.755-1.682 1.682v1.76c0 .927.754 1.681 1.682 1.681Zm6.27.921a3.486 3.486 0 0 1-3.482-3.482 3.486 3.486 0 0 1 3.482-3.482 3.486 3.486 0 0 1 3.483 3.482 3.46 3.46 0 0 1-.362 1.543h-3.12a.509.509 0 1 0 0 1.018h2.355a3.469 3.469 0 0 1-2.356.921Zm6.022-5.025h.248c.366 0 .664.298.664.664v1.759a.664.664 0 0 1-.664.663h-.248v-3.086ZM13.72 16.1c0-.366.298-.664.664-.664h.248v3.086h-.248a.665.665 0 0 1-.664-.663V16.1Z"
											/>
										</svg>
									</div>
								</Link>
							</li>
							<li>
								<Link to="mailto:IT-help@Dcenter.com">
									<div>
										<h3>البريد الالكتروني : </h3>
										<p>IT-help@Dcenter.com</p>
									</div>
									<div>
										<svg
											width="40"
											height="41"
											viewBox="0 0 40 41"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="20"
												cy="20.5"
												r="20"
												fill="#FFE4AF"
												fill-opacity="0.44"
											/>
											<path
												d="M13 18.9955C13 21.294 13 24.8812 13 24.8812C13 24.8812 13 24.8812 13 24.8812C13 25.7753 13.7555 26.5 14.6875 26.5H24.8125C25.7445 26.5 26.5 25.7753 26.5 24.8812V18.6156M13 18.9955C13 18.7165 13.1499 18.4571 13.3966 18.3092L19.75 14.5L26.0699 17.9102C26.3356 18.0535 26.5 18.3232 26.5 18.6156M13 18.9955C13.3375 18.9955 19.75 22.9985 19.75 22.9985L26.5 18.6156"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Login;
