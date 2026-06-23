"use client";
import dynamic from "next/dynamic";
const DeathGame = dynamic(() => import("@/components/DeathGame"), { ssr: false });
export default function DeathPage() { return <DeathGame />; }
