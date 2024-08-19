import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Heading from "@/components/Shared/Heading";

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
        <div className="flex-1 p-4">
          <h1 className="text-xl font-bold">Attendance Input</h1>
          <div className="mt-4">
            <p>Enter attendance data for {date.toDateString()}:</p>
            <input
              type="text"
              className="mt-2 p-2 border rounded w-full"
              placeholder="Enter data"
            />
          </div>
          <Separator className="my-4" />
          <div className="overflow-auto">
            <h1 className="text-xl font-bold">Table</h1>
            {/* Table content goes here */}
            <p>Table content goes here...</p>
          </div>
        </div>

        {/* Separator between panels */}
        <Separator orientation="vertical" className="mx-4" />

        {/* Right Panel: Calendar */}
        <div className="w-[300px] p-4">
          <h1 className="text-xl font-bold">Calendar</h1>
          <Calendar
            mode="single"
            selected={date} // Today's date is selected by default
            onSelect={setDate}
            className="mt-4 rounded border"
          />
        </div>
      </div>
    </>
  );
};

export default Attendance;
