import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AppLayout } from "../layout/AppLayout"
import { AboutView } from "../pages/AboutPageView"
import { AdvokatView } from "../pages/AdvokatPageView"
import { ContactUs } from "../pages/ContactUsPageView"
import { HomeView } from "../pages/HomePageView"
import { NotFoundView } from "../pages/NotFoundView"

export const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<HomeView />} />
                    <Route path="/advokaterne" element={<AdvokatView />} />
                    <Route path="/om-leolov" element={<AboutView />} />
                    <Route path="/kontakt" element={<ContactUs />} />
                    <Route path="*" element={<NotFoundView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}