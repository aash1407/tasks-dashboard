import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { motion } from 'framer-motion';
import styles from './Task.module.css'; // Import CSS module

const Task = ({ task }) => {
    const { removeTask, toggleTaskCompletion } = useContext(TaskContext);

    return (
        <motion.div
            className={`${styles.taskContainer} ${task.completed ? styles.completedTask : styles.incompleteTask}`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
        >
            {/* Checkbox to mark task as completed */}
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className={styles.checkbox}
            />
            <span className={task.completed ? styles.completedText : ''}>
                {task.title}
            </span>
            <button onClick={() => removeTask(task.id)} className={styles.deleteButton}>
                Delete
            </button>
        </motion.div>
    );
};

export default Task;
