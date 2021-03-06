import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth, useComment } from '../../context';
import { getComments, newComment, deleteComment, editComment } from '../../utils';
import styles from './Comments.module.css';

const Comments = ({ _id }) => {
	const [comment, setComment] = useState('');
	const [isEditing, setIsEditing] = useState('');
	const [editedComment, setEditedComment] = useState('');
	const {
		authState: { token, user },
	} = useAuth();
	const {
		commentState: { comments },
		commentDispatch,
	} = useComment();
	const navigate = useNavigate();

	const postComments = comments.find((comment) => comment._id === _id);

	useEffect(() => {
		getComments(token, commentDispatch);
	}, []);

	const newCommentHandler = () => {
		if (token) {
			newComment(_id, token, comment, commentDispatch, setComment);
		} else {
			toast.error('You need to login');
			navigate('/login');
		}
	};

	const deleteCommentHandler = (note) => {
		if (token) {
			deleteComment(_id, token, note, commentDispatch);
		} else {
			toast.error('You need to login');
			navigate('/login');
		}
	};

	const editCommentHandler = async (note) => {
		await editComment(_id, token, note, commentDispatch);
		setIsEditing('');
	};

	const editBtnHandler = (_id) => {
		if (token) {
			setIsEditing(_id);
		} else {
			toast.error('You need to login');
			navigate('/login');
		}
	};

	return (
		<div className={styles.commentContainer}>
			<span className={styles.title}>Comments</span>
			<div className={styles.newCommentBox}>
				<input
					rows="3"
					className={`${styles.commentInput} ${styles.newCommentInput}`}
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
							{isEditing === postComment._id ? (
								<>
									<input
										className={styles.commentInput}
										type="text"
										defaultValue={postComment.note}
										onChange={(e) => setEditedComment(e.target.value)}
									/>
									<div className={styles.commentBtns}>
										<button
											className={`btn btn-primary ${styles.cancelBtn}`}
											title="update"
											onClick={() =>
												editCommentHandler({ _id: postComment._id, note: editedComment })
											}
										>
											Update
										</button>
										<button
											className={`btn btn-primary ${styles.cancelBtn}`}
											title="cancel"
											onClick={() => {
												setEditedComment('');
												setIsEditing(false);
											}}
										>
											Cancel
										</button>
									</div>
								</>
							) : (
								<div>
									<span>
										{user.firstName} {user.lastName}
									</span>
									<p>{postComment.note}</p>
								</div>
							)}

							<div className={styles.commentBtns}>
								{isEditing === postComment._id ? null : (
									<>
										<button
											title="Edit"
											className="btn btn-primary"
											onClick={() => editBtnHandler(postComment._id)}
										>
											Edit
										</button>
										<button
											title="Delete"
											className="btn btn-primary"
											onClick={() => deleteCommentHandler({ _id: postComment._id })}
										>
											Delete
										</button>
									</>
								)}
							</div>
						</div>
				  ))
				: null}
		</div>
	);
};

export { Comments };
