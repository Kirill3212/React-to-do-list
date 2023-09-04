import React, { useState } from 'react';

const ListItem = ({task, taskdateAndTime, id, deleteTask}) => {

    const [finish, setFinish] = useState('white')

    function delTask(){
    deleteTask(id)
    }

    function finTask(){
        console.log('changed')
        setFinish('#6fdc6f')
    }

    return (
        <div className='listItem' style={{backgroundColor: finish}} onDoubleClick={finTask}>
            <div className='listItemContent'>
                <span className='listItemContentTask'>{task}</span>
                <span className='listItemContentDateAndTime'>{taskdateAndTime}</span>
            </div>
            <div>
                <button className='delListBtn' onClick={delTask}>Delete</button>
            </div>
        </div>
    );
};

export default ListItem;