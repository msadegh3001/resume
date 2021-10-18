import React, { Component } from "react";

const Like = props => {
  const _class = props.likeState?'':'-o';
    return <span className={'fa fa-heart'+_class} onClick={props.LikeClick}></span>
}
export default Like;
