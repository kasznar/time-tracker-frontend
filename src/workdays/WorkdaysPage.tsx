import React, {useCallback, useEffect, useState} from "react";
import {Page} from "../layout/Page";
import {apiListWorkdays, CalendarDayDto, WorkdayRequest,} from "../api/Workday";
import {List} from "@material-ui/core";
import {WorkdayRow} from "./WorkdayRow";
import {MonthPicker} from "../components/MonthPicker";

export const WorkdaysPage = () => {
  const [days, setDays] = useState<CalendarDayDto[]>([]);
  const [filter, setFilter] = useState<WorkdayRequest>({
    year: 2021,
    month: 1,
    user_id: 1,
  });

  const handleFilterChange = (month: number) => {
    setFilter({
      ...filter,
      month
    })
  }

  const fetchUsers = useCallback(()=>{
    apiListWorkdays(filter).then(setDays);
  }, [filter, setDays])

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Page>
      <MonthPicker month={filter.month} onChange={handleFilterChange}/>
      <List component="nav" aria-label="secondary mailbox folders">
        {days.map((day) => (
          <WorkdayRow day={day} key={day.calendar_day_id} onUpdate={fetchUsers}/>
        ))}
      </List>
    </Page>
  );
};
