import React, { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import styles from './AddTaskForm.module.css';

const AddTaskForm = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const { addTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskTitle.trim()) {
            addTask({ id: Date.now(), title: taskTitle, completed: false });
            setTaskTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.addTaskForm}>
            <input
                type="text"
                placeholder="Add a new task..."
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className={styles.input}
            />
            <button type="submit" className={styles.btnPrimary}>
                Add Task
            </button>
        </form>
    );
};

export default AddTaskForm;
