import Link from "next/link";
import { ComponentProps } from "react";

export const SomeLink = (props: ComponentProps<typeof Link>) => (
  <Link
    className="rounded-lg p-2 hover:bg-gray-50 border-black border-[1px]"
    {...props}
  />
);
