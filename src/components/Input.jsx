import React, { useState } from 'react';

const Input = ({addNewTask}) => {

    const [task, setTask] = useState('')
    const [dayAndTime, setDayAndTime] = useState('')

    function createNewTask(){
        const newTask = {
            id: Math.random() * 10000,
            task: task,
            dateAndTime: dayAndTime || 'no date',
        }
        if(newTask.task) addNewTask(newTask) 
    }
    
    return (
        <div className='inputContainer'>
            <label htmlFor="taskInput">Task:</label>
            <input type="text" id='taskInput' placeholder='Add task' maxLength='60' onChange={(e)=> setTask(e.target.value)}/>
            <label htmlFor="dayAndTimeInput">Day and Time:</label>
            <input type="text" id='dayAndTimeInput' placeholder='Add day and time' maxLength='60' onChange={(e)=> setDayAndTime(e.target.value)}/>
            <div className='setReminderContainer'>
                <label htmlFor="setReminder" className='setRem'>Set reminder</label>
                <input type="checkbox" id='setReminder'/>
            </div>
            <button type='button' className='addBtn' onClick={createNewTask}>Add Task</button>
        </div>
    );
};

export default Input;