import React, { useEffect, useState } from 'react';

const Tags = (Tags) => {
    // console.log(Tags.tags);
    const [tags, setTags] = useState([])


    useEffect(() => {


        setTags(Tags.tags)


    }, [])

    console.log(tags);
    return (
        <div className='Tags'>
            {
                tags?.map(tag =>
                (
                    <div className='tag'>{tag}</div>
                ))
            }
        </div>
    );
};

export default Tags;