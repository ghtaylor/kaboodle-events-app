import { cn } from "@/lib/utils";
import { Ticket } from "@eventer-app/db/schema";
import React, { forwardRef, useMemo } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Button } from "../ui/button";

interface PurchaseTicketListItemProps {
  ticket: Ticket;
  selectedCount?: number;
  incrementCount?: () => void;
  decrementCount?: () => void;
}

const TicketCounterListItem = forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement> & PurchaseTicketListItemProps
>(({ ticket, selectedCount, incrementCount, decrementCount, className, ...props }, ref) => {
  const ticketPrice = useMemo(() => ticket.priceCentAmount / 100, [ticket.priceCentAmount]);
  const ticketBookingFee = useMemo(() => ticket.bookingFeeCentAmount / 100, [ticket.bookingFeeCentAmount]);

  return (
    <li ref={ref} className={cn("flex gap-x-6 items-center p-4", className)} {...props}>
      <span className="text-3xl font-bold w-6">{selectedCount}</span>
      <div className="flex-grow">
        <h3 className="text-lg font-bold">{ticket.type}</h3>
        <span className="block">£{ticketPrice.toFixed(2)}</span>
        <span className="text-sm italic block">+ £{ticketBookingFee.toFixed(2)} booking fee</span>
      </div>
      <div>
        <Button variant="secondary" onClick={decrementCount}>
          <LuMinus />
        </Button>
        <Button variant="secondary" onClick={incrementCount}>
          <LuPlus />
        </Button>
      </div>
    </li>
  );
});

TicketCounterListItem.displayName = "PurchaseTicketListItem";

export default TicketCounterListItem;
