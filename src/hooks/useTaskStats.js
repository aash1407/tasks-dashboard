import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const useTaskStats = () => {
    const { tasks } = useContext(TaskContext);
    const [progressWidth, setProgressWidth] = useState(0);

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    const completionRate = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;

    useEffect(() => {
        setProgressWidth(completionRate);
    }, [completionRate]);

    return {
        totalTasks,
        completedTasks,
        pendingTasks,
        completionRate,
        progressWidth
    };
};

export default useTaskStats;
