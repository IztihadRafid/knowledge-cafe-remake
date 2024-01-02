import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/3 bg-slate-100 m-5 p-5 rounded-xl">
            <div>
                <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            </div>

            <h2 className="text-3xl">Bookmarks: {bookmarks.length}</h2>
           {
            bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};

export default Bookmarks;