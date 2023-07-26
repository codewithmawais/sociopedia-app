import "./posts.scss";
import Post from "components/post/Post";
import { useQuery } from 'react-query'
import { makeRequest } from "../../axios";

const Posts = () => {
    const { isLoading, error, data } = useQuery(["posts"], () =>
        makeRequest.get("/posts").then((res) => {
            return res.data;
        })
    );

    return (
        <div className="posts">
            {error
                ? "Something went wrong!"
                : isLoading
                ? "loading"
                :  data.map((post) => <Post post={post} key={post.id} />)
            }
        </div>
    );
};

export default Posts;