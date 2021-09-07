import React, { FC, useState } from "react";
import {apiCreateWorkday, apiUpdateWorkday, CalendarDayDto} from "../api/Workday";
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from "@material-ui/core";
import { Done, Edit } from "@material-ui/icons";

export const WorkdayRow: FC<{ day: CalendarDayDto, onUpdate: ()=>void }> = ({ day, onUpdate }) => {
  const isWorkday = day.type === "workday";
  const hasSummary = !!day.workday?.summary;
  const [editing, setEditing] = useState<boolean>(!hasSummary);
  const [summary, setSummary] = useState<string>(day.workday?.summary ?? '');

  const handleDone = () => {
    setEditing(false);
    if (day.workday) {
        apiUpdateWorkday({workday_id: day.workday.id, summary}).then(onUpdate)
    } else {
        apiCreateWorkday({
            summary,
            day_id: day.calendar_day_id,
            user_id: 1,
            type: 'workday'
        }).then(onUpdate)
    }
  };

  if (isWorkday) {
    return (
      <ListItem button>
        <ListItemText primary={day.date} />
        <ListItemText
          primary={
            <TextField
              id={`summary-${day.date}`}
              label="Summary"
              disabled={!editing}
              defaultValue={day.workday?.summary}
              onChange={(e) => setSummary(e.target.value)}
              autoComplete="off"
            />
          }
        />

        <ListItemSecondaryAction>
          {summary &&
            (editing ? (
              <IconButton edge="end" aria-label="done" onClick={handleDone}>
                <Done />
              </IconButton>
            ) : (
              <IconButton
                edge="end"
                aria-label="edit"
                onClick={() => setEditing(true)}
              >
                <Edit />
              </IconButton>
            ))}
        </ListItemSecondaryAction>
      </ListItem>
    );
  } else {
    return <ListItem />;
  }
};
