import React, { useEffect, useState } from 'react';
import SubList from './subListRender';

const Controller = () => {


    const [posts, setPosts] = useState();
    const [postDisplay, setPostDisplay] = useState();

    return (
        <SubList />
    )


}

export default Controller;