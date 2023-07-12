import AdminPage from "./pages/AdminPage"

import Auth from "./pages/Auth"
import Home from "./pages/HomePage"
import UserPage from "./pages/UserPage"
import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, USER_INFO_ROUTE, USER_ROUTE } from "./utils/consts"
import ProductPage from "./pages/ProductPage"

export const adminRoutes =[
    {
        path: ADMIN_ROUTE,
        Component: AdminPage
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]

export const userRoutes = [
    {
        path: USER_ROUTE,
        Component: Home
    },
    {
        path: USER_INFO_ROUTE,
        Component: UserPage
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    }
]