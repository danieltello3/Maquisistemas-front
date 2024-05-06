import { Container } from "@mui/material"
import { Navbar } from "../ui/organisms/Navbar/Navbar"

interface LayoutProps {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <Container maxWidth="xl" style={{padding: 0}}>
      <Navbar />
      {children}
    </Container>
  )
}

export default Layout