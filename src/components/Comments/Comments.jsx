import { useEffect, useState } from 'react';
import { useAuth, useComment } from '../../context';
import { getComments, newComment, deleteComment } from '../../utils';
import styles from './Comments.module.css';

const Comments = ({ _id }) => {
	const [comment, setComment] = useState('');
	const {
		authState: { token, user },
	} = useAuth();

	const {
		commentState: { comments },
		commentDispatch,
	} = useComment();

	const postComments = comments.find((comment) => comment._id === _id);

	useEffect(() => {
		getComments(token, commentDispatch);
	}, []);

	const newCommentHandler = () => newComment(_id, token, comment, commentDispatch, setComment);

	const deleteCommentHandler = (note) => deleteComment(_id, token, note, commentDispatch);

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
					<button className="btn btn-info" disabled={!comment} onClick={newCommentHandler}>
						Add
					</button>
				</div>
			</div>

			{postComments?.vidNotes?.length > 0
				? postComments.vidNotes.map((postComment) => (
						<div className={styles.comment} key={postComment._id}>
							<div>
								<span>
									{user.firstName} {user.lastName}
								</span>
								<p>{postComment.note}</p>
							</div>
							<div className={styles.commentBtns}>
								<button title="Edit">
									<i className="fa-solid fa-pen-to-square"></i>
								</button>
								<button
									title="Delete"
									onClick={() => deleteCommentHandler({ _id: postComment._id })}
								>
									<i className="fa-solid fa-trash-can"></i>
								</button>
							</div>
						</div>
				  ))
				: null}
		</div>
	);
};

export { Comments };
