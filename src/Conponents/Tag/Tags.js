import React from 'react';

const Tags = (Tags, index) => {

    return (
        <div className='Tags'>
            {
                Tags.tags?.map((tag, index) =>
                (
                    <div key={index} className='tag'>{tag}</div>
                ))
            }
        </div>
    );
};

export default Tags;