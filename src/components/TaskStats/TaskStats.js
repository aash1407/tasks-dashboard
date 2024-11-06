import React from 'react';
import useTaskStats from '../../hooks/useTaskStats';
import styles from './TaskStats.module.css';

const TaskStats = () => {
    const { totalTasks, completedTasks, pendingTasks, completionRate, progressWidth } = useTaskStats();

    return (
        <div className={styles.taskStats}>
            <div className={styles.statContainer}>
                <div className={`${styles.statCard} ${styles.total}`}>
                    <h4>Total Tasks</h4>
                    <p>{totalTasks}</p>
                </div>
                <div className={`${styles.statCard} ${styles.completed}`}>
                    <h4>Completed Tasks</h4>
                    <p>{completedTasks}</p>
                </div>
                <div className={`${styles.statCard} ${styles.pending}`}>
                    <h4>Pending Tasks</h4>
                    <p>{pendingTasks}</p>
                </div>
            </div>

            <div className={styles.progressBar}>
                <div
                    className={styles.progress}
                    style={{ width: `${progressWidth}%`, backgroundColor: progressWidth === 100 ? '#28a745' : '#007bff' }}
                >
                    {completionRate}%
                </div>
            </div>
        </div>
    );
};

export default TaskStats;
