import { render } from "@testing-library/react";
import React from "react";

/** コンポーネントレンダリング */
export default function renderComponent(el: React.ReactElement<any, string | React.JSXElementConstructor<any>>) {
    return render(el);
}