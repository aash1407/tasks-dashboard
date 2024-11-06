import React, { useContext } from 'react';
import Task from '../Task/Task';
import { TaskContext } from '../../context/TaskContext';
import styles from '../TaskList/TaskList.module.css';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <div className={styles.taskListContainer}>
            {tasks.length ? (
                tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`${styles.taskItem} ${task.completed ? styles.taskCompleted : styles.taskIncomplete}`}
                    >
                        <Task task={task} />
                    </div>
                ))
            ) : (
                <p>No tasks available. Start by adding some!</p>
            )}
        </div>
    );
};

export default TaskList;
