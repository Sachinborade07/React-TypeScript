import Customer from "./components/Customer"
import Users from "./components/Users"

function App() {
  return (
    <>
      <Customer firstName="Sachin" lastName="Borade" /* pinCode={423109}*/ />
      <Users userId={1} userName="ADMIN" />
    </>
  )
}
export default App
