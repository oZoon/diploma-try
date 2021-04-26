import React from "react";
import './logOut.css';

// onLogOut
// history
export default props => <span className="logout" onClick={() => props.onLogOut(props.history)}>Выход</span>
