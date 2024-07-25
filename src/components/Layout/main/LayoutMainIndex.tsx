import Grid from "@mui/material/Grid";
import Content from "@/components/Content/ContentIndex";
import SideMenu from "@/components/SideMenu/SideMenuIndex";
import styles from "@/components/Layout/layoutindex.module.css";

function LayoutMainIndex() {
  return (
    <div className={styles.container}>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <SideMenu />
        </Grid>
        <Grid item xs={10}>
          <Content />
        </Grid>
      </Grid>
    </div>
  );
}

export default LayoutMainIndex;
