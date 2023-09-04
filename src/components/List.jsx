import React from 'react';
import ListItem from './ListItem';

const List = ({tasks, deleteTask,}) => {
    console.log(tasks)

    return (
        <div>
            {tasks.map(task => {
                return <ListItem key = {task.id} id = {task.id} task = {task.task} taskdateAndTime = {task.dateAndTime} deleteTask = {deleteTask} />
            })}
        </div>
    );
};

export default List;