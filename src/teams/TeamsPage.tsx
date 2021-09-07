import React, { useEffect, useState } from "react";
import { Page } from "../layout/Page";
import { Button, makeStyles } from "@material-ui/core";
import { apiListTeams, TeamsResponse } from "../api/Teams";
import { TeamsTable } from "./TeamsTable";
import { NewTeamDialog } from "./NewTeamDialog";

const useStyles = makeStyles({
  button: {
    marginBottom: 10,
  },
});

export const TeamsPage = () => {
  const classes = useStyles();
  const [teams, setTeams] = useState<TeamsResponse>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = () => {
    apiListTeams().then(setTeams);
  };

  const onCreate = () => {
    fetchTeams();
    setDialogOpen(false);
  };

  return (
    <Page>
      <NewTeamDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onCreate={onCreate}
      />

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => setDialogOpen(true)}
      >
        Create team
      </Button>
      <TeamsTable teams={teams} onDelete={fetchTeams} />
    </Page>
  );
};
