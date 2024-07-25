import Grid from "@mui/material/Grid";
import Background from "@/components/Background/BackgroundComponent";
import styles from "@/components/Layout/layoutindex.module.css";
import RegisterSideMenuComponent from "@/components/SideMenu/RegisterSideMenu";

function LayoutRegisterIndex() {
  return (
    <div className={styles.container}>
      <Grid container spacing={0}>
        <Grid item xs={9}>
          <Background />
        </Grid>
        <Grid item xs={3}>
          <RegisterSideMenuComponent />
        </Grid>
      </Grid>
    </div>
  );
}

export default LayoutRegisterIndex;
