import React from 'react';

const ListItem = ({task, taskdateAndTime, id, deleteTask}) => {

    function delTask(){
    deleteTask(id)
    }

    function showChange(){
        console.log('changed')
    }

    return (
        <div className='listItem' onDoubleClick={showChange}>
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