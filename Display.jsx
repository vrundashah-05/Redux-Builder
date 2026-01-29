import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAction, editAction } from './Action';
import './Display.css';




const Display = () => {
  const data = useSelector((store) => store.users || []);
  const dispatch = useDispatch();

  function deleteData(i) {
    dispatch(deleteAction(i));
  }

  function editData(i) {
    const newValue = prompt('Enter New Username');
    if (newValue) {
      dispatch(editAction(i, newValue));
    }
  }

  return (
    <div className="display-container">
      <h2 className="title">User List</h2>

      {data.length === 0 ? (
        <p className="empty">No users found</p>
      ) : (
        data.map((el, i) => (
          <div key={i} className="user-card">
            <span className="username">{el.username}</span>

            <div className="actions">
              <button className="edit-btn" onClick={() => editData(i)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteData(i)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Display;