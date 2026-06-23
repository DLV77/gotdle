"use client";
import dynamic from "next/dynamic";
const ImageGame = dynamic(() => import("@/components/ImageGame"), { ssr: false });
export default function ImagePage() { return <ImageGame />; }
