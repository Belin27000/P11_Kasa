import React from 'react';

const Tags = ({ tags }) => {

    return (
        <div className='Tags'>
            {
                tags.map((tag, index) =>
                (
                    <div key={index} className='tag'>{tag}</div>
                ))
            }
        </div>
    );
};

export default Tags;