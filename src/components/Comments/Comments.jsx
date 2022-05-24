import { useEffect, useState } from 'react';
import { useAuth } from '../../context';
import { getComments } from '../../utils';
import styles from './Comments.module.css';

const Comments = () => {
	const [comment, setComment] = useState('');
	const {
		authState: { token, user },
	} = useAuth();
	useEffect(() => {
		getComments(token);
	}, []);

	console.log(user);

	return (
		<div className={styles.commentContainer}>
			<span className={styles.title}>Comments</span>
			<div className={styles.newCommentBox}>
				<input
					rows="3"
					className={styles.commentInput}
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
				<div className={styles.commentBoxButton}>
					{comment ? (
						<button
							className={`btn btn-primary ${styles.cancelBtn}`}
							onClick={() => setComment('')}
						>
							Cancel
						</button>
					) : null}
					<button className="btn btn-info" disabled={!comment}>
						Add
					</button>
				</div>
			</div>
			<div className={styles.comment}>
				<div>
					<span>
						{user.firstName} {user.lastName}
					</span>
					<p>new comment</p>
				</div>
				<div className={styles.commentBtns}>
					<button title="Edit">
						<i className="fa-solid fa-pen-to-square"></i>
					</button>
					<button title="Delete">
						<i className="fa-solid fa-trash-can"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export { Comments };
