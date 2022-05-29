import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../context';
import { authHandler } from '../../utils/auth-handler';
import styles from '../Login/Login.module.css';

const Signup = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [user, setUser] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: '',
	});
	const [checkbox, setCheckbox] = useState(false);
	const navigate = useNavigate();
	const { authDispatch } = useAuth();

	const inputHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUser((prev) => ({ ...prev, [name]: value }));
	};

	const signupHandler = (e) => {
		if (checkbox && user.firstName && user.email && user.password && user.confirmPassword) {
			e.preventDefault();
			if (user.password === user.confirmPassword) {
				authHandler({ authType: 'signup', user, setUser, navigate, authDispatch });
			} else {
				toast.error('passwords should be same');
			}
		}
	};

	return (
		<form className={` ${styles.form}`}>
			<h3>Signup</h3>
			<div className={styles.nameContainer}>
				<div className={`input-container ${styles.inputContainer}`}>
					<label htmlFor="first-name" className={styles.firstLabel}>
						First Name
					</label>
					<input
						type="text"
						id="first-name"
						name="firstName"
						placeholder="John"
						value={user.firstName}
						onChange={inputHandler}
						required
					/>
				</div>
				<div className={`input-container ${styles.inputContainer}`}>
					<label htmlFor="last-name" className={styles.firstLabel}>
						Last Name
					</label>
					<input
						type="text"
						id="last-name"
						name="lastName"
						placeholder="Doe"
						value={user.lastName}
						onChange={inputHandler}
					/>
				</div>
			</div>
			<div className={`input-container ${styles.inputContainer}`}>
				<label htmlFor="email" className={styles.firstLabel}>
					Email
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
			<div className={`input-container ${styles.passwordContainer} ${styles.inputContainer}`}>
				<label htmlFor="confirm-password">Confirm Password</label>
				<input
					type={passwordVisible ? 'text' : 'password'}
					id="confirm-password"
					name="confirmPassword"
					placeholder="************"
					value={user.confirmPassword}
					onChange={inputHandler}
					required
				/>
			</div>
			<div className={`checkbox-container ${styles.checkboxContainer}`}>
				<input
					type="checkbox"
					name="tandc"
					id="tandc"
					className={styles.checkbox}
					value={checkbox}
					onChange={() => setCheckbox((prev) => !prev)}
					required
				/>
				<label htmlFor="tandc">Accept the terms and conditions</label>
			</div>
			<button
				className={`${styles.btn} ${styles.primaryBtn}`}
				type="submit"
				onClick={signupHandler}
			>
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
