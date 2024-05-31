import InstagramPost from "./InstagramPost";

function InstagramContainer({postsData}) {
    return ( 
        <div className="instagram-container">
            {postsData.map(postData => 
                <InstagramPost {...postData} />
            )}
        </div>
     );
}

export default InstagramContainer;