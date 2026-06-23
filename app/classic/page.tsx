import dynamic from "next/dynamic";
const ClassicGame = dynamic(() => import("@/components/ClassicGame"), { ssr: false });
export default function ClassicPage() { return <ClassicGame />; }
