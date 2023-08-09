import React, { useEffect, useRef, useState } from 'react';

const Tags = (Tags, index) => {

    return (
        <div className='Tags'>
            {
                Tags.tags?.map((tag, index) =>
                (
                    <div className='tag'>{tag}</div>
                ))
            }
        </div>
    );
};

export default Tags;