import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Image from "next/image";
import { MouseEvent, useState } from "react";

export type DynamicLoginButtonProps = {
  avatarUrl?: string;
  avatarAltText?: string;
  onClick?: (event: MouseEvent) => void;
  isLoggedIn?: boolean;
  loginText?: string;
  logoutText?: string;
};

const DynamicLoginButton = ({
  avatarUrl,
  avatarAltText,
  onClick,
  isLoggedIn: isLoggedInProp,
  loginText = "Login",
  logoutText = "Log Out",
}: DynamicLoginButtonProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    isLoggedInProp ?? !!avatarUrl ?? false
  );
  const handleClick = (event: MouseEvent) => {
    onClick?.(event);
    setIsLoggedIn((prev) => !prev);
  };
  const Content = () => {
    if (isLoggedIn) {
      if (avatarUrl) {
        return (
          <Avatar>
            <Image
              loader={() => avatarUrl}
              src={avatarUrl}
              alt={avatarAltText}
              layout="fill"
            />
          </Avatar>
        );
      }
      return logoutText;
    }
    return loginText;
  };
  return (
    <Button color="inherit" onClick={handleClick}>
      {isLoggedIn ? (
        avatarUrl ? (
          <Avatar>
            <Image
              loader={() => avatarUrl}
              src={avatarUrl}
              alt={avatarAltText}
              layout="fill"
            />
          </Avatar>
        ) : (
          "Log Out"
        )
      ) : (
        "Login"
      )}
    </Button>
  );
};

export default DynamicLoginButton;
