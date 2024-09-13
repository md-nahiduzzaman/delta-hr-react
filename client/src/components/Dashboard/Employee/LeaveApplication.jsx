import { useState } from "react";
import { useForm } from "react-hook-form";
import { format, differenceInCalendarDays } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const LeaveApplication = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      fromDate: null,
      toDate: null,
      leaveType: "",
      remarks: "",
    },
  });

  const today = format(new Date(), "PPP");

  const calculateTotalDays = (fromDate, toDate) => {
    if (fromDate && toDate) {
      return differenceInCalendarDays(toDate, fromDate) + 1;
    }
    return 0;
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-base mb-4">Apply Date: {today}</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex space-x-4 items-center justify-between w-full">
            {/* From Date */}
            <FormField
              control={form.control}
              name="fromDate"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>From Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value
                          ? format(field.value, "PPP")
                          : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* To Date */}
            <FormField
              control={form.control}
              name="toDate"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>To Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value
                          ? format(field.value, "PPP")
                          : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Total Days */}
            <FormField
              control={form.control}
              name="totalDays"
              render={() => (
                <FormItem className="flex-1">
                  <FormLabel>Total Days</FormLabel>
                  <FormControl>
                    <Input
                      value={calculateTotalDays(
                        form.watch("fromDate"),
                        form.watch("toDate")
                      )}
                      readOnly
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Leave Type */}
          <FormField
            control={form.control}
            name="leaveType"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Leave Type</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      {field.value || "Select leave type"}
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="annual leave">Annual Leave</SelectItem>
                      <SelectItem value="medical leave">
                        Medical Leave
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Remarks */}
          <FormField
            control={form.control}
            name="remarks"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Remarks</FormLabel>
                <FormControl>
                  <Input {...field} type="text" placeholder="Remarks" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LeaveApplication;
