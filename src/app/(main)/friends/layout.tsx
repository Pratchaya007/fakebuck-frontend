import FriendSidebar from "@/components/features/friend/friend-sidebar";

export default function FriendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex">
    <FriendSidebar/>
    <main>
      {children}
    </main>
  </div>
}
