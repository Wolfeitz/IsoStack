import React from 'react';

let CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, {this.props.name}! I am a CommentBox.
      </div>
    );
  }
});
export default CommentBox;