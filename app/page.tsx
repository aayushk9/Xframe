import { Images } from "@/components/Images";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>
        Xframe: Your go to place for cool images
      </h1>
      <div>
        <h3>Images collection</h3>
        <div>
          <Images/>
        </div>
      </div>
    </div>
  );
} 