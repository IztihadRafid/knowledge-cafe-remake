
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className="bg-slate-100 m-5 p-4">
            <h2 className="text-2xl">{title}</h2>
        </div>
    );
};

export default Bookmark;