"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { uploadCover } from "@/lib/actions/user.action";
import { FileImage, Loader } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode, useRef, useState, useTransition } from "react";

type ImageUploadDialogProps = {
  initalCoverUrl?: string | null;
  trigger: ReactNode;
};

export default function ImageUploadDialog({
  trigger,
  initalCoverUrl,
}: ImageUploadDialogProps) {
  const fileInputEl = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  // fn handle upload file in database
  const handleClickUpload = async () => {
    startTransition(async () => {
      if (file) {
        await uploadCover(file);
        setOpen(false);
        setFile(null);
        router.refresh();
      }
    });
  };

  const imageUrl = file ? URL.createObjectURL(file) : initalCoverUrl;

  return (
    <>
      {isPending && (
        <div className=" fixed inset-0 bg-black/40 z-100 flex justify-center items-center">
          <Loader className=" animate-spin text-primary" />
        </div>
      )}
      <Dialog
        open={open}
        onOpenChange={(current) => {
          if (current === false) {
            setFile(null);
            if (fileInputEl.current) fileInputEl.current.value = ""; //ในกรณีที่เลือกรูปซ้ำกัน❗️
          }
          setOpen(current);
        }}
      >
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent
          className="sm:max-w-xl"
          onInteractOutside={(e) => {
            if (isPending) e.preventDefault();
          }}
          onEscapeKeyDown={(e) => {
            if (isPending) e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle>Edit cover photo</DialogTitle>
          </DialogHeader>
          <div>
            <div className="relative aspect-1095/405 rounded-lg overflow-hidden bg-muted flex justify-center items-center">
              {imageUrl ? (
                <Image
                  alt="cover"
                  src={imageUrl}
                  fill
                  className="object-cover"
                />
              ) : (
                <FileImage className="size-20 text-muted-foreground" />
              )}
            </div>
          </div>
          <DialogFooter className=" justify-self-start">
            <div>
              {file && (
                <Button onClick={handleClickUpload} disabled={isPending}>
                  Upload
                </Button>
              )}
              <Button
                variant={"outline"}
                onClick={() => fileInputEl.current?.click()}
                disabled={isPending}
              >
                Choose photo
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <input
        type="file"
        className="hidden"
        ref={fileInputEl}
        onChange={(e) => {
          // console.log(e.target.files) การดึงข้อมูลรูปที่เรานั่นเลือก
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />
    </>
  );
}
