import { BrowserRouter, Route, Routes } from "react-router"
import { AppView } from "./pages/AppView"
import { HomeView } from "./pages/HomePageView"
import { NotFoundView } from "./pages/NotFoundView"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppView />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/hjem" element={<HomeView />} />
          <Route path="/advokaterne" element={<HomeView />} />
          <Route path="/om-leolov" element={<HomeView />} />
          <Route path="/kontakt" element={<HomeView />} />
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
