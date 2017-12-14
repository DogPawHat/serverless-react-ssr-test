import React from 'react';
import Link from 'next/link';

export default () =>
    <nav>
        <Link href='/'>
            <a>Home</a>
        </Link>
        <span> </span>
        <Link href='/a'>
            <a>Page A</a>
        </Link>
        <span> </span>
        <Link href='/b'>
            <a>Page B</a>
        </Link>
    </nav>