import clsx from "clsx";

type SidebarType = {
  children: React.ReactNode;
  className?: string;
};

const Sidebar = ({ children, className }: SidebarType) => {
  return <aside className={clsx("w-full h-full px-4 pt-10", className)}>{children}</aside>;
};

export default Sidebar;
