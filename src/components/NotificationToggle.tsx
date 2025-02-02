import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNotificationToggle } from "../hooks/useUser";

interface NotificationButtonProps {
  userId: string;
}

const NotificationButton: React.FC<NotificationButtonProps> = ({ userId }) => {
  const { toggleNotification } = useNotificationToggle(userId);

  const handleToggle = async () => {
    try {
      await toggleNotification.mutateAsync();
    } catch (error) {
      console.error("Error toggling notification:", error);
    }
  };

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Button
        variant="contained"
        onClick={handleToggle}
        sx={{
          backgroundColor: "#52B788",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#2D6A4F",
          },
        }}
      >
        Change your notification status
      </Button>
    </Box>
  );
};

export default NotificationButton;
