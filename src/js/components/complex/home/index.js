import React, { useLayoutEffect, useState } from 'react';

import Column from '../../simple/column';
import BtnNextPhotos from '../../so-simple/button';
import BtnUp from '../../so-simple/button';
import BtnDown from '../../so-simple/button';
import './home.css';

// tripleFeed
// propsNextPhotos
// propsBtnUp
// propsNavVisible
// propsBtnDown

export default props => {
    const elemTop = React.createRef();
    const elemBottom = React.createRef();

    const useWindowHeight = () => {
        const [windowHeight, setWindowHeight] = useState(
            document.documentElement.clientHeight - 58,
        );
        useLayoutEffect(() => {
            const updateHeight = () => {
                setWindowHeight(document.documentElement.clientHeight - 58);
            };
            window.addEventListener('resize', updateHeight);
            updateHeight();
            return () => window.removeEventListener('resize', updateHeight);
        }, []);
        return windowHeight;
    };

    return (
        <>
            <span ref={elemTop} style={{ height: '1px' }} />
            <div className='content-base'>
                {props.tripleFeed.map((item, index) => {
                    return (
                        <Column
                            photosList={item}
                            likedPhotosId={props.likedPhotosId}
                            key={index}
                        />
                    );
                })}
            </div>
            <span ref={elemBottom} />
            <BtnNextPhotos {...props.propsNextPhotos} />
            <BtnUp
                {...props.propsBtnUp}
                onClick={() => {
                    elemTop.current.scrollIntoView({ behavior: 'smooth' });
                }}
                styleComponent={{
                    left: `${document.documentElement.clientWidth / 2 + 490}px`,
                    display: `${props.propsNavVisible}`,
                }}
            />
            <BtnDown
                {...props.propsBtnDown}
                onClick={() => {
                    elemBottom.current.scrollIntoView({ behavior: 'smooth' });
                }}
                styleComponent={{
                    left: `${document.documentElement.clientWidth / 2 + 490}px`,
                    top: `${useWindowHeight()}px`,
                    display: `${props.propsNavVisible}`,
                }}
            />
        </>
    );
};
