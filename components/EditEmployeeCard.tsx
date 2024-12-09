"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { updateUser } from "@/lib/actions/employee.action";
import { useRouter } from "next/navigation";
// import { createUser } from "@/lib/actions/employee.action";
const FormSchema = z.object({
  name: z.string().min(3),
  position: z.string().min(3),
  skillset: z.string().min(3),
  status: z.boolean().default(false).optional(),
});

interface EmployeeCardProps {
  id: number;
  name: string;
  position: string;
  skill: string;
  status: boolean;
}

const EditEmployeeCard = ({
  id,
  name,
  position,
  skill,
  status,
}: EmployeeCardProps) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name,
      position,
      skillset: skill,
      status,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await updateUser({
        EmployeeID: id,
        Name: data.name,
        Position: data.position,
        SkillSet: data.skillset,
        AvailabilityStatus: data.status || false,
      });
      form.reset();
      router.push("/employees");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input placeholder="Enter Position" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="skillset"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SkillSet</FormLabel>
              <FormControl>
                <Input placeholder="Enter SkillSet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Availability Status</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default EditEmployeeCard;
