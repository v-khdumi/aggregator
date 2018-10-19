import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
    return (
        <div className="post">
            {

            }
            <div className="post__image" style={{ backgroundImage: `url(${props.image})`}}>

            </div>
            <div className="post__info">
                <h2 className="post__title">{props.title}</h2>
                <p className="post__description">
                    {props.description}
                </p>
            </div>
        </div>
    );
};

Post.propTypes = {

};

export default Post;
