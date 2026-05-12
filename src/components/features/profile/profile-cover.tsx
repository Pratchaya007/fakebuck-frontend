import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import Image from "next/image";
import ImageUploadDialog from "./image-upload-dialog";
import { uploadCover } from "@/lib/actions/user.action";

interface ProfileCoverProps {
  coverUrl: string | null;
  canEdit?: boolean;
}

export default function ProfileCover({
  coverUrl,
  canEdit = false,
}: ProfileCoverProps) {
  return (
    <div className="relative max-w-273 aspect-1095/405 mx-auto rounded-b-2xl overflow-hidden">
      {coverUrl && (
        <Image alt="cover" src={coverUrl} fill className=" object-cover" />
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
          initialUrl={coverUrl}
          title="Edit cover photo"
          onUpload={uploadCover}
        />
      )}
    </div>
  );
}
