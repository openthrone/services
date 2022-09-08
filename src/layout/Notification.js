import { showNotification } from "@mantine/notifications";
import { CheckIcon } from "@modulz/radix-icons";
function Notification() {
  return showNotification({
    id: "load-data",
    title: "We got you !",
    message: "We'll get back to you soon",
    color: "green",
    icon: <CheckIcon />,
    autoClose: 5000,
  });
}

export default Notification;
