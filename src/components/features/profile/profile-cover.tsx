import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import Image from "next/image";
import ImageUploadDialog from "./image-upload-dialog";

interface ProfileCoverProps {
  converUrl: string | null;
  canEdit?: boolean;
}

export default function ProfileCover({
  converUrl,
  canEdit = false,
}: ProfileCoverProps) {
  return (
    <div className="relative max-w-273 aspect-1095/405 mx-auto rounded-b-2xl overflow-hidden">
      {converUrl && (
        <Image alt="cover" src={converUrl} fill className=" object-cover" />
      )}
      {canEdit && (
        <ImageUploadDialog
          trigger={
            <Button
              className="absolute bottom-4 right-4 bg-background"
              variant="outline"
            >
              <Camera />
              Edit cover photo
            </Button>
          }
          initalCoverUrl={converUrl}
        />
      )}
    </div>
  );
}
