import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { LuPlus } from "react-icons/lu";
import { Button, ButtonProps } from "../ui/button";

const CreateEventListItem = forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement> & Pick<ButtonProps, "onClick">
>(({ className, onClick, ...props }, ref) => {
  return (
    <li ref={ref} {...props}>
      <Button
        variant="ghost"
        onClick={onClick}
        className={cn("h-full w-full flex flex-col justify-center items-center", className)}
      >
        <LuPlus className="text-7xl" />
        <span className="text-lg">Create Event</span>
      </Button>
    </li>
  );
});

CreateEventListItem.displayName = "CreateEventListItem";

export default CreateEventListItem;
