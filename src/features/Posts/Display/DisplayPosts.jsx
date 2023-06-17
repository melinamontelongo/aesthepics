import { useGetAllPostsPagination } from '../../../hooks/useGetPosts';
import { Stack } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from './Post';
import Loader from '../../../components/Loader/Loader';
import InfoText from '../../../components/Text/InfoText';

const DisplayPosts = () => {
    const { posts, isError, hasMore, getAllPostsState } = useGetAllPostsPagination();
    return (
        <>{isError && <InfoText text="There was an error loading posts. Try again later!" />}
            {!isError && posts?.length > 0 ?
                <InfiniteScroll
                    dataLength={posts.length}
                    next={() => getAllPostsState()}
                    style={{ overflow: "hidden" }}
                    hasMore={hasMore}
                    loader={<Loader />}
                    endMessage={<InfoText text="It seems like you have reached the end." />}
                >
                    <Stack spacing={5} my="2rem">
                        {posts?.map((post, i) => {
                            return (
                                <Post
                                    key={`feedPost${post._id}${i}`}
                                    post={post}
                                />
                            )
                        })}
                    </Stack>
                </InfiniteScroll>
                :
                !isError && !hasMore && <InfoText text="Seems like there are no posts to display." />
            }

        </>
    );
};

export default DisplayPosts;