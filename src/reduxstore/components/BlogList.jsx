import React, { useEffect , useRef } from 'react';
import Swiper from 'swiper';

import 'swiper/swiper-bundle.css';


const BlogList = ({ posts, loading, error }) => {

const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
        new Swiper(swiperRef.current, {
            // Swiper options here
            
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
        });
        }
    }, [posts]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container">
        {posts.map(post => (
            <div key={post.id} className="card my-3">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                    {post.images && 
            <div ref={swiperRef} className="swiper-container swiper " >
                <div className="swiper-wrapper ">
                    {post.images.map((image, index) => (
                    <div key={index} className="swiper-slide">
                        <img 
                        style={{ width: 'auto', maxHeight: '600px' }}
                        className="d-block w-100 "
                        src={image}
                        alt={`Slide ${index}`}
                        />
                    </div>
                    ))}
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
            }
                <p className="card-text">{post.body}</p>
                <div className="card-subtitle mb-2 text-muted">
                <p className="mb-1">Author: {post.author}</p>
                <p>Email: {post.email}</p>
                </div>
                <div className="card-text">
                {post.comments && post.comments.length > 0 && (
                    <h3 className="mt-3">Comments:</h3>
                )}
                {post.comments &&
                    post.comments.map(comment => (
                    <div key={comment.id} className="comment mb-2">
                        <p className="mb-0">{comment.body}</p>
                        <p className="card-subtitle mt-1 text-muted">
                        By: {comment.author}
                        </p>
                    </div>
                    ))}
                </div>
            </div>
            </div>
        ))}
    </div>
    );
};

export default BlogList;
