import { BrowserRouter, Route, Routes } from "react-router"
import { HomeView } from "./pages/HomePageView"
import { NotFoundView } from "./pages/NotFoundView"
import { AppLayout } from "./layout/AppLayout"
import { ContactUs } from "./pages/ContactUsPageView"
import { AboutView } from "./pages/AboutPageView"
import { AdvokatView } from "./pages/AdvokatPageView"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/hjem" element={<HomeView />} />
          <Route path="/advokaterne" element={<AdvokatView />} />
          <Route path="/om-leolov" element={<AboutView />} />
          <Route path="/kontakt" element={<ContactUs />} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
