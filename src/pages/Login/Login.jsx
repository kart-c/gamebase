import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context';
import { authHandler } from '../../utils/auth-handler';
import styles from './Login.module.css';

const Login = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [user, setUser] = useState({
		email: '',
		password: '',
		rememberMe: false,
	});
	const { authDispatch } = useAuth();
	const navigate = useNavigate();

	const inputHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUser((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const loginHandler = (e) => {
		if (user.email && user.password) {
			e.preventDefault();
			authHandler({ authType: 'login', user, authDispatch, setUser, navigate });
		}
	};

	const guestLoginHandler = () =>
		setUser((prev) => ({
			...prev,
			email: 'adarshbalika@gmail.com',
			password: 'adarshBalika123',
			rememberMe: true,
		}));

	return (
		<form className={` ${styles.form}`}>
			<h3>Login</h3>
			<div className={`input-container ${styles.inputContainer}`}>
				<label htmlFor="email" className={styles.firstLabel}>
					Email Address
				</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="johndoe@gmail.com"
					value={user.email}
					onChange={inputHandler}
					required
				/>
			</div>
			<div className={`input-container ${styles.passwordContainer} ${styles.inputContainer}`}>
				<label htmlFor="password">Password</label>
				<input
					type={passwordVisible ? 'text' : 'password'}
					id="password"
					name="password"
					placeholder="************"
					value={user.password}
					onChange={inputHandler}
					required
				/>
				<button
					className={styles.showPasswordBtn}
					type="button"
					onClick={() => setPasswordVisible((prev) => !prev)}
				>
					<i className={`fa-solid ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
				</button>
			</div>
			<div className={`checkbox-container ${styles.checkboxContainer}`}>
				<input
					type="checkbox"
					name="remember me"
					id="remember-me"
					className={styles.checkbox}
					checked={user.rememberMe}
					onChange={() => setUser((prev) => ({ ...prev, rememberMe: !prev.rememberMe }))}
				/>
				<label htmlFor="remember-me">Remember me</label>
			</div>
			<button
				className={`btn btn-info ${styles.btn} ${styles.guestBtn}`}
				type="button"
				onClick={guestLoginHandler}
			>
				Guest Login
			</button>
			<button className={`${styles.btn} ${styles.primaryBtn}`} type="button" onClick={loginHandler}>
				Login
			</button>
			<div className={styles.seperator}></div>
			<Link to="/signup" className={`${styles.btn} ${styles.secondaryBtn}`}>
				Signup
			</Link>
		</form>
	);
};

export { Login };
