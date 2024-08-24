import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Heading from "@/components/Shared/Heading";
import AttendanceForm from "@/components/AttendanceForm";
import CardWrapper from "@/components/Shared/CardWrapper";

const Attendance = () => {
  // Initialize the date state with today's date
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div>
        <Heading heading="Attendance" />
      </div>
      <div className="h-full flex">
        {/* Left Panel: Attendance Input and Table */}
        <div className="flex-1 space-y-10">
          {/* attendance input form */}
          <CardWrapper
            heading="Attendance Input"
            title="Input your attendance data here"
          >
            <AttendanceForm></AttendanceForm>
          </CardWrapper>

          {/* table */}
          <CardWrapper
            heading="Attendance Table"
            title="Your attendance details"
          >
            <h1>tabel gose here</h1>
          </CardWrapper>
        </div>

        {/* Right Panel: Calendar */}
        <div className="space-y-10 pl-6">
          {/* attendance input form */}
          <CardWrapper heading="Calender" title="Todays Date">
            <Calendar
              mode="single"
              selected={date} // Today's date is selected by default
              onSelect={setDate}
              className=""
            />
          </CardWrapper>
        </div>
      </div>
    </>
  );
};

export default Attendance;
