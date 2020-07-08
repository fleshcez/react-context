import styles from "./Form.module.scss";
import React, { useEffect, useState, useContext } from "react";
import { TextInput } from "./TextInput/TextInput";
import { appContext } from "../../appContext.context";

const { form: formClass, entry: entryClass } = styles;

interface FormModel {
    title: string;
    userName: string;
}

const emptyFormModel = {
    title: "",
    userName: ""
};

function useForm() {
    const { state, actions: { content: { updateState } } } = useContext(appContext);
    const [model, setModel] = useState<FormModel>(emptyFormModel);

    useEffect(() => {
        setModel(state);
    }, [state]);

    const onSubmit = () => {
        updateState(model);
    }

    return {
        model,
        setModel,
        onSubmit
    }
}

export function Form() {
    const { model, setModel, onSubmit } = useForm();

    return (<div className={formClass}>
        <TextInput label="User Name" className={entryClass} value={model.userName} onChange={(value) => {
            setModel({ ...model, userName: value });
        }} />
        <TextInput label="Title" className={entryClass} value={model.title} onChange={(value) => {
            setModel({ ...model, title: value });
        }} />
        <button onClick={onSubmit}>
            Submit
        </button>
    </div>)
}