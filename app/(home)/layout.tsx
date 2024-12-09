import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/Header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
