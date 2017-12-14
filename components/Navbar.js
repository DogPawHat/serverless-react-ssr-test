import React from 'react';
import Link from 'next/link';

export default () =>
    <nav>
        <Link href='/dev'>
            <a>Home</a>
        </Link>
        <span> </span>
        <Link href='/dev/a'>
            <a>Page A</a>
        </Link>
        <span> </span>
        <Link href='/dev/b'>
            <a>Page B</a>
        </Link>
    </nav>