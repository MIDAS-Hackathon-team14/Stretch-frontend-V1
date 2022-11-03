export const WorkInfo = {
  record_sum: 1200, //시간을 분으로 변환
  week_plan: [
    {
      date: "2022-10-31",
      is_out_of_office: true, //출장, 외근, 휴가 등 회사에 있지 않음
      out_of_office_type: "출장",
      record_start: "2022-11-01T09:00:00",
      record_end: "2022-11-01T18:00:00",
      plan_start: "2022-11-01T09:00:00",
      plan_end: "2022-11-01T18:00:00",
      record_sum: 480,
    },
    {
      date: "2022-11-01",
      is_out_of_office: false,
      place: "회사",
      plan_start: "2022-11-01T00:00:00",
      plan_end: "2022-11-01T00:00:00",
      record_start: "2022-11-01T09:00:00",
      record_end: "2022-11-01T18:00:00",
      record_sum: 480,
    },
    {
      date: "2022-11-02",
      is_out_of_office: true,
      out_of_office_type: "휴가",
      plan_start: "2022-11-03T09:12:00",
      plan_end: "2022-11-03T18:11:00",
      record_start: "2022-11-01T09:00:00",
      record_end: "2022-11-01T18:12:00",
      record_sum: 480,
    },
    {
      date: "2022-11-03",
      is_out_of_office: false,
      place: "재택근무",
      plan_start: "2022-11-03T09:12:00",
      plan_end: "2022-11-03T18:12:00",
      record_start: "2022-11-01T13:00:00",
      record_end: "2022-11-01T22:00:00",
      record_sum: 280,
    },
    {
      date: "2022-11-04",
      is_planed: true,
      is_out_of_office: false,
      place: "회사",
      plan_start: "2022-11-04T09:12:00",
      plan_end: "2022-11-04T18:12:00",
      record_start: "2022-11-01T00:00:00",
      record_end: "2022-11-01T00:00:00",
      record_sum: 280,
    },
    {
      date: "2022-11-05",
      is_planed: false,
    },
    {
      date: "2022-11-06",
      is_planed: false,
    },
  ],
};
