import { useState } from 'react'

const ReadMore = ({ children }: any, fontStyle: string) => {
    const text = children;
    console.log("rrrr", text.length);

    const more = (text.length > 120) ? true : false
    console.log("fffff", more);

    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="">
            {isReadMore ? text.slice(0, 215) : text}{(more && isReadMore) ? "... " : ""}
            {/* {isReadMore ? text.slice(0, 120) : text}{(more && isReadMore) ? "... " : ""} */}
            <u>
                <span onClick={toggleReadMore}>
                    {more && (isReadMore ? "Read More" : " Read Less")}
                </span>
            </u>
        </p>
    );
};

export default ReadMore;