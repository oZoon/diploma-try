"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { Link } from "react-router-dom";
// import { PHOTO_WIDTH, URL_USER } from 'lib/constants';
// import AuthorProfileLink from 'simple/authorProfileLink';
// import LikeData from 'simple/likeData';
// import PublicDate from 'simple/publicDate';
// import './photo.css';
var _default = function _default(props) {
  console.log(props); // const id = props.history.location.search.length ? props.history.location.search.split('=')[1] : props.history.location.pathname.split('/').length == 3 ? props.history.location.pathname.split('/')[2] : null;

  var id = props.match.params.id;
  console.log(id); // props.history.goBack();

  return null; // return (
  //     <div className="content-card">
  //         <Link
  //             to={`${URL_USER.photos}=${item.id}`}
  //         >
  //             <img
  //                 src={item.urls.small}
  //                 className="image-card"
  //                 height={PHOTO_WIDTH * item.height / item.width}
  //                 width={PHOTO_WIDTH}
  //                 style={{ 'backgroundColor': `${item.color}` }}
  //             />
  //             <span className="opacity-layer-card">
  //                 <LikeData count={item.likes} />
  //                 <PublicDate date={item.updated_at} />
  //             </span>
  //         </Link>
  //         <AuthorProfileLink
  //             username={item.user.username}
  //             imageSrc={item.user.profile_image.small}
  //             name={item.user.name}
  //         />
  //     </div>
  // )
};

exports["default"] = _default;