import { FaBeer } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author_img,author,posted_date,reading_time,hashtags} = blog
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-6" src={cover} alt={`cover picture of title ${title}`} />
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <p className=" text-2xl">{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="">
                    <span className="m-2">{reading_time} min read</span>
                    <button className="text-blue-400 text-2xl" onClick={()=>handleAddToBookmark(blog)}><FiBookmark></FiBookmark></button>
                </div>
            </div>
            <h1 className="text-4xl">{title}</h1>
            <p>
                {
                    hashtags.map((hash,idx)=> <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button className="text-blue-400" onClick={()=>handleMarkAsRead(id,reading_time)}>Mark as Read</button>
        </div>
    );
};

export default Blog;