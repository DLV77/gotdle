import dynamic from "next/dynamic";
const EmojiGame = dynamic(() => import("@/components/EmojiGame"), { ssr: false });
export default function EmojiPage() { return <EmojiGame />; }
