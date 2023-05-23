import React from 'react';
import DarkModeButton from './DarkModeButton';
import TabButton from './TabButton';

export default function Header() {
    return (
        <div>
            <DarkModeButton />
            <TabButton>All</TabButton>
            <TabButton>Active</TabButton>
            <TabButton>Compeleted</TabButton>
        </div>
    )
}

