import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LeaveTable = () => {
  return (
    <>
      <div>
        <Table>
          <TableCaption>A list of your leave data</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Apply Date</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Total Days</TableHead>
              <TableHead>Remarks</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>25-Aug-2024</TableCell>
              <TableCell>26-Aug-2024</TableCell>
              <TableCell>28-Aug-2024</TableCell>
              <TableCell>2 days</TableCell>
              <TableCell>Family Emergency</TableCell>
              <TableCell>Approved</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default LeaveTable;
