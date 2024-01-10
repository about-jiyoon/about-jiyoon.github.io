"use client";

import { Drawer, DrawerClose, DrawerContent } from "@/components/Drawer";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function WorkPanner({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const params = useParams<{ work?: string }>();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (params.work && (ref.current?.clientWidth ?? 0) > 0) {
      setOpen(true);
    }
  }, [params]);

  if (!params.work) {
    return <>{children}</>;
  }

  return (
    <>
      <div ref={ref} className="sm:hidden">
        <Drawer
          open={open}
          onOpenChange={async (open) => {
            if (!open) {
              setOpen(false);
              await new Promise((resolve) => setTimeout(resolve, 200));
              router.push("/");
            }
          }}
          dismissible={false}
        >
          <DrawerContent className="w-full h-full">
            <DrawerClose>close</DrawerClose>
            {children}
          </DrawerContent>
        </Drawer>
      </div>

      <div className="hidden sm:block w-full h-full">{children}</div>
    </>
  );
}
