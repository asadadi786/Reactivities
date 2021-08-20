import { FullFileBrowser } from "chonky";
import { Grid } from "semantic-ui-react";
import TempNavBar from "./TempNavBar";

export const MyFileBrowser = () => {
  const files = [
    { id: "lht1", name: "Onsite Forms", isDir: true },
    { id: "lht2", name: "Offsite Forms", isDir: true },
  ];
  const folderChain = [{ id: "xcv", name: "Forms", isDir: true }];
  return (
    <>
      <TempNavBar />

      <Grid style={{ marginTop: "7em" }}>
        <Grid.Column width="2"></Grid.Column>
        <Grid.Column width="12">
          <div style={{ height: 500 }}>
            <FullFileBrowser files={files} folderChain={folderChain} />
          </div>
        </Grid.Column>
      </Grid>
    </>
  );
};
