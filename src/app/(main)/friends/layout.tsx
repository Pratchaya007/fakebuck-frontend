import FriendSidebar from "@/components/features/friend/friend-sidebar";

export default function FriendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex">
    <FriendSidebar/>
    <main className="flex-1 ml-90">
      {children}
    </main>
  </div>
}
