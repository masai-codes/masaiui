import { Input } from "@masaiui/input";

export default {
  title: "Components / Forms / Input",
  decorators: [
    (Story: any) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export const basic = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      width: "50%",
      gap: "10px",
    }}
  >
    <Input capacity={"xs"} />
    <Input capacity={"sm"} />
    <Input capacity={"md"} />
    <Input capacity={"lg"} />
  </div>
);
