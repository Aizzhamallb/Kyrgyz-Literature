import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Alatoo from "../../assets/image.png";
import "../../styles/Footer.css";
export default function Footer() {
  return (
    <Box
      id="mainBox"
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      
      color="black">
      <Container maxWidth="lg">
        <Box>
          <Link target="_blank" href="http://alatoo.edu.kg/#gsc.tab=0">
            <img
              style={{ color: "white", textDecoration: "none" }}
              width={"150px"}
              src={Alatoo}
              alt=""
            />
          </Link>
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Link
              style={{ textDecoration: "none" }}
              target="_blank"
              href="https://www.president.kg/ru/kyrgyzstan/istoriya">
              <Box style={{ color: "black" }} borderBottom={1}>
                History of Kyrgyzstan
              </Box>
            </Link>
            <Box>
              <Link
                href="http://alatoo.edu.kg/view/public/pages/contacts.xhtml#gsc.tab=0"
                style={{ textDecoration: "none" }}
                color="inherit">
                Contact
              </Link>
            </Box>
            <Box>
              <Link style={{ textDecoration: "none" }} color="inherit">
                Support
              </Link>
            </Box>
            <Box>
              <Link style={{ textDecoration: "none" }} color="inherit">
                Privacy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Account</Box>
            <Box>
              <Link
                style={{ textDecoration: "none" }}
                href="/login"
                color="inherit">
                Login
              </Link>
            </Box>
            <Box>
              <Link
                style={{ textDecoration: "none" }}
                href="/register"
                color="inherit">
                Register
              </Link>
            </Box>
            <Box>
              <Link
                style={{ textDecoration: "none" }}
                href="/paid"
                color="inherit">
                Pay
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Messages</Box>
            <Box>
              <Link color="inherit">Instagram</Link>
            </Box>
            <Box>
              <Link color="inherit">WhatsApp</Link>
            </Box>
            <Box>
              <Link color="inherit">Telegram</Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          © AIZHAMAL ALL RIGHTS RESERVED
        </Box>
      </Container>
    </Box>
    // </footer>
  );
}
