import Grid from "@mui/material/Grid";
import Background from "@/components/Background/BackgroundComponent";
import LoginSideMenuComponent from "@/components/SideMenu/LoginSideMenu";
import styles from "@/components/Layout/layoutindex.module.css";

function LayoutLoginIndex() {
  return (
    <div className={styles.container}>
      <Grid container spacing={0}>
        <Grid item xs={9}>
          <Background />
        </Grid>
        <Grid item xs={3}>
          <LoginSideMenuComponent />
        </Grid>
      </Grid>
    </div>
  );
}

export default LayoutLoginIndex;
