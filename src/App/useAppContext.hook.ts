import { AppContext, AppState, ContentActions, HeaderActions } from "./appContext.context";
import { useState } from "react";

const loadRemote = (): Promise<AppState> => {
    return new Promise((resolve, _) => {
        setTimeout(()=>{
            resolve({
                userName: "RemoteUser",
                title: "RemoteTitle"
            });
        }, 2000);
    })
}

export function useAppContext(): AppContext {
    const [appState, setAppState] = useState<AppState>({title: "App title", userName:"UserName"});

    const content: ContentActions = {
        updateState: (model: AppState) => {
            setAppState({...model});
        }
    }

    const header: HeaderActions = {
        loadRemoteState: () => {
            loadRemote().then((remote)=>{
                setAppState(remote);
            })
        }
    }

    return {
        state: appState,
        actions: {
            content,
            header
        }
    }
}