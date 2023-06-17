import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import { getSearchPosts } from "../../../services/reqPost";
import { getUser } from "../../../services/reqUser";
import Loader from "../../../components/Loader/Loader";
import H4 from "../../../components/Text/H4";
import InfoText from "../../../components/Text/InfoText";

const SearchDisplay = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setLoading] = useState(null);

    const search = async (query) => {
        const result = await getSearchPosts(query);
        if (result.status === 200) {
            let counter = 0;
            result.data.posts.forEach(async (post, index, array) => {
                counter++;
                const user = await getUser(post.userOwner);
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
            <H4 text="Search" />
            <SearchBar onChange={setSearchQuery} />
            {isLoading ? <Loader />
                :
                results?.length > 0 ?
                    <SearchResults results={results} />
                    : searchQuery.length > 0 && !isLoading && <InfoText text="No results. Try again!" />
            }
        </>
    );
};

export default SearchDisplay;