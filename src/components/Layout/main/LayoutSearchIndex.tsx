import SideMenu from "@/components/SideMenu/SideMenuIndex";
import Grid from "@mui/material/Grid";
import styles from "@/components/Layout/layoutindex.module.css";
import SearchIndex from "@/components/busca/SearchIndex";

function LayoutSearchIndex() {
  return (
    <div className={styles.container}>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <SideMenu />
        </Grid>
        <Grid item xs={10}>
          <SearchIndex />
        </Grid>
      </Grid>
    </div>
  );
}

export default LayoutSearchIndex;
