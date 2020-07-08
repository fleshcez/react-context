import styles from "./Content.module.scss";
import React from "react";
import { Form } from "./Form/Form";

const { container: containerClass } = styles;

export function Content() {
    return (<div className={containerClass}>
        <Form />
    </div>);
}