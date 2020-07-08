import React, { useContext } from "react";

import styles from "./Header.module.scss";
import { appContext } from "../appContext.context";

const { title: titleClass, userName: userNameClass, container: containerClass } = styles;

interface HeaderProps {
    userName: string;
    title: string;
}

export function Header() {
    const { state: {title, userName}, actions: { header: { loadRemoteState } } } = useContext(appContext);

    return (
        <div className={containerClass}>
            <div className={titleClass}>{title}</div>
            <div className={userNameClass}>
                <div>User: {userName}</div>
                <button onClick={loadRemoteState}>Load "remote" state</button>
            </div>
        </div>
    );
}