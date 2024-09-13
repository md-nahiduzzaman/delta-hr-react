import LeaveApplication from "@/components/Dashboard/Employee/LeaveApplication";
import LeaveTable from "@/components/Dashboard/Employee/LeaveTable";
import CardWrapper from "@/components/Shared/CardWrapper";
import Heading from "@/components/Shared/Heading";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Leave = () => {
  return (
    <>
      <div>
        <Heading heading="Leave Management" />
      </div>
      <div className="h-full flex">
        {/* Left Panel: Leave Table */}
        <div className="flex-1 space-y-10">
          <CardWrapper
            heading="Attendance Table"
            title="Your attendance details"
          >
            <LeaveTable />
          </CardWrapper>
        </div>

        {/* Right Panel: leave application here */}
        <div className="space-y-10 pl-6">
          {/* attendance input form */}
          <CardWrapper
            heading="Leave Application"
            title="Submit your leave application here"
          >
            {/* modal */}
            <Dialog>
              <DialogTrigger>
                <Button>Apply Leave</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Leave Application</DialogTitle>
                  <DialogDescription>
                    <LeaveApplication />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </CardWrapper>
        </div>
      </div>
    </>
  );
};

export default Leave;
