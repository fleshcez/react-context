import React from "react";
import styles from "./App.module.scss";
import { Header } from "./Header/Header";
import { Content } from "./Content/Content";
import { AppContext } from "./appContext.context";
import { useAppContext } from "./useAppContext.hook";

const { app: appClass, header: headerClass, content: contentClass } = styles;

function App() {
    const context = useAppContext();

    return (
        <AppContext value={context}>
            <div className={appClass}>
                <div className={headerClass}>
                    <Header/>
                </div>
                <div className={contentClass}>
                    <Content />
                </div>
            </div>
        </AppContext>
    );
}

export default App;
