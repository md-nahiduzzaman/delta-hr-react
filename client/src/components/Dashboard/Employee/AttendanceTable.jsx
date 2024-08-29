import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AttendanceTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your attendance data</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Attendance Date</TableHead>
            <TableHead>In Time</TableHead>
            <TableHead>In Time Remarks</TableHead>
            <TableHead>Out Time</TableHead>
            <TableHead>Out Time Remarks</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>25-Aug-2024</TableCell>
            <TableCell>08:00am</TableCell>
            <TableCell>No remarks</TableCell>
            <TableCell>06:00pm</TableCell>
            <TableCell>No remarks</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default AttendanceTable;
