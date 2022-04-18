import { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const inputHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUser((prev) => ({
			...prev,
			[name]: value,
		}));
	};

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
				<input type="checkbox" name="remember me" id="remember-me" className={styles.checkbox} />
				<label htmlFor="remember-me">Remember me</label>
			</div>
			<button className={`${styles.btn} ${styles.primaryBtn}`} type="button">
				Login
			</button>
			<div className={styles.seperator}></div>
			<button className={`${styles.btn} ${styles.secondaryBtn}`} type="button">
				Signup
			</button>
		</form>
	);
};

export { Login };