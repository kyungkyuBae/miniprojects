import React from 'react';

export default function Header({filters,handleChangeFilter}) {
    return (
        <header>
            <ul>
                {
                    filters.map(filter=>
                    <li>
                        <button onClick={()=>{handleChangeFilter(filter)}}>{filter}</button>
                    </li>)
                }
            </ul>
        </header>
    );
}

