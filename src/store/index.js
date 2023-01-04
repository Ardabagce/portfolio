import {configureStore} from "@reduxjs/toolkit"
import auth from "./authProvider"

const store = configureStore({
    reducer:{
        auth
    }
})

export default store