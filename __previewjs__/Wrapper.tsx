import { Component, ParentProps } from "solid-js"

import "@unocss/reset/antfu.css"
import "uno.css"

export const Wrapper: Component<ParentProps> = (props) => {
    return <>{props.children}</>
}
