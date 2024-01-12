"use client";
// import React, {useEffect, useState} from 'react';
import {useEffect, useState} from 'react';
import PostContainer from "@/components/post/PostContainer";
import {Post} from "@/objets/post";

const PostsPage = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        // Récupère les publications depuis la base de données
        // ...
        // Met à jour l'état des publications
        setPosts([
            {
                id: "1234567890",
                title: "Nouvelle opportunité de carrière",
                content: "Je suis ravi de vous annoncer que j'ai été embauché en tant que développeur logiciel chez Google. Je suis très excité de commencer ce nouveau chapitre de ma carrière.",
            },
            {
                id: "9876543210",
                title: "Nouveau projet professionnel",
                content: "Je suis en train de lancer ma propre entreprise, une start-up spécialisée dans la technologie blockchain. Je suis très enthousiaste à l'idée de relever ce nouveau défi.",
            },
        ]);
    }, []);

    return (
        <div className="container mx-auto mt-8 p-4 w-3/4">
            <h1 className="text-3xl font-bold mb-4">List of Posts</h1>
            {posts.map((post, index) => (
                <PostContainer key={index} title={post.title} content={post.content} />
            ))}
        </div>
    );
};

export default PostsPage;