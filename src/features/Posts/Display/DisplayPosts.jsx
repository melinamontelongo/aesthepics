import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetAllPostsPagination } from '../../../hooks/useGetPosts';
import Post from './Post';
import { Stack } from '@chakra-ui/react';
import Loader from '../../../components/Loader/Loader';
import { useEffect, useState } from 'react';

const DisplayPosts = () => {
    const { posts, isError, hasMore, getAllPostsState } = useGetAllPostsPagination();

    return (
        <>
            {posts?.length > 0 ?
                <InfiniteScroll
                    dataLength={posts.length}
                    next={() => getAllPostsState()}
                    style={{ overflow: "hidden" }}
                    hasMore={hasMore}
                    loader={<Loader />}
                    endMessage={<p>No more data to load.</p>}
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
                <Loader />
            }
            {isError && <p>There was an error loading posts...</p>}
        </>
    );
};

export default DisplayPosts;