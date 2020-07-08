import React from "react";
import styles from "./TextInput.module.scss";
import clsx from "clsx";

const { textInput: textInputClass, label: labelClass, inputField: inputFieldClass } = styles;

interface TextInputProps {
    onChange: (text: string) => void;
    value: string;
    label: string;
    className?: string;
}

export function TextInput({ value, label, onChange, className }: TextInputProps) {
    const cls = clsx(textInputClass, className);

    return (<div className={cls}>
        <label className={labelClass}>{label}</label>
        <input className={inputFieldClass} value={value} onChange={(event) => {
            onChange(event.currentTarget.value);
        }} />
    </div>);
}