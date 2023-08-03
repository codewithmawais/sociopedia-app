import "./posts.scss";
import Post from "components/post/Post";
import { useQuery } from 'react-query'
import { makeRequest } from "../../axios";

const Posts = ({ userId }) => {
    const { isLoading, error, data } = useQuery(["posts"], () =>
        makeRequest.get("/posts?userId=" + userId).then((res) => {
            return res.data;
        })
    );

    return (
        <div className="posts">
            {error
                ? "Something went wrong!"
                : isLoading
                ? "loading"
                :  data.map((post, index) => <Post post={post} key={index} />)
            }
        </div>
    );
};

export default Posts;