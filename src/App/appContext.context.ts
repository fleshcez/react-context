import { ReactNode, createContext } from "react";

export interface AppState {
    title: string;
    userName: string;
}

export interface ContentActions {
    updateState: (model: AppState) => void;
}

export interface HeaderActions {
    loadRemoteState: () => void;
}

interface AppActions {
    content: ContentActions;
    header: HeaderActions;
}

export interface AppContext {
    state: AppState;
    actions: AppActions;
}

export const appContext = createContext<AppContext>({} as any);
export const AppContext = appContext.Provider;

interface AppContextProps {
    children: ReactNode;
}

