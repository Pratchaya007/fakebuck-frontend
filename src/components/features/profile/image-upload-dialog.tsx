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
import { FileImage } from "lucide-react";
import Image from "next/image";
import { ReactNode, useRef, useState, useTransition } from "react";

type ImageUploadDialogProps = {
  trigger: ReactNode;
};

export default function ImageUploadDialog({ trigger }: ImageUploadDialogProps) {
  const fileInputEl = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const [isPending, startTransition] = useTransition();

  // fn handle upload file in database
  const handleClickUpload = async () => {
    startTransition(async () => {
      if (file) {
        await uploadCover(file);
      }
    });
  };

  return (
    <>
      <Dialog
        onOpenChange={(current) => {
          if (current === false) {
            setFile(null);
            if (fileInputEl.current) fileInputEl.current.value = ""; //ในกรณีที่เลือกรูปซ้ำกัน❗️
          }
        }}
      >
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Edit cover photo</DialogTitle>
          </DialogHeader>
          <div>
            <div className="relative aspect-1095/405 rounded-lg overflow-hidden bg-muted flex justify-center items-center">
              {file ? (
                <Image
                  alt="cover"
                  src={URL.createObjectURL(file)}
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
