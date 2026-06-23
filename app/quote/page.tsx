"use client";
import dynamic from "next/dynamic";
const QuoteGame = dynamic(() => import("@/components/QuoteGame"), { ssr: false });
export default function QuotePage() { return <QuoteGame />; }
