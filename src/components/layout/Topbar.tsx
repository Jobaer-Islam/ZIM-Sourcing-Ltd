import React from "react";
import Link from "next/link";
import { Mail, Clock, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="topbar-links">
          <a href={`mailto:${COMPANY.email}`}>
            <Mail size={14} className="icon-mr" />
            <span>{COMPANY.email}</span>
          </a>
        </div>
        <div className="topbar-links">
          <span>
            <Clock size={14} className="icon-mr" />
            <span>{COMPANY.hours}</span>
          </span>
          <Link href="/quote" className="topbar-cta">
            <span>Request a quotation</span>
            <ArrowRight size={13} className="icon-ml" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
