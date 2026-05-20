"use client";

import { format } from "date-fns";
import { ChevronDownIcon, Plus } from "lucide-react";
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

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

export function AddForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddFormValidation>({
    resolver: zodResolver(addFormValidation),

    defaultValues: {
      companyName: "",
      jobTitle: "",
      role: "",
      status: "Applied",
      appliedDate: undefined,
      location: "",
      salary: "",
      link: "",
      notes: "",
      mode: "OnSite",
    },
  });

  const onSubmit = (data: AddFormValidation) => {
    console.log("FORM DATA:", data);
  };

  const onError = (errors: any) => {
    console.log("FORM ERRORS:", errors);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Add <Plus className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="lg:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Add Application</DialogTitle>

          <DialogDescription>
            Add a new job application here.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="space-y-6"
        >
          <FieldGroup className="flex flex-col gap-4 md:flex-row">
            <Field className="flex-1">
              <div className="mb-2 flex">
                <Label htmlFor="companyName">
                  Company Name
                </Label>

                <span className="text-destructive ml-1">
                  *
                </span>
              </div>

              <Input
                id="companyName"
                {...register("companyName")}
              />

              {errors.companyName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.companyName.message}
                </p>
              )}
            </Field>

            <Field className="flex-1">
              <div className="mb-2 flex">
                <Label htmlFor="jobTitle">
                  Job Title
                </Label>

                <span className="text-destructive ml-1">
                  *
                </span>
              </div>

              <Input
                id="jobTitle"
                {...register("jobTitle")}
              />

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

                <span className="text-destructive ml-1">
                  *
                </span>
              </div>

              <Input
                id="role"
                {...register("role")}
              />

              {errors.role && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.role.message}
                </p>
              )}
            </Field>

            <Field className="flex-1">
              <div className="mb-2 flex">
                <Label>Status</Label>

                <span className="text-destructive ml-1">
                  *
                </span>
              </div>

              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Status</SelectLabel>

                        <SelectItem value="Applied">
                          Applied
                        </SelectItem>

                        <SelectItem value="Interview">
                          Interview
                        </SelectItem>

                        <SelectItem value="Rejected">
                          Rejected
                        </SelectItem>

                        <SelectItem value="Ghosted">
                          Ghosted
                        </SelectItem>

                        <SelectItem value="Offered">
                          Offered
                        </SelectItem>
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
              <Label htmlFor="salary">
                Salary
              </Label>

              <Input
                id="salary"
                {...register("salary")}
              />
            </Field>

            <Field className="flex-1">
              <div className="mb-2 flex">
                <Label>Applied Date</Label>

                <span className="text-destructive ml-1">
                  *
                </span>
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

                    <PopoverContent
                      className="w-auto p-0"
                      align="start"
                    >
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
                <Label htmlFor="location">
                  Location
                </Label>

                <span className="text-destructive ml-1">
                  *
                </span>
              </div>

              <Input
                id="location"
                {...register("location")}
              />

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
                      <RadioGroupItem
                        value="OnSite"
                        id="onsite"
                      />

                      <Label htmlFor="onsite">
                        On-Site
                      </Label>
                    </div>

                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="Remote"
                        id="remote"
                      />

                      <Label htmlFor="remote">
                        Remote
                      </Label>
                    </div>

                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="Hybrid"
                        id="hybrid"
                      />

                      <Label htmlFor="hybrid">
                        Hybrid
                      </Label>
                    </div>
                  </RadioGroup>
                )}
              />
            </Field>
          </FieldGroup>

          <Field>
            <Label htmlFor="link">
              Job URL
            </Label>

            <Input
              id="link"
              {...register("link")}
            />

            {errors.link && (
              <p className="mt-1 text-sm text-red-500">
                {errors.link.message}
              </p>
            )}
          </Field>
          <Field>
            <Label htmlFor="notes">
              Notes
            </Label>

            <Textarea
              id="notes"
              {...register("notes")}
            />
          </Field>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
              >
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit">
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddForm;