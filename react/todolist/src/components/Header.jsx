import React from 'react';
import DarkModeButton from './DarkModeButton';
import TabButton from './TabButton';

export default function Header() {
    return (
        <div className='flex justify-between px-2 bg-slate-950 rounded-t-xl'>
            <DarkModeButton />
            <div>
            <TabButton value="All"/>
            <TabButton value="Active"/>
            <TabButton value="Completed"/>
            </div>
        </div>
    )
}

