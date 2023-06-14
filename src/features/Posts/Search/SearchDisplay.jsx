import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import { getSearchPosts } from "../../../services/reqPost";
import { getUser } from "../../../services/reqUser";

const SearchDisplay = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setLoading] = useState(null);

    const search = async (query) => {
        const result = await getSearchPosts(query);
        if (result.status === 200) {
            let counter = 0;
            result.data.posts.forEach(async (post, index, array) => {
                console.log(post)
                counter++;
                const user = await getUser(post.userOwner);
                console.log("user from search", user)
                post.username = user.data.user.username;
                post.profilePic = user.data.user.profilePic;
                if (array.length === counter) setResults([...results, ...result.data.posts]);
            });
        };
    };

    useEffect(() => {
        setLoading(null);
        if (searchQuery?.length > 0) {
            setResults([]);
            setLoading(true);
            const searchTimeout = setTimeout(() => {
                search(searchQuery);
                setLoading(false);
            }, 2000);
            return () => clearTimeout(searchTimeout);
        };
    }, [searchQuery]);

    return (
        <>
            <SearchBar onChange={setSearchQuery}/>
            {isLoading && <p>Loading...</p>}
            <SearchResults results={results} />
        </>
    );
};

export default SearchDisplay;