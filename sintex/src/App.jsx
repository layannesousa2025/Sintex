import { Routes, Route } from "react-router";
export default function App() {
  return (
     <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  )
}