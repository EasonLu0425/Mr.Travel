"use client"

import { LogOut } from "lucide-react";
import { logout } from "@/actions/auth";
import { Button } from "@/components/ui/button";

const LogoutBtn = () => {
  return (
    <Button onClick={() => { logout(); }} >
      <LogOut />
    </Button>
  )
}

export default LogoutBtn;