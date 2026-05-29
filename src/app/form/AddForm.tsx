"use client";

import { format } from "date-fns";
import { ChevronDownIcon, Pencil, Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  addFormValidation,
  AddFormValidation,
} from "@/validations/add-form-validation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JobApplication } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/utils/trpc";
import { toast } from "sonner";
import { useState } from "react";

type props = {
  application?: JobApplication;
};
export function AddForm({ application }: props) {
  const isEdit = !!application;
  const createMutation = trpc.formData.create.useMutation();
  const updateMutation = trpc.formData.update.useMutation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddFormValidation>({
    resolver: zodResolver(addFormValidation),

    defaultValues: {
      companyName: application?.companyName ?? "",
      jobTitle: application?.jobTitle ?? "",
      role: application?.role ?? "",
      status: application?.status ?? "APPLIED",
      appliedDate: application?.appliedDate ?? undefined,
      location: application?.location ?? "",
      salary: application?.salary ?? "",
      link: application?.link ?? "",
      notes: application?.notes ?? "",
      mode: application?.mode ?? "ONSITE",
    },
  });

  const onSubmit = async (data: AddFormValidation) => {
  try {
    if (isEdit && application?.id) {
      await updateMutation.mutateAsync( data );
      console.log("UPDATED");
    } else {
      await createMutation.mutateAsync(data);

      console.log("CREATED");
      toast.success("Application added successfully!");
 
    }
  } catch (error) {
    console.log("error - ", error);
  }
};
  const onError = (errors: any) => {
    console.log("FORM ERRORS:", errors);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
             {isEdit ? (
      <>
        Edit <Pencil className="ml-2 h-4 w-4" />
      </>
    ) : (
      <>
        Add <Plus className="ml-2 h-4 w-4" />
      </>
    )}
        </Button>
      </DialogTrigger>

      <DialogContent className="lg:max-w-3xl">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Application" : "Add Application"}</DialogTitle>

          <DialogDescription> {isEdit ? "Update your job application." : "Add a new job application here."}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
          <FieldGroup className="flex flex-col gap-4 md:flex-row">
            <Field className="flex-1">
              <div className="mb-2 flex">
                <Label htmlFor="companyName">Company Name</Label>

                <span className="text-destructive ml-1">*</span>
              </div>

              <Input id="companyName" {...register("companyName")} />

              {errors.companyName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.companyName.message}
                </p>
              )}
            </Field>

            <Field className="flex-1">
              <div className="mb-2 flex">
                <Label htmlFor="jobTitle">Job Title</Label>

                <span className="text-destructive ml-1">*</span>
              </div>

              <Input id="jobTitle" {...register("jobTitle")} />

              {errors.jobTitle && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.jobTitle.message}
                </p>
              )}
            </Field>
          </FieldGroup>

          <FieldGroup className="flex flex-col gap-4 md:flex-row">
            <Field className="flex-1">
              <div className="mb-2 flex">
                <Label htmlFor="role">Role</Label>

                <span className="text-destructive ml-1">*</span>
              </div>

              <Input id="role" {...register("role")} />

              {errors.role && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.role.message}
                </p>
              )}
            </Field>

            <Field className="flex-1">
              <div className="mb-2 flex">
                <Label>Status</Label>

                <span className="text-destructive ml-1">*</span>
              </div>

              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="APPLIED">Applied</SelectItem>
                        <SelectItem value="INTERVIEW">Interview</SelectItem>
                        <SelectItem value="REJECTED">Rejected</SelectItem>
                        <SelectItem value="GHOSTED">Ghosted</SelectItem>
                        <SelectItem value="OFFERED">Offered</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.status && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.status.message}
                </p>
              )}
            </Field>
          </FieldGroup>

          <FieldGroup className="flex flex-col gap-4 md:flex-row">
            <Field className="flex-1">
              <Label htmlFor="salary">Salary</Label>

              <Input id="salary" {...register("salary")} />
            </Field>

            <Field className="flex-1">
              <div className="mb-2 flex">
                <Label>Applied Date</Label>

                <span className="text-destructive ml-1">*</span>
              </div>

              <Controller
                control={control}
                name="appliedDate"
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full justify-between font-normal"
                      >
                        {field.value
                          ? format(field.value, "PPP")
                          : "Pick a date"}

                        <ChevronDownIcon className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />

              {errors.appliedDate && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.appliedDate.message}
                </p>
              )}
            </Field>
          </FieldGroup>
          <FieldGroup className="flex flex-col gap-4 md:flex-row">
            <Field className="flex-1">
              <div className="mb-2 flex">
                <Label htmlFor="location">Location</Label>

                <span className="text-destructive ml-1">*</span>
              </div>

              <Input id="location" {...register("location")} />

              {errors.location && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.location.message}
                </p>
              )}
            </Field>

            <Field className="flex-1">
              <div className="mb-2 flex">
                <Label>Mode</Label>
              </div>

              <Controller
                control={control}
                name="mode"
                render={({ field }) => (
                  <RadioGroup
                    className="flex gap-4"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="ONSITE" id="ONSITE" />

                      <Label htmlFor="ONSITE">On-Site</Label>
                    </div>

                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="REMOTE" id="REMOTE" />

                      <Label htmlFor="REMOTE">Remote</Label>
                    </div>

                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="HYBRID" id="HYBRID" />

                      <Label htmlFor="HYBRID">Hybrid</Label>
                    </div>
                  </RadioGroup>
                )}
              />
            </Field>
          </FieldGroup>

          <Field>
            <Label htmlFor="link">Job URL</Label>

            <Input id="link" {...register("link")} />

            {errors.link && (
              <p className="mt-1 text-sm text-red-500">{errors.link.message}</p>
            )}
          </Field>
          <Field>
            <Label htmlFor="notes">Notes</Label>

            <Textarea id="notes" {...register("notes")} />
          </Field>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit"> {isEdit ? "Update" : "Save Changes"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddForm;
