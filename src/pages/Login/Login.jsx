import { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<form className={` ${styles.form}`}>
			<h3>Login</h3>
			<div className={`input-container ${styles.inputContainer}`}>
				<label htmlFor="email" className={styles.firstLabel}>
					Email Address
				</label>
				<input type="email" id="email" name="email" placeholder="johndoe@gmail.com" />
			</div>
			<div className={`input-container ${styles.passwordContainer} ${styles.inputContainer}`}>
				<label htmlFor="password">Password</label>
				<input
					type={passwordVisible ? 'text' : 'password'}
					id="password"
					name="password"
					placeholder="************"
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
			<button className={`${styles.btn} ${styles.primaryBtn}`}>Login</button>
			<div className={styles.seperator}></div>
			<button className={`${styles.btn} ${styles.secondaryBtn}`}>Signup</button>
		</form>
	);
};

export { Login };
