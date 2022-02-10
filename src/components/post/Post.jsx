import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="img/img1.png" alt=""/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">The pain itself is a lot of pain, it is enhanced by lipogenesis. Is assumed
        the architect avoids giving up his services? Labor refuses greatness
        shun, condemn the present flatterers, those who desire reason
        and, for some, to refuse the arduous practice of hatred?</p>
        </div>
    )
}
