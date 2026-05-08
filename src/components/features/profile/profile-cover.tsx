import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import Image from "next/image";
import ImageUploadDialog from "./image-upload-dialog";

export default function ProfileCover() {
  return (
    <div className="relative max-w-273 aspect-1095/405 mx-auto rounded-b-2xl overflow-hidden">
      <Image alt="cover" src={"/cover.jpeg"} fill className=" object-cover" />
      <ImageUploadDialog
        trigger={
          <Button
            className="absolute bottom-4 right-4 bg-background"
            variant={"outline"}
          >
            <Camera />
            Edit cover photo
          </Button>
        }
      />
    </div>
  );
}
