import { Stack } from "@chakra-ui/react";
import Post from "../Display/Post";

const SearchResults = ({ results }) => {
    return (
        <Stack spacing={5} my="2rem">
            {results?.map((r, i) => {
                console.log("each post from search results component ", r)
                return <Post key={`imageSearch${r._id}${i}`}
                    post={r}
                />
            })}
        </Stack>
    );
};

export default SearchResults;