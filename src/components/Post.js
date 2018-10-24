import React from 'react';
import PropTypes from 'prop-types';

const Post = ({title, description, image}) => {
    return (
        <div className="post">
            {

            }
            <div className="post__image" style={{ backgroundImage: `url(${image})`}}>

            </div>
            <div className="post__info">
                <h2 className="post__title">{title}</h2>
                <p className="post__description">
                    {description}
                </p>
            </div>
        </div>
    );
};

Post.propTypes = {

};

export default Post;
