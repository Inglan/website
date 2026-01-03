import Header from "@/components/header";
import { IPsWrapper } from "./list-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IP Addresses",
};

export default function IPs() {
  return (
    <div className="max-w-4xl w-full mx-auto border-x border-dashed">
      <Header>IP Addresses</Header>
      <IPsWrapper />
    </div>
  );
}
