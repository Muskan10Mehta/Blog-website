import React from 'react';
//import SideBar from '../../common/components/sidebar';
import SinglePost from '../../common/components/singlepost';
import './styles';
import { SytledViewPostArea } from './styles';

export default function ViewPost() {
    return (
        <>
            <SytledViewPostArea>
                <SinglePost />
            </SytledViewPostArea>
        </>
    );
}
