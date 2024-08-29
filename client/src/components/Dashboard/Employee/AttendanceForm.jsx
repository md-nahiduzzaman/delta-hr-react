import { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
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
import { cn } from "@/lib/utils";

const AttendanceForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      date: null,
      inTime: "",
      inTimeRemark: "",
      outTime: "",
      outTimeRemark: "",
    },
  });

  const onSubmit = (data) => {
    // Handling empty strings for remarks fields
    const submissionData = {
      ...data,
      inTimeRemark: data.inTimeRemark.trim() || "",
      outTimeRemark: data.outTimeRemark.trim() || "",
    };
    console.log(submissionData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex space-x-4 items-center justify-between w-full">
          {/* Date */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Date of Attendance</FormLabel>
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
                      {field.value ? format(field.value, "PPP") : "Pick a date"}
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

          {/* In Time */}
          <FormField
            control={form.control}
            name="inTime"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>In Time</FormLabel>
                <FormControl>
                  <Input {...field} type="time" step="300" className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* In Time Remark */}
          <FormField
            control={form.control}
            name="inTimeRemark"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>In Time Remarks</FormLabel>
                <FormControl>
                  <Input {...field} type="text" placeholder="In time remarks" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Out Time */}
          <FormField
            control={form.control}
            name="outTime"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Out Time</FormLabel>
                <FormControl>
                  <Input {...field} type="time" step="300" className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Out Time Remark */}
          <FormField
            control={form.control}
            name="outTimeRemark"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Out Time Remarks</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Out time remarks"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-64" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default AttendanceForm;
