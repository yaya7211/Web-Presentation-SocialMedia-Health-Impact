import XPost from "./XPost";

function XContainer({tweetsData}) {
    return ( 
        <div className="X-container">
            {tweetsData.map(tweetData => 
                <XPost {...tweetData}/>
            )}
        </div>
     );
}

export default XContainer;