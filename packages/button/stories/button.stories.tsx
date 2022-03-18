import { Button } from "@masaiui/button";

export default {
  title: "Components / Forms / Button",
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
      width: "50%",
    }}
  >
    <Button>Default Button</Button>
    <Button colorScheme="brick">brick Button</Button>
    <Button colorScheme="red">Button</Button>
    <Button colorScheme="green">Button</Button>
    <Button colorScheme="blue">Button</Button>
    <Button colorScheme="yellow">Button</Button>
  </div>
);

export const outlines = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      width: "50%",
    }}
  >
    <Button variant="outline" colorScheme="red">
      Button
    </Button>
    <Button variant="outline" colorScheme="green">
      Button
    </Button>
    <Button variant="outline" colorScheme="blue">
      Button
    </Button>
    <Button variant="outline" colorScheme="purple">
      Button
    </Button>
    <Button variant="outline" colorScheme="cyan">
      Button
    </Button>
    <Button variant="outline" colorScheme="yellow">
      Button
    </Button>
  </div>
);
