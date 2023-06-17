import { Route, Router, Routes } from "@solidjs/router"
import { render } from "solid-js/web"
import { Splash } from "./views/Splash"

import "@unocss/reset/tailwind-compat.css"
import "uno.css"

render(
    () => (
        <Router>
            <Routes>
                <Route path="/" component={Splash} />
            </Routes>
        </Router>
    ),
    document.getElementById("app")!
)
