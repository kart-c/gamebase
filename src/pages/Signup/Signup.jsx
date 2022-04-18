import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Login/Login.module.css';

const Signup = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<form className={` ${styles.form}`}>
			<h3>Signup</h3>
			<div className={`input-container ${styles.inputContainer}`}>
				<label htmlFor="name" className={styles.firstLabel}>
					Name
				</label>
				<input type="name" id="name" name="name" placeholder="John Doe" />
			</div>
			<div className={`input-container ${styles.inputContainer}`}>
				<label htmlFor="email" className={styles.firstLabel}>
					Email
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
			<div className={`input-container ${styles.passwordContainer} ${styles.inputContainer}`}>
				<label htmlFor="confirm-password">Confirm Password</label>
				<input
					type={passwordVisible ? 'text' : 'password'}
					id="confirm-password"
					name="confirm-password"
					placeholder="************"
				/>
			</div>
			<div className={`checkbox-container ${styles.checkboxContainer}`}>
				<input type="checkbox" name="remember me" id="remember-me" className={styles.checkbox} />
				<label htmlFor="remember-me">Remember me</label>
			</div>
			<button className={`${styles.btn} ${styles.primaryBtn}`} type="button">
				Signup
			</button>
			<div className={styles.seperator}></div>
			<Link to="/login" className={`${styles.btn} ${styles.secondaryBtn}`}>
				Login
			</Link>
		</form>
	);
};

export { Signup };
