import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

const mockData = {
    users: [],
    posts: [],
    comments: []
};

const fromMockDatabase = async (query) => {
    // Mock database query
    return mockData[query.table];
};

// Hooks for User table
export const useUsers = () => useQuery({
    queryKey: ['users'],
    queryFn: () => fromMockDatabase({ table: 'users' }),
});

export const useAddUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newUser) => {
            mockData.users.push(newUser);
            return newUser;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedUser) => {
            const index = mockData.users.findIndex(user => user.id === updatedUser.id);
            if (index !== -1) {
                mockData.users[index] = updatedUser;
            }
            return updatedUser;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (userId) => {
            mockData.users = mockData.users.filter(user => user.id !== userId);
            return userId;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

// Hooks for Post table
export const usePosts = () => useQuery({
    queryKey: ['posts'],
    queryFn: () => fromMockDatabase({ table: 'posts' }),
});

export const useAddPost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newPost) => {
            mockData.posts.push(newPost);
            return newPost;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
        },
    });
};

export const useUpdatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedPost) => {
            const index = mockData.posts.findIndex(post => post.id === updatedPost.id);
            if (index !== -1) {
                mockData.posts[index] = updatedPost;
            }
            return updatedPost;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
        },
    });
};

export const useDeletePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (postId) => {
            mockData.posts = mockData.posts.filter(post => post.id !== postId);
            return postId;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
        },
    });
};

// Hooks for Comment table
export const useComments = () => useQuery({
    queryKey: ['comments'],
    queryFn: () => fromMockDatabase({ table: 'comments' }),
});

export const useAddComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newComment) => {
            mockData.comments.push(newComment);
            return newComment;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};

export const useUpdateComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedComment) => {
            const index = mockData.comments.findIndex(comment => comment.id === updatedComment.id);
            if (index !== -1) {
                mockData.comments[index] = updatedComment;
            }
            return updatedComment;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};

export const useDeleteComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (commentId) => {
            mockData.comments = mockData.comments.filter(comment => comment.id !== commentId);
            return commentId;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};