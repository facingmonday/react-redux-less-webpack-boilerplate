import React, { Component } from 'react';

import Logo from '@/components/Logo';

import style from './Header.less';

class Header extends Component {
    render() {
        return (
            <div className={style.container}>
                <a href="/">
                    <Logo />
                </a>
            </div>
        );
    }
}

export default Header;